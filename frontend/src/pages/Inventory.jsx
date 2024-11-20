// src/pages/Inventory.jsx
import { useState } from 'react';

const Inventory = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Sample dynamic inventory data
  const inventoryItems = [
    { id: 1, name: 'Product A', category: 'Category 1', stock: 120 },
    { id: 2, name: 'Product B', category: 'Category 2', stock: 50 },
    { id: 3, name: 'Product C', category: 'Category 1', stock: 75 },
    { id: 4, name: 'Product D', category: 'Category 3', stock: 20 },
    { id: 5, name: 'Product E', category: 'Category 2', stock: 5 },
    // Add more items as needed
  ];

  // Filtered inventory based on search term
  const filteredItems = inventoryItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to get stock status based on quantity
  const getStockStatus = (stock) => {
    if (stock > 100) return { text: 'In Stock', color: 'bg-green-500' };
    if (stock > 20) return { text: 'Low Stock', color: 'bg-yellow-500' };
    return { text: 'Out of Stock', color: 'bg-red-500' };
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Inventory Management</h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search inventory..."
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Inventory Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="py-3 px-4 text-left font-semibold">Item Name</th>
              <th className="py-3 px-4 text-left font-semibold">Category</th>
              <th className="py-3 px-4 text-left font-semibold">Stock Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.length > 0 ? (
              filteredItems.map(item => {
                const stockStatus = getStockStatus(item.stock);
                return (
                  <tr key={item.id} className="border-t border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-4 font-medium text-gray-700">{item.name}</td>
                    <td className="py-3 px-4 text-gray-600">{item.category}</td>
                    <td className="py-3 px-4">
                      <span className={`inline-block py-1 px-3 rounded-full text-white ${stockStatus.color}`}>
                        {stockStatus.text} ({item.stock})
                      </span>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="3" className="py-6 text-center text-gray-500">No items found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inventory;
