// Import Mongoose to define the Project model.
import mongoose from "mongoose";

// Project fields required by Assignment 2.
const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: "Project title is required",
    trim: true,
  },
  completion: {
    type: Date,
    required: "Completion date is required",
  },
  description: {
    type: String,
    required: "Project description is required",
    trim: true,
  },
});

// Export the Project model for use by the backend controllers.
export default mongoose.model("Project", ProjectSchema);