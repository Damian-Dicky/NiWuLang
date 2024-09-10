import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import '../CSS/Components/Menu.css';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mobile-menu-container">
      <button
        onClick={toggleMenu}
        className="menu-toggle-button"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <nav className={`mobile-nav ${isOpen ? 'open' : 'closed'}`}>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="Services">Services</a></li>
          <li><a href="Projects">Projects</a></li>
          <li><a href="About">About Us</a></li>
          <li><a href="Contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;