import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiHome, FiUser, FiGrid, FiBookOpen, FiMail } from 'react-icons/fi';
import { FaRupeeSign, FaCalculator } from 'react-icons/fa';
import logo from '../assets/logo.png';
import heroBg from '../assets/hero-bg.jpg';

const Navbar = () => {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleOffcanvas = () => setIsOffcanvasOpen(!isOffcanvasOpen);
  const closeOffcanvas = () => setIsOffcanvasOpen(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
    closeOffcanvas();
  };

  const navItems = [
    { id: 'home',        label: 'Home',        icon: <FiHome /> },
    { id: 'about',       label: 'About Us',    icon: <FiUser /> },
    { id: 'services',    label: 'Services',    icon: <FiGrid /> },
    { id: 'calculators', label: 'Calculators', icon: <FaCalculator /> },
    { id: 'blogs',       label: 'Blogs',       icon: <FiBookOpen /> },
    { id: 'contact',     label: 'Contact',     icon: <FiMail /> },
  ];

  return (
    <>
      {/* ── Header ── */}
      <header className={`rv-header${scrolled ? ' rv-header--scrolled' : ''}`}>
        <div className="rv-header-inner">
          {/* Logo */}
          <button className="rv-logo-btn" onClick={() => scrollToSection('home')} aria-label="Home">
            <img src={logo} alt="RupeeVyze" className="rv-logo-img" />
            <span className="rv-logo-text">
              Rupee<span className="rv-logo-accent">Vyze</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="rv-nav" aria-label="Main navigation">
            {navItems.map(item => (
              <button
                key={item.id}
                className="rv-nav-btn"
                onClick={() => scrollToSection(item.id)}
              >
                <span className="rv-nav-icon">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <button
            className="rv-cta-btn rv-cta-desktop"
            onClick={() => scrollToSection('contact')}
          >
            <FaRupeeSign /> Get Started
          </button>

          {/* Hamburger */}
          <button
            className="rv-hamburger"
            onClick={toggleOffcanvas}
            aria-label="Open menu"
            aria-expanded={isOffcanvasOpen}
          >
            {isOffcanvasOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </header>

      {/* ── Offcanvas ── */}
      <div
        className={`rv-offcanvas${isOffcanvasOpen ? ' rv-offcanvas--open' : ''}`}
        aria-hidden={!isOffcanvasOpen}
      >
        <div className="rv-offcanvas-head">
          <div className="rv-offcanvas-brand">
            <img src={logo} alt="RupeeVyze" className="rv-offcanvas-logo" />
            <span>Rupee<span className="rv-logo-accent">Vyze</span></span>
          </div>
          <button className="rv-offcanvas-close" onClick={closeOffcanvas} aria-label="Close menu">
            <FiX size={22} />
          </button>
        </div>
        <nav className="rv-offcanvas-nav">
          {navItems.map(item => (
            <button
              key={item.id}
              className="rv-offcanvas-link"
              onClick={() => scrollToSection(item.id)}
            >
              <span className="rv-nav-icon">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
        <button
          className="rv-cta-btn rv-cta-mobile"
          onClick={() => scrollToSection('contact')}
        >
          <FaRupeeSign /> Get Started
        </button>
      </div>

      {/* Overlay */}
      {isOffcanvasOpen && (
        <div className="rv-overlay" onClick={closeOffcanvas} aria-hidden="true" />
      )}

      {/* ── Hero Section ── */}
      <section id="home" className="rv-hero">
        <div
          className="rv-hero-bg"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="rv-hero-overlay" />
        <div className="rv-hero-content">
          <span className="rv-hero-eyebrow">Start Your Financial Journey</span>
          <h1 className="rv-hero-title">
            Smart Financial<br />Decisions Start Here
          </h1>
          <p className="rv-hero-desc">
            RupeeVyze simplifies investing and wealth management through expert guidance,
            transparent advice, and goal‑based financial solutions for every stage of life.
          </p>
          <button className="rv-cta-btn" onClick={() => scrollToSection('about')}>
            <FaRupeeSign /> Start Now
          </button>
        </div>
      </section>

      <style>{`
        /* ── Navbar ── */
        .rv-header {
          position: fixed;
          top: 0; left: 0;
          width: 100%;
          z-index: 1000;
          background: #021B45;
          transition: box-shadow 0.3s, padding 0.3s;
        }
        .rv-header--scrolled {
          box-shadow: 0 4px 24px rgba(2,27,69,0.22);
        }
        .rv-header-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 3rem;
          height: 68px;
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        /* Logo */
        .rv-logo-btn {
          background: none; border: none; cursor: pointer;
          display: flex; align-items: center; gap: 0.5rem;
          flex-shrink: 0;
          padding: 0;
        }
        .rv-logo-img {
          width: 38px; height: 38px;
          border-radius: 50%;
          object-fit: cover;
        }
        .rv-logo-text {
          font-family: 'Outfit', sans-serif;
          font-size: 1.15rem;
          font-weight: 800;
          color: #fff;
          white-space: nowrap;
        }
        .rv-logo-accent { color: #00A389; }

        /* Desktop Nav */
        .rv-nav {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          flex: 1;
          justify-content: center;
        }
        .rv-nav-btn {
          background: none; border: none; cursor: pointer;
          color: rgba(255,255,255,0.82);
          font-family: 'Inter', sans-serif;
          font-size: 0.88rem;
          font-weight: 500;
          padding: 0.45rem 0.75rem;
          border-radius: 8px;
          display: flex; align-items: center; gap: 0.4rem;
          transition: color 0.2s, background 0.2s;
          white-space: nowrap;
        }
        .rv-nav-btn:hover {
          color: #00A389;
          background: rgba(0,163,137,0.1);
        }
        .rv-nav-icon {
          display: flex; align-items: center;
          font-size: 0.92rem;
        }

        /* CTA Button */
        .rv-cta-btn {
          display: inline-flex; align-items: center; gap: 0.4rem;
          background: linear-gradient(135deg, #1C4481, #00A389);
          color: #fff;
          border: none; cursor: pointer;
          font-family: 'Outfit', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          padding: 0.5rem 1.2rem;
          border-radius: 50px;
          white-space: nowrap;
          transition: opacity 0.2s, transform 0.2s;
          flex-shrink: 0;
        }
        .rv-cta-btn:hover { opacity: 0.88; transform: translateY(-1px); }
        .rv-cta-mobile { width: 100%; justify-content: center; margin-top: 1rem; }

        /* Hamburger */
        .rv-hamburger {
          display: none;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.15);
          color: #fff;
          width: 38px; height: 38px;
          border-radius: 8px;
          cursor: pointer;
          align-items: center; justify-content: center;
          flex-shrink: 0;
          margin-left: auto;   /* push to right edge of header */
          transition: background 0.2s;
        }
        .rv-hamburger:hover { background: rgba(0,163,137,0.2); }

        /* ── Offcanvas ── */
        .rv-offcanvas {
          position: fixed;
          top: 0; right: -300px;
          width: 280px; height: 100%;
          background: #021B45;
          z-index: 2000;
          transition: right 0.3s ease;
          display: flex; flex-direction: column;
          padding: 1.25rem 1.25rem 2rem;
        }
        .rv-offcanvas--open { right: 0; }

        .rv-offcanvas-head {
          display: flex; align-items: center; justify-content: space-between;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(255,255,255,0.12);
          margin-bottom: 1rem;
        }
        .rv-offcanvas-brand {
          display: flex; align-items: center; gap: 0.5rem;
          font-family: 'Outfit', sans-serif;
          font-weight: 800; font-size: 1.1rem;
          color: #fff;
        }
        .rv-offcanvas-logo {
          width: 34px; height: 34px;
          border-radius: 50%; object-fit: cover;
        }
        .rv-offcanvas-close {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.15);
          color: #fff;
          width: 34px; height: 34px;
          border-radius: 8px; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.2s;
        }
        .rv-offcanvas-close:hover { background: rgba(0,163,137,0.25); }

        .rv-offcanvas-nav {
          display: flex; flex-direction: column; gap: 0.25rem;
          flex: 1;
        }
        .rv-offcanvas-link {
          background: none; border: none; cursor: pointer;
          color: rgba(255,255,255,0.85);
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem; font-weight: 500;
          padding: 0.7rem 0.75rem;
          border-radius: 10px;
          display: flex; align-items: center; gap: 0.6rem;
          text-align: left;
          transition: background 0.2s, color 0.2s;
        }
        .rv-offcanvas-link:hover { background: rgba(0,163,137,0.12); color: #00A389; }

        /* Overlay */
        .rv-overlay {
          position: fixed; inset: 0;
          background: rgba(0,0,0,0.5);
          z-index: 1500;
        }

        /* ── Hero ── */
        .rv-hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding-top: 68px;
          overflow: hidden;
        }
        .rv-hero-bg {
          position: absolute; inset: 0;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        .rv-hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(
            135deg,
            rgba(2,27,69,0.75) 0%,
            rgba(2,27,69,0.45) 60%,
            rgba(0,163,137,0.15) 100%
          );
        }
        .rv-hero-content {
          position: relative; z-index: 2;
          max-width: 780px;
          padding: 2rem 1.5rem;
        }
        .rv-hero-eyebrow {
          display: inline-block;
          font-family: 'Outfit', sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #00A389;
          background: rgba(0,163,137,0.12);
          border: 1px solid rgba(0,163,137,0.3);
          padding: 4px 16px;
          border-radius: 50px;
          margin-bottom: 1.2rem;
        }
        .rv-hero-title {
          font-family: 'Outfit', sans-serif;
          font-size: 3.2rem;
          font-weight: 800;
          color: #fff;
          line-height: 1.18;
          margin-bottom: 1.1rem;
        }
        .rv-hero-desc {
          font-size: 1rem;
          color: rgba(255,255,255,0.78);
          line-height: 1.7;
          margin-bottom: 2rem;
          max-width: 540px;
          margin-left: auto; margin-right: auto;
        }

        /* ── Responsive ── */
        @media (max-width: 960px) {
          .rv-header-inner { padding: 0 1.5rem; }
          .rv-nav { display: none; }
          .rv-cta-desktop { display: none; }
          .rv-hamburger { display: flex; }
        }

        @media (max-width: 640px) {
          .rv-header-inner { padding: 0 1rem; height: 60px; }
          .rv-hero { padding-top: 60px; }
          .rv-hero-title { font-size: 2.2rem; }
          .rv-hero-desc { font-size: 0.93rem; }
          .rv-hamburger { width: 40px; height: 40px; }
        }

        @media (max-width: 480px) {
          .rv-header-inner { padding: 0 0.875rem; height: 56px; }
          .rv-hero { padding-top: 56px; min-height: 90vh; }
          .rv-hero-title { font-size: 1.85rem; }
          .rv-hero-desc { font-size: 0.9rem; max-width: 100%; }
          .rv-hero-eyebrow { font-size: 0.68rem; }
          .rv-hero-content { padding: 1.5rem 1.25rem; }
          .rv-logo-text { font-size: 1rem; }
          .rv-logo-img { width: 32px; height: 32px; }
        }

        @media (max-width: 400px) {
          .rv-hero-title { font-size: 1.6rem; }
          .rv-hero-desc { font-size: 0.85rem; }
          .rv-header-inner { gap: 0.75rem; }
        }
      `}</style>
    </>
  );
};

export default Navbar;