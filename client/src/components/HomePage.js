// src/components/HomePage.js
import React from 'react';
import Header from './common/Header'; // Corrected Path
import Footer from './common/Footer'; // Corrected Path
import ServiceCard from './ServiceCard'; // Corrected Path

// You can replace these with your actual data and image paths
const servicesData = [
  {
    title: 'Washing',
    description: 'Get Your Clothes Washed With Care And Efficiency.',
    imageUrl: '/images/washing.png', // <-- Make sure you have this image
  },
  {
    title: 'Dry Cleaning',
    description: 'High-Quality Dry Cleaning Services For Delicate Garments.',
    imageUrl: '/images/dry-cleaning.png', // <-- Make sure you have this image
  },
  {
    title: 'Ironing',
    description: 'Perfectly Ironed Clothes, Ready To Wear.',
    imageUrl: '/images/ironing.png', // <-- Make sure you have this image
  },
  {
    title: 'Stain Removal',
    description: 'Specialized in Removing Tough stains For Fresh Clothes.',
    imageUrl: '/images/stain-removal.png', // <-- Make sure you have this image
  },
  {
    title: 'Alterations',
    description: 'Alterations and Repairs services avaliable.',
    imageUrl: '/images/alterations.png', // <-- Make sure you have this image
  },
  {
    title: 'Delivery Service',
    description: 'Fast and reliable delivery right to your doorstep.',
    imageUrl: '/images/delivery.jpg', // <-- Make sure you have this image
  },
  // Add more services as needed
];

const HomePage = () => {
  return (
    <div className="bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-600 min-h-screen">
      <Header />
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-5xl font-extrabold text-white text-center mb-12">
          Explore Our Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
            />
          ))}
          {/* Placeholder for empty cards if you want to fill the grid */}
          {Array(6 - servicesData.length).fill().map((_, i) => (
             <div key={i} className="bg-white/50 rounded-lg shadow-lg p-6"></div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;