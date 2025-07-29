// src/components/Hero.jsx
import React from 'react';
import heroBg from '../assets/images/hero-bg.jpg'; // Only ONE import
import { useNavigate } from 'react-router-dom';
import './styles.css';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-section" style={{ backgroundImage: `url(${heroBg})` }}>
      {/* ... rest of your hero component ... */}
    </section>
  );
};

export default Hero;