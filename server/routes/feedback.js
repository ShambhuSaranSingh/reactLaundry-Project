const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

router.post('/', async (req, res) => {
  try {
    const newFeedback = new Feedback(req.body);
    await newFeedback.save();
    res.status(201).json({ msg: 'Feedback submitted' });
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;