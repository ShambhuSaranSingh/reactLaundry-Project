// --- MISSING TOP LINES YOU NEED ---
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Make sure this path to your User model is correct

// --- MANUAL REGISTRATION ROUTE ---
router.post('/register', async (req, res) => {
  const { name, email, phone, password } = req.body;

  try {
    // 1. Check if user already exists (now by email)
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User with this email already exists' });
    }

    // 2. Create a new user instance with all fields
    user = new User({
      name,
      email,
      phone,
      password // Temporarily store plain password
    });

    // 3. Hash password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // 4. Save the new user to the database
    await user.save();

    // 5. Send success message ONLY (Frontend will handle the redirect to Login)
    res.status(201).json({ msg: 'Registration successful! You can now log in.' });

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// --- MANUAL LOGIN ROUTE ---
router.post('/login', async (req, res) => {
  const { email, password } = req.body; // Changed from username to email

  try {
    // 1. Check if user exists by email
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    // 2. Compare entered password with hashed password in DB
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    // 3. Generate a JWT token
    const payload = { user: { id: user.id } };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '1h' },
      (err, token) => {
        if (err) throw err;
        res.json({ 
          token: token,
          user: {
            name: user.name,
            email: user.email,
            phone: user.phone
          }
        });
      }
    );

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// --- MISSING BOTTOM LINE YOU NEED ---
module.exports = router;