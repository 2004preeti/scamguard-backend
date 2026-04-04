const mongoose = require('mongoose');

const scamCallSchema = mongoose.Schema(
  {
    phoneNumber: { type: String, required: true },
    country: { type: String, required: true },
    riskScore: { type: Number, default: 50 },
    status: {
      type: String,
      enum: ['Pending', 'Approved', 'Rejected'], // Ye teen options honge
      default: 'Pending',
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('ScamCall', scamCallSchema);
