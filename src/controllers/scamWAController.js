const ScamWhatsApp = require('../models/ScamWhatsApp');

exports.getWAData = async (req, res) => {
  try {
    const data = await ScamWhatsApp.find().sort({ createdAt: -1 });
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addWAData = async (req, res) => {
  try {
    const newData = await ScamWhatsApp.create(req.body);
    res.status(201).json({ success: true, data: newData });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
