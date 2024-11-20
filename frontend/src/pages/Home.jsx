// src/pages/Home.jsx
// import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 text-white py-20 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to <span className="text-yellow-500">SupplyChainHub</span>
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Your partner in seamless supply chain management. Discover solutions
            that streamline logistics, optimize inventory, and empower your business.
          </p>
          <Link
            to="/services"
            className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-semibold transition duration-300"
          >
            Explore Our Services
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Core Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
              <img
                src="https://via.placeholder.com/600x400"
                alt="Products"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Product Management
                </h3>
                <p className="text-gray-600 mb-4">
                  Efficiently manage products across the supply chain, ensuring availability and quality.
                </p>
                <Link
                  to="/products"
                  className="text-yellow-500 hover:text-yellow-600 font-semibold"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
              <img
                src="https://via.placeholder.com/600x400"
                alt="Orders"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Order Processing
                </h3>
                <p className="text-gray-600 mb-4">
                  Streamline the order process to maximize efficiency and accuracy for customer satisfaction.
                </p>
                <Link
                  to="/orders"
                  className="text-yellow-500 hover:text-yellow-600 font-semibold"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
              <img
                src="https://via.placeholder.com/600x400"
                alt="Inventory"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Inventory Optimization
                </h3>
                <p className="text-gray-600 mb-4">
                  Optimize inventory levels to reduce costs while meeting demand consistently.
                </p>
                <Link
                  to="/inventory"
                  className="text-yellow-500 hover:text-yellow-600 font-semibold"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-yellow-500 text-gray-900 py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Supply Chain?
          </h2>
          <p className="text-lg mb-8">
            Join us to experience the efficiency and transparency your business deserves.
          </p>
          <Link
            to="/contact"
            className="bg-gray-900 hover:bg-gray-800 text-yellow-400 px-8 py-3 rounded-full font-semibold transition duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
