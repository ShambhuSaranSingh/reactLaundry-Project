const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs'); // Needed for password hashing
const jwt = require('jsonwebtoken'); // Needed for JWT token generation
const User = require('../models/User'); // Your User model

// --- MANUAL REGISTRATION ROUTE ---
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    // 1. Check if user already exists
    let user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // 2. Create a new user instance
    user = new User({
      username,
      password, // Temporarily store plain password before hashing
    });

    // 3. Hash password
    const salt = await bcrypt.genSalt(10); // Generate a salt
    user.password = await bcrypt.hash(password, salt); // Hash the password with the salt

    // 4. Save the new user to the database
    await user.save();

    // 5. Generate a JWT token for immediate login upon successful registration
    const payload = {
      user: {
        id: user.id, // User ID from the database
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '1h' }, // Token expires in 1 hour
      (err, token) => {
        if (err) throw err; // If error, throw it
        res.json({ token }); // Send the token back to the client
      }
    );

  } catch (err) {
    console.error(err.message); // Log the detailed error on the server
    res.status(500).send('Server error'); // Send a generic server error response
  }
});

// --- MANUAL LOGIN ROUTE ---
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // 1. Check if user exists
    let user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    // 2. Compare entered password with hashed password in DB
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    // 3. Generate a JWT token for the logged-in user
    const payload = {
      user: {
        id: user.id, // User ID from the database
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '1h' },
      (err, token) => {
        if (err) throw err;
        res.json({ token }); // Send the token back to the client
      }
    );

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;