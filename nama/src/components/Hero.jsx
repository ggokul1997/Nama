import React, { useState } from 'react'
import FormModal from './FormModal'
import FAQ from './FAQ'
import Contact from './Contact'
import Footer from './Footer'

export default function Hero() {
  const [modalConfig, setModalConfig] = useState({
    isOpen: false,
    type: null
  });

  const openModal = (type) => {
    setModalConfig({ isOpen: true, type });
  };

  const closeModal = () => {
    setModalConfig({ isOpen: false, type: null });
  };
  return (
    <>
    <header className="hero">
      {/* Decorative watercolor blobs */}
      <div className="bg-blob bg-blob--tl" />
      <div className="bg-blob bg-blob--tr" />
      <div className="bg-blob bg-blob--br" />

      {/* Top Nav */}
      <nav className="nav">
        <div className="brand">
          {/* Logo image - place your image at /images/nama-logo.png (public/images or project images folder) */}
          <img className="brand-logo" src="/images/nama-logo1.png" alt="Nama logo" />
          <div className="brand-text">
            <span className="brand-mark">NAMA</span>
            <span className="brand-sub">ARTISTIC WELLNESS</span>
          </div>
        </div>

        <ul className="menu">
          <li className="active">Home</li>
          <li><a href="#about" className="nav-link">About</a></li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Main hero content */}
      <div className="hero-content container">
        <div className="col col-left">
          <h1 className="headline">
            <div style={{fontSize:"28px"}}>Discover Your Inner Flow</div>
            <span>Where <span style={{color:"rgba(144, 221, 85, 1)"}}>Creativity</span></span>
            <br />
            <span>Meets Tranquility</span>
          </h1>

          <p className="subhead">
            NAMA Artistic Wellness is dedicated to nurturing emotional well-being through mindful, authentic creative practice. Find balance, reduce stress, and express your true self.
          </p>

          <div className="hero-cta">
            <button className="cta" onClick={() => openModal('book')}>BOOK A SESSION</button>
            <button className="cta cta--secondary" onClick={() => openModal('learn')}>LEARN MORE</button>
          </div>
          
          <FormModal 
            isOpen={modalConfig.isOpen}
            onClose={closeModal}
            type={modalConfig.type}
          />

          <div className="pill-row">
            <div className="pill">
              <div className="leaf">🍃</div>
              <div>Mindful Painting<br/>Workshops</div>
            </div>
            <div className="pill">
              <div className="leaf">🍃</div>
              <div>Creative Journaling<br/>& Prompts</div>
            </div>
            <div className="pill">
              <div className="leaf">🍃</div>
              <div>One-on-One Guided<br/>Sessions</div>
            </div>
          </div>
        </div>

        <div className="col col-right">
          {/* Silhouette / main art */}
          <img
            className="hero-figure"
            src="/images/dancer.png"
            alt="Dancer silhouette"
          />

          {/* Tiny avatars (dummy) */}
          <div className="avatar-stack">
            <img src="/images/ava1.png" alt="Client 1" />
            <img src="/images/ava2.png" alt="Client 2" />
            <img src="/images/ava3.png" alt="Client 3" />
            <img src="/images/ava2.png" alt="Client 4" />

          </div>
        </div>
      </div>

      {/* Ticker-style strip (dummy copy) */}
      <div className="ticker">
        “I’ve attended events online and found their mindful art-based
        wellness sessions amazing ✨” &nbsp;•&nbsp; “It never fails to
        re-inspire my own headspace”
      </div>
    </header>

    {/* NAMA Philosophy Section */}
    <section className="nama-philosophy container" id="about">
      <h2 className="section-title">What is NAMA?</h2>
      <p className="section-subtitle">NAMA is more than just art; it's a philosophy for life. It stands for:</p>

      <div className="philosophy-cards">
        <div className="philosophy-card">
          <div className="letter">N</div>
          <h3>Nurturing</h3>
          <p>Create a safe space for self-compassion and emotional growth.</p>
        </div>

        <div className="philosophy-card">
          <div className="letter">A</div>
          <h3>Authenticity</h3>
          <p>Express your inner world without judgment or expectation.</p>
        </div>

        <div className="philosophy-card">
          <div className="letter">M</div>
          <h3>Mindfulness</h3>
          <p>Engage fully in the present moment through creative focus.</p>
        </div>

        <div className="philosophy-card">
          <div className="letter">A</div>
          <h3>Artistic</h3>
          <p>Utilize various mediums as tools for self-discovery.</p>
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    <FAQ />

    {/* Contact Section */}
    <Contact />

    {/* Footer */}
    <Footer />
    </>
  )
}
