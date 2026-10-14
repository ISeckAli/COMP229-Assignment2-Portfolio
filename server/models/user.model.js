// Import Mongoose to define the User model.
import mongoose from "mongoose";

// Import Node's built-in crypto module for secure password hashing.
import crypto from "crypto";

// User fields required by Assignment 2.
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: "Name is required",
  },

  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email is required",
    validate: {
      validator: function (value) {
        return (
          value.includes("@") &&
          value.includes(".") &&
          !value.includes(" ")
        );
      },
      message: "Please enter a valid email address",
    },
  },

  hashed_password: {
    type: String,
    required: "Password hash is required",
  },

  salt: {
    type: String,
    required: "Password salt is required",
  },

  created: {
    type: Date,
    default: Date.now,
  },

  updated: {
    type: Date,
    default: Date.now,
  },
});

// Accept a plaintext password without storing it in MongoDB.
UserSchema.virtual("password")
  .set(function (password) {
    this.passwordInput = password;

    if (password) {
      this.salt = crypto.randomBytes(16).toString("hex");
      this.hashed_password = this.encryptPassword(password);
    }
  })
  .get(function () {
    return this.passwordInput;
  });

// Validate password length before saving a user.
UserSchema.path("hashed_password").validate(function () {
  if (this.passwordInput && this.passwordInput.length < 6) {
    this.invalidate(
      "password",
      "Password must be at least 6 characters."
    );
  }

  if (this.isNew && !this.passwordInput) {
    this.invalidate("password", "Password is required");
  }

  return true;
});

// Hash a plaintext password using PBKDF2 and the user's unique salt.
UserSchema.methods.encryptPassword = function (password) {
  if (!password || !this.salt) {
    return "";
  }

  return crypto
    .pbkdf2Sync(password, this.salt, 100000, 64, "sha512")
    .toString("hex");
};

// Compare a submitted password with the stored password hash.
UserSchema.methods.authenticate = function (password) {
  return this.encryptPassword(password) === this.hashed_password;
};

// Update the modified date whenever the user record is saved.
UserSchema.pre("save", function () {
  this.updated = Date.now();
});

// Export the User model for use by the backend controllers.
export default mongoose.model("User", UserSchema);