import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute'; // Import our "security guard"

// Import all the pages
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import ProductGalleryPage from './components/ProductGalleryPage';
import AboutPage from './components/AboutPage';
import FeedbackPage from './components/FeedbackPage';
import SelectItemsPage from './components/SelectItemsPage';
import AuthCallback from './components/AuthCallback';

function App() {
  return (
    <Router>
      <Routes>
        {/* PUBLIC ROUTES: Anyone can see these pages. */}
        <Route path="/auth/callback" element={<AuthCallback />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* PRIVATE ROUTES: The user MUST be logged in to see these. */}
        {/* We wrap them with our ProtectedRoute component. */}
        <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
        <Route path="/products" element={<ProtectedRoute><ProductGalleryPage /></ProtectedRoute>} />
        <Route path="/about" element={<ProtectedRoute><AboutPage /></ProtectedRoute>} />
        <Route path="/feedback" element={<ProtectedRoute><FeedbackPage /></ProtectedRoute>} />
        <Route path="/select-items" element={<ProtectedRoute><SelectItemsPage /></ProtectedRoute>} />

        {/* FALLBACK: If the user types a URL that doesn't exist, send them to login. */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;