import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear any previous errors

    try {
      // Send login request to your Render backend
      const response = await axios.post('/api/auth/login', formData);

      // Save the JWT token to localStorage so the user stays logged in
      localStorage.setItem('token', response.data.token);

      // Redirect the user to the Home page or Dashboard after successful login
      navigate('/dashboard'); 
      
      // Optional: If you have a way to update the app's logged-in state, do it here.
      // window.location.reload(); // Simple way to force app to recognize token

    } catch (err) {
      // If the backend sends an error (like "Invalid Credentials"), show it
      setError(err.response?.data?.msg || 'Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-md">
        
        {/* Header Section */}
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Welcome Back
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Log in to manage your laundry orders
          </p>
        </div>

        {/* Error Message Display */}
        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded text-center text-sm">
            {error}
          </div>
        )}

        {/* Login Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            
            {/* Email Field */}
            <div>
              <label className="sr-only">Email address</label>
              <input 
                name="email" 
                type="email" 
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Email address"
                value={formData.email} 
                onChange={handleChange}
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="sr-only">Password</label>
              <input 
                name="password" 
                type="password" 
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Password"
                value={formData.password} 
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button 
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Log In
            </button>
          </div>
        </form>

        {/* Link to Signup Page */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/register" className="font-medium text-blue-600 hover:text-blue-500">
              Sign up here
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;