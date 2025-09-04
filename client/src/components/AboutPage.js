import React from 'react';
import Header from './common/Header';
import Footer from './common/Footer';

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-6 py-16">
        <div className="bg-white p-8 rounded-lg shadow-md">
          {/* About Us Section */}
          <section className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="md:w-1/2">
              <img src="/images/about-us-1.webp" alt="Person loading washing machine" className="rounded-lg shadow-lg w-full" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-blue-600 mb-4">About Us</h2>
              <p className="text-gray-700 mb-4">
                Founded with a passion for innovation and excellence, we are committed to enriching lives and empowering individuals through our dedicated services and unique approach. Our journey is fueled by our commitment to quality and driven by our vision to influence and inspire.
              </p>
              <p className="text-gray-700 mb-6">
                Join us as we continue to explore new horizons and create exceptional experiences. Your journey with us is just beginning!
              </p>
              <button className="bg-blue-500 text-white font-semibold py-2 px-5 rounded-lg hover:bg-blue-600 transition-colors">
                Learn More
              </button>
            </div>
          </section>

          {/* Mission and Vision Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Mission and Vision</h2>
            <p className="text-gray-700 mb-4">
              We are dedicated to providing innovative solutions that exceed our customers' expectations. Our mission is to inspire and empower individuals by delivering high-quality products and exceptional service.
            </p>
            <p className="text-gray-700">
              Our vision is to be a leader in our industry, recognized for our commitment to excellence and innovation. We aspire to make a positive impact on society and create a sustainable future.
            </p>
          </section>

          {/* ERP Section */}
          <section className="flex flex-col md:flex-row items-center gap-8 bg-blue-50 p-8 rounded-lg">
             <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">Laundry Management ERP</h3>
                <p className="text-gray-700">A laundry management ERP (enterprise resource planning) system is designed to handle all the activities such as order management, delivery, and customer relationship management.</p>
             </div>
             <div className="md:w-1/2">
                <img src="/images/about-us-2.jpg" alt="Folded yellow sweaters" className="rounded-lg shadow-lg w-full" />
             </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;