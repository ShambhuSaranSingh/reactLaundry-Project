import React, { useState } from 'react';
import axios from 'axios';
import Header from './common/Header';
import Footer from './common/Footer';

const FeedbackPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', feedback: '', rating: 3 });

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('/api/feedback', formData);
      alert('Thank you for your feedback!');
      setFormData({ name: '', email: '', feedback: '', rating: 3 }); // Reset form
    } catch (err) {
      alert('Failed to submit feedback.');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center p-6 bg-gray-100">
        <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-lg">
          <h1 className="text-3xl font-bold text-center mb-6">Feedback Form</h1>
          <form onSubmit={onSubmit} className="space-y-4">
            <input name="name" required placeholder="Name" onChange={onChange} value={formData.name} className="w-full p-2 border rounded-md" />
            <input name="email" type="email" required placeholder="Email" onChange={onChange} value={formData.email} className="w-full p-2 border rounded-md" />
            <textarea name="feedback" required placeholder="Feedback" onChange={onChange} value={formData.feedback} className="w-full p-2 border rounded-md" rows="4"></textarea>
            <div>
              <label>Rating: {formData.rating}</label>
              <input name="rating" type="range" min="1" max="5" onChange={onChange} value={formData.rating} className="w-full" />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white font-bold py-2 rounded-md">Submit Feedback</button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FeedbackPage;