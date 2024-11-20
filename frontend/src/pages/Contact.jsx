// src/pages/Contact.jsx
// import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaUserShield, FaWarehouse } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start p-8 bg-gray-50 min-h-screen">
      
      {/* Left Section - Project Logo, Description, and Contact Information */}
      <div className="w-full md:w-1/2 p-8 flex flex-col items-center text-gray-800 space-y-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-yellow-600">SupplyChain Hub</h1>
        <p className="text-gray-700 text-center md:text-left text-lg">
          Empowering efficient logistics and seamless supply chain management. Our platform ensures timely deliveries and effective inventory tracking.
        </p>
        <div className="space-y-6 w-full text-gray-600">
          <div className="flex items-center space-x-3">
            <FaMapMarkerAlt className="text-red-500 text-xl" />
            <span>123 Logistics St, Warehouse City, Tamil Nadu</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaPhone className="text-yellow-500 text-xl" />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-green-500 text-xl" />
            <span>support@supplychainhub.in</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaUserShield className="text-purple-500 text-xl" />
            <span>Data Security Assured</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaWarehouse className="text-blue-500 text-xl" />
            <span>Real-Time Inventory Tracking</span>
          </div>
        </div>
      </div>

      {/* Right Section - Contact Form */}
      <div className="w-full md:w-1/2 p-8 bg-gray-100 shadow-lg rounded-lg mt-8 md:mt-0">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">Contact Us</h2>
        <p className="text-gray-500 mb-6">Feel free to reach out for any inquiries, support, or feedback. We are here to assist you.</p>
        
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm text-gray-600">Full Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-200"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm text-gray-600">Email Address</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-200"
              placeholder="Enter your email address"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm text-gray-600">Phone Number</label>
            <input
              type="tel"
              id="phone"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-200"
              placeholder="+91 XXXXX XXXXX"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm text-gray-600">Message</label>
            <textarea
              id="message"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-200"
              placeholder="Enter your message"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
