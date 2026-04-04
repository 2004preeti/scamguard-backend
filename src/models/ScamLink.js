const mongoose = require('mongoose');

const scamLinkSchema = mongoose.Schema(
  {
    url: { type: String, required: true, unique: true },
    domain: { type: String }, // e.g., "bank-login-secure.xyz"
    threatType: { type: String, default: 'Phishing' },
    riskScore: { type: Number, default: 50 },
    status: {
      type: String,
      enum: ['Active', 'Taken Down', 'Safe'],
      default: 'Active',
    },
    reportedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin' },
  },
  { timestamps: true },
);

module.exports = mongoose.model('ScamLink', scamLinkSchema);
