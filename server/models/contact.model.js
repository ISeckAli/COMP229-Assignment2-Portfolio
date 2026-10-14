// Import Mongoose to define the Contact model.
import mongoose from "mongoose";

// Contact fields required by Assignment 2 and the Assignment 1 contact form.
const ContactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: "First name is required",
    trim: true,
  },

  lastName: {
    type: String,
    required: "Last name is required",
    trim: true,
  },

  contactNumber: {
    type: String,
    required: "Contact number is required",
    trim: true,
  },

  email: {
    type: String,
    required: "Email is required",
    trim: true,
    lowercase: true,
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

  message: {
    type: String,
    required: "Message is required",
    trim: true,
  },
});

// Export the Contact model for use by the backend controllers.
export default mongoose.model("Contact", ContactSchema);