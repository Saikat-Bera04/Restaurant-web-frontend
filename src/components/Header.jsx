import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { FiShoppingCart } from 'react-icons/fi';
import '../components/styles.css';

const Header = () => {
  return (
    <header className="header">
      {/* Left-aligned logo and name */}
      <div className="brand-container">
        <img src={logo} alt="Gourmet Logo" className="logo" />
        <span className="restaurant-name">Gourmet</span>
      </div>

      {/* Right-aligned navigation and cart */}
      <div className="nav-container">
        <nav className="main-nav">
          <Link to="/" className="nav-button">Home</Link>
          <Link to="/menu" className="nav-button">Menu</Link>
          <Link to="/reservation" className="nav-button">Reserve</Link>
        </nav>
        
      </div>
    </header>
  );
};

export default Header;