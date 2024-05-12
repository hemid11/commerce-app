import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">Logo</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/basket">Basket</Link></li>
        <li><Link to="/client/login">Login</Link></li>
        <li><Link to="/client/register">Register</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
