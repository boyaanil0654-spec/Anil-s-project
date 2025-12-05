import React from 'react';
import { Link } from 'react-router-dom';

const BottomNav = () => (
  <nav className="bottom-nav">
    <Link to="/" className="nav-icon glow">🏠</Link>
    <Link to="/customize" className="nav-icon glow">⚙️</Link>
    <Link to="/dashboard" className="nav-icon glow">📊</Link>
  </nav>
);

export default BottomNav;