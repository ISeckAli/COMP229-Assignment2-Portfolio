// Import Express to create the Project API router.
import express from "express";

// Import the Project controller functions.
import projectCtrl from "../controllers/project.controller.js";

const router = express.Router();

// Handle collection-level Project CRUD operations.
router
  .route("/api/projects")
  .get(projectCtrl.list)
  .post(projectCtrl.create);

// Load a project whenever an :id parameter is present.
router.param("id", projectCtrl.projectByID);

// Handle individual Project CRUD operations.
router
  .route("/api/projects/:id")
  .get(projectCtrl.read)
  .put(projectCtrl.update)
  .delete(projectCtrl.remove);

export default router;