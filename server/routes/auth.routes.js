// Import Express to create the authentication router.
import express from "express";

// Import the authentication controller.
import authController from "../controllers/auth.controller.js";

const router = express.Router();

// Create a new user account for Assignment 2.
router
  .route("/auth/signup")
  .post(authController.signup);

// Sign in and receive a JWT.
router
  .route("/auth/signin")
  .post(authController.signin);

// Sign out and clear the JWT cookie.
router
  .route("/auth/signout")
  .get(authController.signout);

export default router;