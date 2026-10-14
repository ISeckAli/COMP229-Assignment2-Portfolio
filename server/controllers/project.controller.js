// Import the Project model.
import Project from "../models/project.model.js";

// Import the shared controller error handler.
import errorHandler from "./error.controller.js";

// Project fields accepted by the backend API.
const allowedFields = [
  "title",
  "completion",
  "description",
];

// Return only valid Project fields from incoming request data.
const getProjectData = (body) => {
  const projectData = {};

  allowedFields.forEach((field) => {
    if (body[field] !== undefined) {
      projectData[field] = body[field];
    }
  });

  return projectData;
};

// Create a new project.
const create = async (req, res) => {
  try {
    const projectData = getProjectData(req.body);
    const project = new Project(projectData);

    await project.save();

    return res.status(201).json(project);
  } catch (err) {
    return res.status(400).json({
      error:
        errorHandler.getErrorMessage(err) ||
        "Could not create project",
    });
  }
};

// Return all projects.
const list = async (req, res) => {
  try {
    const projects = await Project.find();

    return res.status(200).json(projects);
  } catch (err) {
    return res.status(500).json({
      error: "Could not retrieve projects",
    });
  }
};

// Find a project by ID and attach it to the request.
const projectByID = async (req, res, next, id) => {
  try {
    const project = await Project.findById(id);

    if (!project) {
      return res.status(404).json({
        error: "Project not found",
      });
    }

    req.project = project;
    next();
  } catch (err) {
    return res.status(400).json({
      error: "Invalid project ID",
    });
  }
};

// Return one project.
const read = (req, res) => {
  return res.status(200).json(req.project);
};

// Update one project.
const update = async (req, res) => {
  try {
    const projectData = getProjectData(req.body);

    if (Object.keys(projectData).length === 0) {
      return res.status(400).json({
        error: "No valid project fields were provided",
      });
    }

    Object.assign(req.project, projectData);

    await req.project.save();

    return res.status(200).json(req.project);
  } catch (err) {
    return res.status(400).json({
      error:
        errorHandler.getErrorMessage(err) ||
        "Could not update project",
    });
  }
};

// Delete one project.
const remove = async (req, res) => {
  try {
    const project = req.project;

    await project.deleteOne();

    return res.status(200).json({
      message: "Project deleted successfully",
      id: project._id,
    });
  } catch (err) {
    return res.status(500).json({
      error: "Could not delete project",
    });
  }
};

// Export the Project controller functions.
export default {
  create,
  list,
  projectByID,
  read,
  update,
  remove,
};