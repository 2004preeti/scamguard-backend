const mongoose = require('mongoose');
const scamWASchema = mongoose.Schema(
  {
    phoneNumber: { type: String, required: true },
    message: { type: String },
    status: {
      type: String,
      enum: ['Pending', 'Approved', 'Rejected'],
      default: 'Pending',
    },
  },
  { timestamps: true },
);
module.exports = mongoose.model('ScamWhatsApp', scamWASchema);
