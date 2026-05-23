import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <span className="nav-logo-rupee">₹</span>
        <span className="nav-brand">Rupee<span className="gradient-text">Vyze</span></span>
      </div>

      {/* Desktop links */}
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#reviews">Reviews</a></li>
        <li><a href="#faq">FAQ</a></li>
      </ul>

      <button className="btn-primary">Get Started</button>

      {/* Mobile hamburger */}
      <button
        className="nav-hamburger"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile drawer */}
      {open && (
        <div className="nav-mobile-menu">
          <ul className="nav-mobile-links">
            <li><a href="#home"    onClick={() => setOpen(false)}>Home</a></li>
            <li><a href="#about"   onClick={() => setOpen(false)}>About</a></li>
            <li><a href="#reviews" onClick={() => setOpen(false)}>Reviews</a></li>
            <li><a href="#faq"     onClick={() => setOpen(false)}>FAQ</a></li>
          </ul>
          <button className="btn-primary nav-mobile-cta">Get Started</button>
        </div>
      )}
    </nav>
  );
}
