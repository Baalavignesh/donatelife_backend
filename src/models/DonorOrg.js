const mongoose = require('mongoose');

const donorOrgSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    // Assuming username is an email
  },
  password: {
    type: String,
    required: true,
  },
  donorOrganization: {
    type: String,
    required: true,
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number], // [longitude, latitude]
      required: true
    }
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true,
    match: [/^\d{10}$/, 'Please enter a valid 10-digit phone number']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create a 2dsphere index on the location field
donorOrgSchema.index({ location: "2dsphere" });

const DonorOrg = mongoose.model('DonorOrg', donorOrgSchema);

module.exports = DonorOrg; 