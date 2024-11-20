import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = ({ user, onLogout }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white fixed w-full shadow-lg z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-yellow-500">
              Supply<span className="text-red-500">Chain</span>Hub
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 font-bold text-lg">
            <Link to="/products" className="hover:text-yellow-400 transition duration-200">
              Products
            </Link>
            <Link to="/orders" className="hover:text-yellow-400 transition duration-200">
              Orders
            </Link>
            <Link to="/inventory" className="hover:text-yellow-400 transition duration-200">
              Inventory
            </Link>
            <Link to="/analytics" className="hover:text-yellow-400 transition duration-200">
              About
            </Link>
            <Link to="/contact" className="hover:text-yellow-400 transition duration-200">
              Contact
            </Link>

            {/* Dynamic Login/Logout */}
            {user ? (
              <button
                onClick={onLogout}
                className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition duration-300"
              >
                Logout
              </button>
            ) : (
              <Link to="/login" className="text-white hover:text-yellow-400 transition duration-200">
                <FaUserCircle className="w-6 h-6" aria-label="Login" />
              </Link>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-200 hover:text-yellow-400 transition duration-200"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
            >
              {isMobileMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/products" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">
              Products
            </Link>
            <Link to="/orders" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">
              Orders
            </Link>
            <Link to="/inventory" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">
              Inventory
            </Link>
            <Link to="/analytics" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">
              Analytics
            </Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">
              Contact
            </Link>
            {user ? (
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onLogout();
                }}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-red-700"
              >
                Logout
              </button>
            ) : (
              <Link to="/login" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
