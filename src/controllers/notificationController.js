const Notification = require('../models/Notification');

// @desc    Send & Save Notification
// @route   POST /api/notifications
exports.sendNotification = async (req, res) => {
  try {
    const { title, message, type } = req.body;

    const notification = await Notification.create({
      title,
      message,
      type,
      sentBy: req.admin._id, // Auth middleware se milega
    });

    res.status(201).json({
      success: true,
      message: 'Notification sent successfully!',
      data: notification,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc    Get All Past Notifications
// @route   GET /api/notifications
exports.getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find().sort({ createdAt: -1 });
    res.json({ success: true, data: notifications });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
