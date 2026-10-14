// Import Express to create the Qualifications API router.
import express from "express";

// Import the Education controller functions.
import educationCtrl from "../controllers/education.controller.js";

const router = express.Router();

// Handle collection-level Qualification CRUD operations.
router
  .route("/api/qualifications")
  .get(educationCtrl.list)
  .post(educationCtrl.create);

// Load a qualification whenever an :id parameter is present.
router.param("id", educationCtrl.qualificationByID);

// Handle individual Qualification CRUD operations.
router
  .route("/api/qualifications/:id")
  .get(educationCtrl.read)
  .put(educationCtrl.update)
  .delete(educationCtrl.remove);

export default router;