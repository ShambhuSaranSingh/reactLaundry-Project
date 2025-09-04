const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/api/auth/google/callback"
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      // Check if user already exists in our DB
      let existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        // We already have a record with the given profile ID
        return done(null, existingUser);
      } else {
        // If not, create a new user in our DB
        const newUser = await new User({
          googleId: profile.id,
          username: profile.displayName, // Or profile.emails[0].value for email
        }).save();
        return done(null, newUser);
      }
    } catch (error) {
      return done(error, false);
    }
  }
));