// Import Express to create the User API router.
import express from "express";

// Import the User controller functions.
import userCtrl from "../controllers/user.controller.js";

// Import the authentication controller functions.
import authController from "../controllers/auth.controller.js";

const router = express.Router();

// Handle collection-level User CRUD operations.
router
  .route("/api/users")
  .get(userCtrl.list)
  .post(userCtrl.create);

// Load a user whenever an :id parameter is present.
router.param("id", userCtrl.userByID);

// Handle individual User CRUD operations with authentication.
router
  .route("/api/users/:id")
  .get(
    authController.requireSignin,
    userCtrl.read
  )
  .put(
    authController.requireSignin,
    authController.hasAuthorization,
    userCtrl.update
  )
  .delete(
    authController.requireSignin,
    authController.hasAuthorization,
    userCtrl.remove
  );

export default router;