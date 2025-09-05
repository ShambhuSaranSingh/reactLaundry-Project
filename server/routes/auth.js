const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const User = require('../models/User');

// ... (Your existing /register and /login routes are here) ...
// Keep your existing POST /register and POST /login routes as they are.

// --- Google OAuth Routes ---

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
    res.redirect(`https://reactlaundry-project.netlify.app/auth/callback?token=${token}`);
  }
);

module.exports = router;