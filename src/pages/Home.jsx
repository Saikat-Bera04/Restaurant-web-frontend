import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../components/styles.css';

const Home = () => {
  const todaySpecials = [
    {
      id: 1,
      name: "Truffle Risotto",
      price: "$28",
      description: "Creamy Arborio rice with wild mushrooms and black truffle"
    },
    {
      id: 2,
      name: "Lobster Thermidor",
      price: "$42",
      description: "Maine lobster with brandy cream sauce and gruyère crust"
    },
    {
      id: 3,
      name: "Wagyu Beef Burger",
      price: "$36",
      description: "Japanese A5 wagyu patty with truffle aioli"
    },
    {
      id: 4,
      name: "Scallop Ceviche",
      price: "$24",
      description: "Fresh diver scallops with citrus marinade and avocado"
    },
    {
      id: 5,
      name: "Chocolate Soufflé",
      price: "$18",
      description: "Warm chocolate soufflé with vanilla bean ice cream"
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section with Specials Overlay */}
      <div className="hero-with-specials">
        <div className="hero-image"></div>
        
        <div className="specials-overlay">
          <h2 className="specials-title">Today's Specials</h2>
          <div className="specials-grid">
            {todaySpecials.map(special => (
              <div key={special.id} className="special-card">
                <h3>{special.name}</h3>
                <p>{special.description}</p>
                <span className="price">{special.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Restaurant Description */}
      <section className="about-section">
        <div className="container">
          <h2>Gourmet Dining Experience</h2>
          <p>
            Since 2010, our award-winning chefs have crafted exceptional dishes using 
            seasonal ingredients from local purveyors. Each plate reflects our passion 
            for culinary artistry and unforgettable flavors.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;