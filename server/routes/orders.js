const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
// We'll add auth middleware later to protect this route

router.post('/', async (req, res) => {
  // Destructure the new fields from the request body
  const { items, serviceType, phoneNumber, address } = req.body; 
  
  if (!items || !serviceType || !phoneNumber || !address) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  try {
    const newOrder = new Order({
      items,
      serviceType,
      phoneNumber,
      address,
      // user: req.user.id, // This will come from the auth token later
    });

    const order = await newOrder.save();
    res.json(order);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;