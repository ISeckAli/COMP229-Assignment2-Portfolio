// Import Express to create the Contact API router.
import express from "express";

// Import the Contact controller functions.
import contactCtrl from "../controllers/contact.controller.js";

const router = express.Router();

// Handle collection-level Contact CRUD operations.
router
  .route("/api/contacts")
  .get(contactCtrl.list)
  .post(contactCtrl.create);

// Load a contact whenever an :id parameter is present.
router.param("id", contactCtrl.contactByID);

// Handle individual Contact CRUD operations.
router
  .route("/api/contacts/:id")
  .get(contactCtrl.read)
  .put(contactCtrl.update)
  .delete(contactCtrl.remove);

export default router;