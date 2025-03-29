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
    type: Object,
    required: true,
    lat: {
      type: Number,
      required: true,
    },
    long: {
      type: Number,
      required: true,
    },
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


const DonorOrg = mongoose.model('DonorOrg', donorOrgSchema);

module.exports = DonorOrg; 