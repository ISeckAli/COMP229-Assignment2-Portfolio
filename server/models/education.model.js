// Import Mongoose to define the Education model.
import mongoose from "mongoose";

// Qualification fields required by Assignment 2.
const EducationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: "Qualification title is required",
      trim: true,
    },
    completion: {
      type: Date,
      required: "Completion date is required",
    },
    description: {
      type: String,
      required: "Qualification description is required",
      trim: true,
    },
  },
  {
    collection: "qualifications",
  }
);

// Export the Education model and map it to the qualifications collection.
export default mongoose.model("Education", EducationSchema);