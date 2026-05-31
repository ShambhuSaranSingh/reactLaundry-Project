import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute'; // Import our "security guard"

// Import all the pages
import LandingPage from './components/LandingPage'; // <-- 1. IMPORT THE NEW LANDING PAGE
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import ProductGalleryPage from './components/ProductGalleryPage';
import AboutPage from './components/AboutPage';
import FeedbackPage from './components/FeedbackPage';
import SelectItemsPage from './components/SelectItemsPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* PUBLIC ROUTES: Anyone can see these pages without logging in. */}
        <Route path="/" element={<LandingPage />} /> {/* <-- 2. LANDING PAGE IS NOW THE FIRST PAGE */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* PRIVATE ROUTES: The user MUST be logged in to see these. */}
        {/* We wrap them with our ProtectedRoute component. */}
        
        {/* <-- 3. MOVE HOMEPAGE TO /dashboard SO IT DOESN'T CONFLICT WITH THE LANDING PAGE */}
        <Route path="/dashboard" element={<ProtectedRoute><HomePage /></ProtectedRoute>} /> 
        
        <Route path="/products" element={<ProtectedRoute><ProductGalleryPage /></ProtectedRoute>} />
        <Route path="/about" element={<ProtectedRoute><AboutPage /></ProtectedRoute>} />
        <Route path="/feedback" element={<ProtectedRoute><FeedbackPage /></ProtectedRoute>} />
        <Route path="/select-items" element={<ProtectedRoute><SelectItemsPage /></ProtectedRoute>} />

        {/* FALLBACK: If the user types a URL that doesn't exist, send them back to the start. */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;