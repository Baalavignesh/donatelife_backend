const mongoose = require("mongoose");

const RequestSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  loc: {
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
  type: {
    type: String,
    required: true, // e.g., "A+"
  },
  urgency: {
    type: String,
    enum: ["low", "high"],
    default: "low",
  },

  // ✅ New Field: Array of lat/long for users the notification was sent to
  reachedUsers: [
    {
      lat: { type: Number, required: true },
      long: { type: Number, required: true },
    }
  ],
}, { timestamps: true });

module.exports = mongoose.model("Request", RequestSchema);

module.exports = Request;