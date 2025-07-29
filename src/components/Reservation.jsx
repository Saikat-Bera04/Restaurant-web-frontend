import React, { useState } from 'react';
import './styles.css';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    guests: 2
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reservation received for ${formData.name}`);
  };

  return (
    <section className="reservation-section">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          required
        />
        <input
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({...formData, date: e.target.value})}
          required
        />
        <select
          value={formData.guests}
          onChange={(e) => setFormData({...formData, guests: e.target.value})}
        >
          {[1, 2, 3, 4, 5, 6].map(num => (
            <option key={num} value={num}>{num} {num === 1 ? 'person' : 'people'}</option>
          ))}
        </select>
        <button type="submit">Reserve Table</button>
      </form>
    </section>
  );
};

export default Reservation;