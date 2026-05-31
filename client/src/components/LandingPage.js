import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      
      {/* --- NAVIGATION BAR --- */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-600">Wash&Go</span>
            </div>
            <div className="flex space-x-4 items-center">
              <Link to="/login" className="text-gray-600 hover:text-blue-600 font-medium">
                Login
              </Link>
              <Link to="/register" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors">
                Sign Up Free
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <div className="relative bg-blue-50 py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center overflow-hidden">
        {/* Optional Background Pattern/Image could go here */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-4 z-10">
          Don't Let Laundry Day <br className="hidden sm:block" />
          <span className="text-blue-600">Ruin Your Weekend.</span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg sm:text-xl text-gray-600 mb-8 z-10">
          A smart, reliable, and premium laundry service delivered right to your door. We wash, dry, and fold so you don't have to.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 z-10">
          <Link to="/register" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-bold text-lg shadow-lg transition-transform hover:-translate-y-1">
            Get Started
          </Link>
          <Link to="/login" className="bg-white hover:bg-gray-50 text-blue-600 border border-blue-200 px-8 py-3 rounded-md font-bold text-lg shadow-sm transition-transform hover:-translate-y-1">
            I have an account
          </Link>
        </div>
      </div>

      {/* --- WHY CHOOSE US SECTION --- */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Why Choose Wash&Go?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Experience the ultimate convenience with our premium garment care, designed to save you time and protect your clothes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Care</h3>
              <p className="text-gray-600">We sort by color, wash in cold water to prevent shrinking, and use premium detergents to keep clothes looking brand new.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Save Time</h3>
              <p className="text-gray-600">The average person spends 3 hours a week on laundry. Get your weekends back and let our experts handle the dirty work.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🍃</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Eco-Friendly</h3>
              <p className="text-gray-600">Our modern machines use 40% less water and energy than home washers. We also use gentle, biodegradable solvents.</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- HOW IT WORKS SECTION --- */}
      <div className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">How Wash&Go Works?</h2>
          <p className="text-gray-600 mb-12">A simple, secure, and fast process to get your laundry done.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 shadow-lg">1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Schedule Pickup</h3>
              <p className="text-gray-600">Book online in seconds. Pack your items in any bag and leave it at your door.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 shadow-lg">2</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">We Clean</h3>
              <p className="text-gray-600">Our experts inspect, sort, wash, dry, and neatly fold your garments with care.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 shadow-lg">3</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Delivered Fresh</h3>
              <p className="text-gray-600">Your clean clothes are returned to your door crisp, folded, and ready to wear.</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- SERVICES SECTION --- */}
      <div className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-12">Our Specialized Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-2 border-blue-100 rounded-2xl p-8 hover:border-blue-300 transition-colors bg-white shadow-sm">
              <div className="text-5xl mb-4">🧺</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Wash & Fold</h3>
              <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mb-4">Everyday Laundry</span>
              <p className="text-gray-600">Perfect for t-shirts, jeans, socks, and underwear. Washed, dried, and perfectly folded so you can just put them in the drawer.</p>
            </div>

            <div className="border-2 border-blue-100 rounded-2xl p-8 hover:border-blue-300 transition-colors bg-white shadow-sm">
              <div className="text-5xl mb-4">👔</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Dry Cleaning</h3>
              <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mb-4">Delicate Garments</span>
              <p className="text-gray-600">For suits, dresses, blouses, and anything requiring special care. Returned pressed and on hangers, ready for the closet.</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- CALL TO ACTION FOOTER --- */}
      <div className="bg-blue-600 py-16 text-center px-4">
        <h2 className="text-3xl font-extrabold text-white mb-6">Ready To Experience Fresh?</h2>
        <Link to="/register" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-md font-bold text-lg shadow-lg hover:bg-gray-100 transition-colors">
          Join Wash&Go Now
        </Link>
      </div>

      {/* --- FOOTER --- */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <p>&copy; 2026 Modern Laundry Management System. Designed for ease and freshness.</p>
      </footer>
      
    </div>
  );
};

export default LandingPage;