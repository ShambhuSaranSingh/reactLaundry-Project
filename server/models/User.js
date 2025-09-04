const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: false }, // Password is not required for Google users
  googleId: { type: String }, // To store the user's unique Google ID
});

module.exports = mongoose.model('User', UserSchema);