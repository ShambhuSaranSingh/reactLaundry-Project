import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const RegisterPage = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', formData);
      alert('Registration successful! Please log in.');
      navigate('/login');
    } catch (err) {
      alert('Error: ' + (err.response?.data?.msg || 'Something went wrong'));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-blue-600">Register</h1>
        <form onSubmit={onSubmit} className="space-y-6">
          <input name="username" type="text" required placeholder="Username" onChange={onChange} className="w-full px-4 py-2 border rounded-md" />
          <input name="password" type="password" required placeholder="Password" onChange={onChange} className="w-full px-4 py-2 border rounded-md" />
          <button type="submit" className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-lg">Register</button>
        </form>
        <p className="text-center">Already have an account? <Link to="/login" className="text-blue-500">Login</Link></p>
      </div>
    </div>
  );
};

export default RegisterPage;