// Import the User model.
import User from "../models/user.model.js";

// Import JSON Web Token support.
import jwt from "jsonwebtoken";

// Import express-jwt middleware.
import { expressjwt } from "express-jwt";

// Import backend configuration.
import config from "../../config/config.js";

// Import the shared controller error handler.
import errorHandler from "./error.controller.js";

// Return a user object without password or salt information.
const sanitizeUser = (user) => {
  const safeUser = user.toObject();

  delete safeUser.hashed_password;
  delete safeUser.salt;

  return safeUser;
};

// Sign up a new user.
const signup = async (req, res) => {
  try {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    await user.save();

    return res.status(201).json({
      message: "User signed up successfully",
      user: sanitizeUser(user),
    });
  } catch (err) {
    return res.status(400).json({
      error:
        errorHandler.getErrorMessage(err) ||
        "Could not sign up user",
    });
  }
};

// Sign in a user and create a signed JWT.
const signin = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });

    if (!user) {
      return res.status(401).json({
        error: "User not found",
      });
    }

    if (!user.authenticate(req.body.password)) {
      return res.status(401).json({
        error: "Email and password don't match.",
      });
    }

    const token = jwt.sign(
      {
        _id: user._id,
      },
      config.jwtSecret
    );

    // Store the JWT in a cookie as demonstrated in Week 6.
    res.cookie("t", token, {
      httpOnly: true,
      sameSite: "lax",
    });

    return res.status(200).json({
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    return res.status(401).json({
      error: "Could not sign in",
    });
  }
};

// Sign out by clearing the JWT cookie.
const signout = (req, res) => {
  res.clearCookie("t");

  return res.status(200).json({
    message: "signed out",
  });
};

// Require a valid JWT for protected routes.
const requireSignin = expressjwt({
  secret: config.jwtSecret,
  algorithms: ["HS256"],
  userProperty: "auth",
});

// Verify that the authenticated user owns the requested profile.
const hasAuthorization = (req, res, next) => {
  const authorized =
    req.profile &&
    req.auth &&
    req.profile._id.toString() === req.auth._id.toString();

  if (!authorized) {
    return res.status(403).json({
      error: "User is not authorized",
    });
  }

  next();
};

// Export the authentication controller functions.
export default {
  signup,
  signin,
  signout,
  requireSignin,
  hasAuthorization,
};