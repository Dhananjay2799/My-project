import React from 'react';
import './App.css';

function App() {
  const products = [
    { id: 1, name: 'Chicken Tikka Masala', desc: 'With turmeric-spiced Basmati rice', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500' },
    { id: 2, name: 'Potato & Pea Samosas', desc: 'Crispy pastry stuffed with spiced potatoes', image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=500' },
    { id: 3, name: 'Garlic Naan', desc: 'Traditional tandoori style flatbread', image: 'https://images.unsplash.com/photo-1601356616077-695728ecf769?w=500' }
  ];

  return (
    <div className="app-container">
      <header className="navbar">
        <div className="logo">Deep Indian Kitchen Clone</div>
        <nav>
          <a href="#food">Our Food</a>
          <a href="#story">Our Story</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>Indian Food. Made Right.</h1>
          <p>Experience authentic Indian flavors made completely from scratch.</p>
        </div>
      </section>

      <section id="food" className="products-section">
        <h2>Our Menu Highlights</h2>
        <div className="product-grid">
          {products.map(item => (
            <div key={item.id} className="product-card">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;