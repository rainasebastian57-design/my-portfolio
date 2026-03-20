import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 2rem', background: '#222', color: '#fff' }}>
      <div style={{ fontWeight: 'bold' }}>My Portfolio</div>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link to="/" style={{ color: '#fff' }}>Home</Link>
        <Link to="/about" style={{ color: '#fff' }}>About</Link>
        <Link to="/projects" style={{ color: '#fff' }}>Projects</Link>
        <Link to="/contact" style={{ color: '#fff' }}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;

