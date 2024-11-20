import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Services from './pages/Services';
import Product from './pages/Product';
import About from './pages/About';
import Register from './pages/Register';
import Main from './pages/Main';

const Orders = () => <div className="p-10">Orders Page</div>;

const App = () => {
  const [user, setUser] = useState(localStorage.getItem("token"));

  // Update the user state when localStorage changes
  useEffect(() => {
    const updateUser = () => setUser(localStorage.getItem("token"));
    window.addEventListener("storage", updateUser);
    return () => window.removeEventListener("storage", updateUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <Router>
      <Navbar user={user} onLogout={handleLogout} />
      <div className="pt-16">
        <Routes>
          {/* Redirect to Login if not authenticated */}
          <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />

          <Route path="/products" element={<Product />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/analytics" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/services" element={<Services />} />
          <Route path="/register" element={<Register />} />

          {/* Conditionally render Main only if user is logged in */}
          {user && <Route path="/main" element={<Main />} />}

          {/* Fallback route (for unrecognized paths) */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
