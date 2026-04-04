const mongoose = require('mongoose');

const scamSMSSchema = mongoose.Schema(
  {
    senderID: { type: String, required: true }, // e.g., "AD-KOTAKB"
    messageBody: { type: String, required: true },
    riskScore: { type: Number, default: 50 },
    status: {
      type: String,
      enum: ['Pending', 'Approved', 'Rejected'],
      default: 'Pending',
    },
    reportedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin' },
  },
  { timestamps: true },
);

module.exports = mongoose.model('ScamSMS', scamSMSSchema);
