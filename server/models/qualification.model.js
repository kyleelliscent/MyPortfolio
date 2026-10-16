import mongoose from "mongoose";

const QualificationSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: "Title is required"
  },
  completionDate: {
    type: Date,
    required: "Completion date is required"
  },
  description: {
    type: String,
    trim: true,
    required: "Description is required"
  },
  created: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Qualification", QualificationSchema);