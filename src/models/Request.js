const mongoose = require("mongoose");

const BankRequestSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  location: {
    lat: {
      type: Number,
      required: true,
    },
    long: {
      type: Number,
      required: true,
    },
  },
  status: {
    type: String,
    enum: ["pending", "fulfilled"],
    default: "pending",
  },
  group: {
    type: String,
    required: true, // e.g., "A+"
  },
  urgency: {
    type: String,
    enum: ["Low", "High"],
    default: "Low",
  },

  reachedUsers: [
    {
      lat: { type: Number, required: true },
      long: { type: Number, required: true },
    }
  ],
}, { timestamps: true });

module.exports = mongoose.model("Request", BankRequestSchema);