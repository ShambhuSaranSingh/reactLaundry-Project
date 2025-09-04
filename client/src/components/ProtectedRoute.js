import React from 'react';
import { Navigate } from 'react-router-dom';

// This component is our "security guard"
const ProtectedRoute = ({ children }) => {
  // Check if the user's "keycard" (token) exists in the browser's storage
  const token = sessionStorage.getItem('token');

  if (!token) {
    // If there is NO keycard, redirect the user to the login page
    return <Navigate to="/login" />;
  }

  // If there IS a keycard, let the user see the page they wanted
  return children;
};

export default ProtectedRoute;