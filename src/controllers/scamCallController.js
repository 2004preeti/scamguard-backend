const ScamCall = require('../models/ScamCall');

// 📞 1. Get All Calls
exports.getScamNumbers = async (req, res) => {
  try {
    const calls = await ScamCall.find().sort({ createdAt: -1 });
    res.json({ success: true, data: calls });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// 📞 2. Add New Call
exports.addScamNumber = async (req, res) => {
  try {
    const newCall = await ScamCall.create(req.body);
    res.status(201).json({ success: true, data: newCall });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// 🛠️ 3. Update Status (Approve/Reject) - NAYA CODE
exports.updateCallStatus = async (req, res) => {
  try {
    const { id, status } = req.body; // Postman se ID aur naya status aayega

    // Database mein ID dhund kar status badlo
    const updatedCall = await ScamCall.findByIdAndUpdate(
      id,
      { status: status },
      { new: true, runValidators: true }, // New: true se updated data wapas milta hai
    );

    if (!updatedCall) {
      return res
        .status(404)
        .json({ success: false, message: 'No record found with this ID' });
    }

    res.json({
      success: true,
      message: `Status updated to ${status}`,
      data: updatedCall,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
