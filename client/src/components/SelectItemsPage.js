import React, { useState } from 'react';
import axios from 'axios';
import Header from './common/Header';
import Footer from './common/Footer';

const items = ['Jeans', 'Lower', 'Shirt', 'T-Shirt', 'Pant', 'Cover', 'Bed Sheet', 'Pillow', 'Blanket'];

const SelectItemsPage = () => {
  // State for the item quantities
  const [quantities, setQuantities] = useState(
    items.reduce((acc, item) => ({ ...acc, [item]: 0 }), {})
  );

  // --- ADD NEW STATE FOR THE NEW FIELDS ---
  const [serviceType, setServiceType] = useState('Washing'); // Default value
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  // ----------------------------------------

  const handleQuantityChange = (item, value) => {
    setQuantities(prev => ({ ...prev, [item]: Math.max(0, parseInt(value) || 0) }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const selectedItems = Object.fromEntries(Object.entries(quantities).filter(([, qty]) => qty > 0));

    if (Object.keys(selectedItems).length === 0) {
      alert('Please select at least one item.');
      return;
    }
    if (!phoneNumber || !address) {
      alert('Please fill in your phone number and address.');
      return;
    }

    // --- INCLUDE NEW DATA IN THE PAYLOAD ---
    const orderDetails = {
      items: selectedItems,
      serviceType,
      phoneNumber,
      address,
    };
    // --------------------------------------

    try {
      // Send the complete order details to the backend
      await axios.post('http://localhost:5000/api/orders', orderDetails);
      alert('Order placed successfully!');
      // Optionally reset the form here
    } catch (err) {
      alert('Failed to place order. ' + (err.response?.data?.msg || ''));
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center p-6 bg-gray-100">
        <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-3xl">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Place Your Order</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* --- SECTION FOR SERVICE TYPE, PHONE, AND ADDRESS --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-b pb-6">
              <div>
                <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700">Type of Service</label>
                <select
                  id="serviceType"
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                >
                  <option>Washing</option>
                  <option>Ironing</option>
                  <option>Dry Cleaning</option>
                  <option>Wash & Iron</option>
                </select>
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Enter your 10-digit phone number"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Delivery Address</label>
                <textarea
                  id="address"
                  rows="3"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter your full address for pickup and delivery"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </div>
            </div>
            {/* --- END OF NEW SECTION --- */}
            
            {/* Section for selecting items */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Select Items</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-4">
                {items.map(item => (
                  <div key={item} className="flex items-center justify-between">
                    <label htmlFor={item} className="text-gray-700">{item}</label>
                    <input
                      type="number"
                      id={item}
                      value={quantities[item]}
                      onChange={(e) => handleQuantityChange(item, e.target.value)}
                      className="w-16 p-1 text-center border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      min="0"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white font-bold py-3 px-12 rounded-lg hover:bg-blue-700 transition-colors text-lg"
              >
                Confirm Order
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SelectItemsPage;