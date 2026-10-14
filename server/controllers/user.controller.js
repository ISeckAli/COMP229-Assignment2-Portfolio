// Import the User model.
import User from "../models/user.model.js";

// Import the shared controller error handler.
import errorHandler from "./error.controller.js";

// User fields accepted by the backend API.
const allowedFields = [
  "name",
  "email",
  "password",
];

// Return only valid User fields from incoming request data.
const getUserData = (body) => {
  const userData = {};

  allowedFields.forEach((field) => {
    if (body[field] !== undefined) {
      userData[field] = body[field];
    }
  });

  return userData;
};

// Return a user object without password or salt information.
const sanitizeUser = (user) => {
  const safeUser = user.toObject();

  delete safeUser.hashed_password;
  delete safeUser.salt;

  return safeUser;
};

// Create a new user.
const create = async (req, res) => {
  try {
    const userData = getUserData(req.body);
    const user = new User(userData);

    await user.save();

    return res.status(201).json({
      message: "User created successfully",
      user: sanitizeUser(user),
    });
  } catch (err) {
    return res.status(400).json({
      error:
        errorHandler.getErrorMessage(err) ||
        "Could not create user",
    });
  }
};

// Return all users without password information.
const list = async (req, res) => {
  try {
    const users = await User.find().select(
      "-hashed_password -salt"
    );

    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json({
      error: "Could not retrieve users",
    });
  }
};

// Find a user by ID and attach it to the request.
const userByID = async (req, res, next, id) => {
  try {
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    req.profile = user;
    next();
  } catch (err) {
    return res.status(400).json({
      error: "Invalid user ID",
    });
  }
};

// Return one user without password information.
const read = (req, res) => {
  return res.status(200).json(
    sanitizeUser(req.profile)
  );
};

// Update one user.
const update = async (req, res) => {
  try {
    const userData = getUserData(req.body);

    if (Object.keys(userData).length === 0) {
      return res.status(400).json({
        error: "No valid user fields were provided",
      });
    }

    Object.keys(userData).forEach((field) => {
      req.profile[field] = userData[field];
    });

    await req.profile.save();

    return res.status(200).json({
      message: "User updated successfully",
      user: sanitizeUser(req.profile),
    });
  } catch (err) {
    return res.status(400).json({
      error:
        errorHandler.getErrorMessage(err) ||
        "Could not update user",
    });
  }
};

// Delete one user.
const remove = async (req, res) => {
  try {
    const user = req.profile;

    await user.deleteOne();

    return res.status(200).json({
      message: "User deleted successfully",
      id: user._id,
    });
  } catch (err) {
    return res.status(500).json({
      error: "Could not delete user",
    });
  }
};

// Export the User controller functions.
export default {
  create,
  userByID,
  read,
  list,
  update,
  remove,
};