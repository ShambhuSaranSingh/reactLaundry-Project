import React from 'react';
import Header from './common/Header';
import Footer from './common/Footer';

// In a real app, this data would come from a backend/API
const products = [
  { name: 'Jeans', price: 50, imageUrl: '/images/product-jeans.jpg' },
  { name: 'T-Shirt', price: 20, imageUrl: '/images/product-tshirt.jpg' },
  { name: 'Shirt', price: 25, imageUrl: '/images/product-shirt.jpg' },
  { name: 'Bedsheet', price: 30, imageUrl: '/images/product-bedsheet.jpg' },
  { name: 'Dry Cleaning', price: 80, imageUrl: '/images/product-drycleaning.jpg' },
  // Add other products here
];

const ProductCard = ({ name, price, imageUrl }) => (
  <div className="bg-white rounded-lg shadow-md p-4 text-center transition-transform hover:scale-105">
    <img src={imageUrl} alt={name} className="w-full h-48 object-contain mb-4"/>
    <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
    <p className="text-gray-600">₹{price}</p>
  </div>
);

const ProductGalleryPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Product Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductGalleryPage;