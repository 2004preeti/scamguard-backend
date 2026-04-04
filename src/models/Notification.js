const mongoose = require('mongoose');

const notificationSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    message: { type: String, required: true },
    type: {
      type: String,
      enum: ['Alert', 'Update', 'Promotion'],
      default: 'Alert',
    },
    sentBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin' },
  },
  { timestamps: true },
);

module.exports = mongoose.model('Notification', notificationSchema);
