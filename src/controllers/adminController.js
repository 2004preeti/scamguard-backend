const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');

// Token Generate karne ka Helper Function
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

// @desc    Register a new Admin
// @route   POST /api/admin/register
const registerAdmin = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const adminExists = await Admin.findOne({ email });
    if (adminExists) {
      return res
        .status(400)
        .json({ message: 'Admin already exists with this email' });
    }

    const admin = await Admin.create({ name, email, password, role });

    if (admin) {
      res.status(201).json({
        _id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
        token: generateToken(admin._id),
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Auth Admin & Get Token (LOGIN FIX)
// @route   POST /api/admin/login
const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // 🛠️ FIX: .select('+password') add kiya gaya hai
    const admin = await Admin.findOne({ email }).select('+password');

    // Check karein ki admin mila ya nahi aur password match hua ya nahi
    if (admin && (await admin.matchPassword(password))) {
      res.json({
        _id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
        token: generateToken(admin._id),
      });
    } else {
      // Dono case mein ek hi error message security ke liye behtar hai
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    // Agar bcrypt ko undefined milta hai toh ye catch block handle karega
    res.status(500).json({ message: 'Login Error: ' + error.message });
  }
};

module.exports = { registerAdmin, loginAdmin };
