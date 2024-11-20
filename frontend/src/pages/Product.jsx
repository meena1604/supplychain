// src/pages/Product.jsx
import  { useState } from 'react';
import { FaCartPlus, FaStar, FaInfoCircle } from 'react-icons/fa';

const Product = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const products = [
    {
      id: 1,
      name: "Product A",
      description: "High-quality product A for logistics and warehouse management. Durable and reliable.",
      price: "₹2,500",
      image: "https://via.placeholder.com/500",
      features: [
        "High performance",
        "Durable construction",
        "Energy-efficient"
      ],
      reviews: [
        { user: "John D.", rating: 5, comment: "Excellent product! Exceeded expectations." },
        { user: "Anita S.", rating: 4, comment: "Good quality, but a bit expensive." }
      ]
    },
    {
      id: 2,
      name: "Product B",
      description: "Advanced product B for efficient supply chain management. Ensures smooth operations.",
      price: "₹3,500",
      image: "https://via.placeholder.com/500",
      features: [
        "Smart connectivity",
        "Optimized for large warehouses",
        "24/7 customer support"
      ],
      reviews: [
        { user: "Rajesh K.", rating: 4, comment: "Great product, but needs more customization." },
        { user: "Neha P.", rating: 5, comment: "Works perfectly! Highly recommend." }
      ]
    }
  ];

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Product List */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-yellow-600">Our Products</h1>
        <p className="text-lg text-gray-700">Explore our range of high-quality products designed for effective supply chain management.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg p-6">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-800">{product.name}</h2>
            <p className="text-gray-600 mt-2">{product.description}</p>
            <div className="mt-4">
              <span className="text-xl font-bold text-gray-800">{product.price}</span>
            </div>
            <div className="mt-4">
              <button
                className="w-full py-2 bg-yellow-500 text-white font-semibold rounded-lg flex items-center justify-center space-x-2 hover:bg-yellow-600 transition duration-200"
                onClick={() => handleSelectProduct(product)}
              >
                <FaCartPlus />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Product Details Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full md:w-3/4 lg:w-1/2 p-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl font-semibold text-gray-800">{selectedProduct.name}</h2>
              <button
                className="text-xl text-gray-600"
                onClick={() => setSelectedProduct(null)}
              >
                &times;
              </button>
            </div>
            <div className="mb-6">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-700">{selectedProduct.description}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800">Features</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                {selectedProduct.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <FaInfoCircle className="text-yellow-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800">Customer Reviews</h3>
              <div className="space-y-4">
                {selectedProduct.reviews.map((review, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4">
                    <div className="flex items-center space-x-2">
                      <FaStar className="text-yellow-500" />
                      <span className="font-semibold">{review.user}</span>
                    </div>
                    <p className="text-gray-600">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center mt-6">
              <button
                className="w-1/2 py-2 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600 transition duration-200"
                onClick={() => setSelectedProduct(null)}
              >
                Close
              </button>
              <button
                className="w-1/2 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition duration-200"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
