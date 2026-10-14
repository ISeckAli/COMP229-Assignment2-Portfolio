// Import the Education model.
import Education from "../models/education.model.js";

// Import the shared controller error handler.
import errorHandler from "./error.controller.js";

// Qualification fields accepted by the backend API.
const allowedFields = [
  "title",
  "completion",
  "description",
];

// Return only valid Qualification fields from incoming request data.
const getQualificationData = (body) => {
  const qualificationData = {};

  allowedFields.forEach((field) => {
    if (body[field] !== undefined) {
      qualificationData[field] = body[field];
    }
  });

  return qualificationData;
};

// Create a new qualification.
const create = async (req, res) => {
  try {
    const qualificationData = getQualificationData(req.body);
    const qualification = new Education(qualificationData);

    await qualification.save();

    return res.status(201).json(qualification);
  } catch (err) {
    return res.status(400).json({
      error:
        errorHandler.getErrorMessage(err) ||
        "Could not create qualification",
    });
  }
};

// Return all qualifications.
const list = async (req, res) => {
  try {
    const qualifications = await Education.find();

    return res.status(200).json(qualifications);
  } catch (err) {
    return res.status(500).json({
      error: "Could not retrieve qualifications",
    });
  }
};

// Find a qualification by ID and attach it to the request.
const qualificationByID = async (req, res, next, id) => {
  try {
    const qualification = await Education.findById(id);

    if (!qualification) {
      return res.status(404).json({
        error: "Qualification not found",
      });
    }

    req.qualification = qualification;
    next();
  } catch (err) {
    return res.status(400).json({
      error: "Invalid qualification ID",
    });
  }
};

// Return one qualification.
const read = (req, res) => {
  return res.status(200).json(req.qualification);
};

// Update one qualification.
const update = async (req, res) => {
  try {
    const qualificationData = getQualificationData(req.body);

    if (Object.keys(qualificationData).length === 0) {
      return res.status(400).json({
        error: "No valid qualification fields were provided",
      });
    }

    Object.assign(req.qualification, qualificationData);

    await req.qualification.save();

    return res.status(200).json(req.qualification);
  } catch (err) {
    return res.status(400).json({
      error:
        errorHandler.getErrorMessage(err) ||
        "Could not update qualification",
    });
  }
};

// Delete one qualification.
const remove = async (req, res) => {
  try {
    const qualification = req.qualification;

    await qualification.deleteOne();

    return res.status(200).json({
      message: "Qualification deleted successfully",
      id: qualification._id,
    });
  } catch (err) {
    return res.status(500).json({
      error: "Could not delete qualification",
    });
  }
};

// Export the Qualification controller functions.
export default {
  create,
  list,
  qualificationByID,
  read,
  update,
  remove,
};