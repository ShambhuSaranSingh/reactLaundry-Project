import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; // For the animation

const LoginPage = () => {
  // This one state controls everything:
  // if true, show Login; if false, show Sign Up.
  const [isLoginView, setIsLoginView] = useState(true);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Determine the API endpoint based on the view
    const endpoint = isLoginView ? '/api/auth/login' : '/api/auth/register';
    const payload = { username, password };

    try {
      if (isLoginView) {
        // --- Login Logic ---
        const res = await axios.post(endpoint, payload);
        sessionStorage.setItem('token', res.data.token);
        alert('Login successful!');
        navigate('/');
      } else {
        // --- Register Logic ---
        await axios.post(endpoint, payload);
        alert('Registration successful! Please log in.');
        setIsLoginView(true); // Switch back to login view after successful registration
      }
    } catch (err) {
      alert('Error: ' + (err.response?.data?.msg || 'Something went wrong'));
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Side - Animated Title */}
      <div className="hidden lg:flex w-1/2 items-center justify-center bg-gradient-to-br from-blue-600 to-cyan-400 p-12 text-white">
        <div className="text-center">
          <h1 className="text-6xl font-extrabold tracking-tight animate-fade-in-down">
            Modern Laundry System
          </h1>
        </div>
      </div>

      {/* Right Side - The Form Container */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-sm p-8 space-y-6 bg-white rounded-lg shadow-md">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-blue-600">Laundry System</h1>
            {/* The heading changes based on the view */}
            <h2 className="text-xl font-semibold text-gray-700">
              {isLoginView ? 'Login' : 'Create Account'}
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                name="username"
                type="text"
                required
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                name="password"
                type="password"
                required
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              {/* The button text changes based on the view */}
              <button
                type="submit"
                className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600"
              >
                {isLoginView ? 'Log In' : 'Sign Up'}
              </button>
            </div>
          </form>

          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink mx-4 text-gray-400">Or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <a
            href="https://laundry-app-backend-92wj.onrender.com"
            className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <img className="h-5 w-5 mr-2" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Google logo" />
            Sign in with Google
          </a>

          <p className="text-sm text-center text-gray-600">
            {isLoginView ? "Don't have an account?" : "Already have an account?"}{' '}
            {/* This button just toggles the 'isLoginView' state */}
            <button
              onClick={() => setIsLoginView(!isLoginView)}
              className="font-medium text-blue-500 hover:underline"
            >
              {isLoginView ? 'Sign Up' : 'Log In'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;