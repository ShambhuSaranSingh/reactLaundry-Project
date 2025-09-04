import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  // Check if the user's "keycard" exists
  const token = sessionStorage.getItem('token');

  // This function will run when the "Logout" button is clicked
  const handleLogout = () => {
    // 1. Destroy the keycard
    sessionStorage.removeItem('token');
    // 2. Send the user back to the login page
    navigate('/login');
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Modern Laundry System</Link>
        
        {/* Only show navigation links if the user is logged in */}
        {token && (
          <div className="flex items-center space-x-4">
            <Link to="/" className="hover:text-cyan-200">Home</Link>
            <Link to="/products" className="hover:text-cyan-200">Product</Link>
            <Link to="/about" className="hover:text-cyan-200">About</Link>
            <Link to="/select-items" className="hover:text-cyan-200">Cart</Link>
            <Link to="/feedback" className="hover:text-cyan-200">Feedback</Link>
          </div>
        )}

        <div>
          {token ? (
            // If the keycard EXISTS, show the Logout button
            <button 
              onClick={handleLogout} 
              className="bg-red-500 text-white font-bold py-2 px-4 rounded-md hover:bg-red-600"
            >
              Logout
            </button>
          ) : (
            // If the keycard DOES NOT EXIST, show the Login button
            <Link 
              to="/login" 
              className="bg-white text-blue-600 font-bold py-2 px-4 rounded-md hover:bg-gray-200"
            >
              Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;