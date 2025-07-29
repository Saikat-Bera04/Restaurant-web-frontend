import React from 'react';
import dish1 from '../assets/images/dish-1.jpg';
import './styles.css';

const Menu = () => {
  const menuItems = [
    { id: 1, name: "Truffle Pasta", price: "$24", image: dish1 },
    { id: 2, name: "Seafood Platter", price: "$32", image: dish1 },
    { id: 3, name: "Filet Mignon", price: "$38", image: dish1 },
  ];

  return (
    <section className="menu-section">
      <h2>Our Specialties</h2>
      <div className="menu-grid">
        {menuItems.map(item => (
          <div key={item.id} className="menu-card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;