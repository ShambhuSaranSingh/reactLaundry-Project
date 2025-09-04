import React from 'react';

const ServiceCard = ({ imageUrl, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center text-center p-6 transform hover:-translate-y-2 transition-transform duration-300">
      <img src={imageUrl} alt={title} className="w-40 h-24 object-contain mb-4" />
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <button className="w-full mt-auto px-4 py-2 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-900">
        Read More
      </button>
    </div>
  );
};

export default ServiceCard;