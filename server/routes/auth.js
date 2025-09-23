const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs'); // Needed for password hashing
const jwt = require('jsonwebtoken'); // Needed for JWT token generation
const passport = require('passport'); // Needed for Google OAuth
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
    // Use bcrypt.compare to check if the plain password matches the hashed one
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

// --- GOOGLE OAUTH ROUTES (These remain the same) ---

// 1. Route to start the Google authentication process
router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// 2. Callback route that Google redirects to after user logs in
router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/login', session: false }),
  (req, res) => {
    // User is authenticated by this point (from passport-setup.js)
    // Now, create a JWT token for them
    const payload = { user: { id: req.user.id } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Redirect user to the frontend, passing the token as a query parameter
    // Remember to replace 'http://localhost:3000' with your live Netlify URL after deployment
    res.redirect(`https://reactlaundry-project.netlify.app/auth/callback?token=${token}`);
  }
);

module.exports = router;