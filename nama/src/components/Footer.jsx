import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img className="brand-logo" src="/images/nama-logo1.png" alt="Nama logo" />
          <div className="brand-text">
            <span className="brand-mark">NAMA</span>
            <span className="brand-sub">ARTISTIC WELLNESS</span>
          </div>
        </div>

        <nav className="footer-nav">
          <ul className="footer-menu">
            <li><a href="#" className="footer-link">Home</a></li>
            <li><a href="#about" className="footer-link">About</a></li>
            <li><a href="#" className="footer-link">Services</a></li>
            <li><a href="#" className="footer-link">Portfolio</a></li>
            <li><a href="#" className="footer-link">Blog</a></li>
            <li><a href="#contact" className="footer-link">Contact</a></li>
          </ul>
        </nav>

        <div className="footer-copyright">
          <p>&copy; {currentYear} NAMA Artistic Wellness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}