// Import the Contact model.
import Contact from "../models/contact.model.js";

// Import the shared controller error handler.
import errorHandler from "./error.controller.js";

// Contact fields accepted by the backend API.
const allowedFields = [
  "firstName",
  "lastName",
  "contactNumber",
  "email",
  "message",
];

// Return only valid Contact fields from incoming request data.
const getContactData = (body) => {
  const contactData = {};

  allowedFields.forEach((field) => {
    if (body[field] !== undefined) {
      contactData[field] = body[field];
    }
  });

  return contactData;
};

// Create a new contact.
const create = async (req, res) => {
  try {
    const contactData = getContactData(req.body);
    const contact = new Contact(contactData);

    await contact.save();

    return res.status(201).json(contact);
  } catch (err) {
    return res.status(400).json({
      error:
        errorHandler.getErrorMessage(err) ||
        "Could not create contact",
    });
  }
};

// Return all contacts.
const list = async (req, res) => {
  try {
    const contacts = await Contact.find();

    return res.status(200).json(contacts);
  } catch (err) {
    return res.status(500).json({
      error: "Could not retrieve contacts",
    });
  }
};

// Find a contact by ID and attach it to the request.
const contactByID = async (req, res, next, id) => {
  try {
    const contact = await Contact.findById(id);

    if (!contact) {
      return res.status(404).json({
        error: "Contact not found",
      });
    }

    req.contact = contact;
    next();
  } catch (err) {
    return res.status(400).json({
      error: "Invalid contact ID",
    });
  }
};

// Return one contact.
const read = (req, res) => {
  return res.status(200).json(req.contact);
};

// Update one contact.
const update = async (req, res) => {
  try {
    const contactData = getContactData(req.body);

    if (Object.keys(contactData).length === 0) {
      return res.status(400).json({
        error: "No valid contact fields were provided",
      });
    }

    Object.assign(req.contact, contactData);

    await req.contact.save();

    return res.status(200).json(req.contact);
  } catch (err) {
    return res.status(400).json({
      error:
        errorHandler.getErrorMessage(err) ||
        "Could not update contact",
    });
  }
};

// Delete one contact.
const remove = async (req, res) => {
  try {
    const contact = req.contact;

    await contact.deleteOne();

    return res.status(200).json({
      message: "Contact deleted successfully",
      id: contact._id,
    });
  } catch (err) {
    return res.status(500).json({
      error: "Could not delete contact",
    });
  }
};

// Export the Contact controller functions.
export default {
  create,
  list,
  contactByID,
  read,
  update,
  remove,
};