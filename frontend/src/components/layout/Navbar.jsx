import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_LINKS } from '../../data/siteData';
import './Navbar.css';
import logo from '../images/logo2.png';

export default function Navbar({ onBookNow }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setMenuOpen(false);
    setActiveSection(id);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="container navbar__inner">
          {/* Logo */}
          <button className="navbar__logo" onClick={() => scrollTo('home')} aria-label="Go to home">
            <img
    src={logo}
    alt=" Utopia Resort Ruiru"
    className="navbar__logo-image"
  />
          </button>

          {/* Desktop Nav */}
          <ul className="navbar__links">
            {NAV_LINKS.map(link => (
              <li key={link.id}>
                <button
                  className={`navbar__link ${activeSection === link.id ? 'navbar__link--active' : ''}`}
                  onClick={() => scrollTo(link.id)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="navbar__actions">
            <a href="tel:+254790155111" className="navbar__tel" aria-label="Call us">
              <Phone size={16} />
              <span>+254 790 155 111</span>
            </a>
            <button className="btn btn-gold navbar__book" onClick={onBookNow}>
              Book Now
            </button>
            <button
              className="navbar__hamburger"
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}>
        <div className="mobile-menu__logo">
          <span className="navbar__logo-icon">✦</span>
          <span className="navbar__logo-main">AdvaBliss</span>
        </div>
        <ul className="mobile-menu__links">
          {NAV_LINKS.map((link, i) => (
            <li key={link.id} style={{ animationDelay: `${i * 0.06}s` }}>
              <button
                className={`mobile-menu__link ${activeSection === link.id ? 'mobile-menu__link--active' : ''}`}
                onClick={() => scrollTo(link.id)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
       
      </div>

      {/* Backdrop */}
      {menuOpen && <div className="mobile-menu__backdrop" onClick={() => setMenuOpen(false)} />}
    </>
  );
}
