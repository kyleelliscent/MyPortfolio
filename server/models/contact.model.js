import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    required: "First name is required"
  },
  lastName: {
    type: String,
    trim: true,
    required: "Last name is required"
  },
  email: {
    type: String,
    trim: true,
    match: [/.+\@.+\..+/, "Please fill a valid email address"],
    required: 'Email is required'
  },
  contactNumber: {
    type: String,
    trim: true,
    required: "Contact number is required",
    match: [/^\d{10}$/, "Please fill a valid 10-digit phone number"]
  },
  message: {
    type: String,
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Contact", ContactSchema);