const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  items: { type: Map, of: Number, required: true },
  
  serviceType: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },

  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', OrderSchema);