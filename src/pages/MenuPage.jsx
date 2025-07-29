import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import '../components/styles.css';
// At the top of both MenuPage.jsx and ReservationPage.jsx
import heroBg from '../assets/images/hero-bg.jpg';
// Import food images
import pastaImg from '../assets/images/pasta.jpg';
import burgerImg from '../assets/images/burger.jpg';
import pizzaImg from '../assets/images/pizza.jpg';
import saladImg from '../assets/images/salad.jpg';
import steakImg from '../assets/images/steak.jpg';
import sushiImg from '../assets/images/sushi.jpg';
import dessertImg from '../assets/images/dessert.jpg';
import seafoodImg from '../assets/images/seafood.jpg';
import sandwichImg from '../assets/images/sandwich.jpg';
import soupImg from '../assets/images/soup.jpg';

const MenuPage = () => {
  const { cartItems, addToCart } = useContext(CartContext);

  const menuItems = [
    {
      id: 1,
      name: "Truffle Pasta",
      price: 18.99,
      description: "Creamy pasta with black truffle and mushrooms",
      image: pastaImg
    },
    {
      id: 2,
      name: "Gourmet Burger",
      price: 14.99,
      description: "Angus beef with cheddar and special sauce",
      image: burgerImg
    },
    {
      id: 3,
      name: "Margherita Pizza",
      price: 16.99,
      description: "Classic pizza with fresh mozzarella and basil",
      image: pizzaImg
    },
    {
      id: 4,
      name: "Caesar Salad",
      price: 12.99,
      description: "Romaine lettuce with parmesan and croutons",
      image: saladImg
    },
    {
      id: 5,
      name: "Ribeye Steak",
      price: 28.99,
      description: "12oz prime ribeye with roasted vegetables",
      image: steakImg
    },
    {
      id: 6,
      name: "Sushi Platter",
      price: 22.99,
      description: "Assorted fresh sushi and sashimi",
      image: sushiImg
    },
    {
      id: 7,
      name: "Chocolate Lava Cake",
      price: 8.99,
      description: "Warm chocolate cake with vanilla ice cream",
      image: dessertImg
    },
    {
      id: 8,
      name: "Seafood Paella",
      price: 24.99,
      description: "Spanish rice with shrimp, mussels and chorizo",
      image: seafoodImg
    },
    {
      id: 9,
      name: "Club Sandwich",
      price: 11.99,
      description: "Triple-decker sandwich with turkey and bacon",
      image: sandwichImg
    },
    {
      id: 10,
      name: "Tomato Basil Soup",
      price: 7.99,
      description: "Creamy soup with fresh basil",
      image: soupImg
    }
  ];

  return (
    <div className="menu-page">
      <Header />
      <div className="cart-icon-container">
        <Link to="/cart" className="cart-link">
          <FiShoppingCart className="cart-icon" />
          {cartItems.length > 0 && (
            <span className="cart-count">{cartItems.length}</span>
          )}
        </Link>
      </div>
      
      <main className="menu-container">
        <h1 className="menu-title">Our Menu</h1>
        <div className="menu-grid">
          {menuItems.map(item => (
            <div key={item.id} className="menu-card">
              <div className="menu-card-img">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="menu-card-content">
                <h2>{item.name}</h2>
                <p className="description">{item.description}</p>
                <p className="price">${item.price.toFixed(2)}</p>
                <button 
                  className="add-to-cart-btn"
                   onClick={() => addToCart(item)}
                >
                    Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MenuPage;