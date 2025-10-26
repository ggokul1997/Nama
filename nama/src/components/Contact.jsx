import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="contact-section">
      <div className="container contact-grid">
        <div className="contact-form-wrapper">
          <h2 className="section-title">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message / Inquiry"
                rows="4"
                required
              ></textarea>
            </div>

            <button type="submit" className="cta cta--secondary full-width">
              Send Message
            </button>
          </form>
        </div>

        <div className="studio-details">
          <h2 className="section-title">Our Studio & Details</h2>
          <div className="details-grid">
            

            <div className="detail-item">
              <h3>Phone:</h3>
              <a href="tel:+15551234567" className="detail-link">
                +919074458758
              </a>
            </div>

            <div className="detail-item">
              <div className="map-container">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62856.90088662503!2d76.24286834307328!3d10.053423569188677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d2552691095%3A0x65021afff79a0bee!2sNAMA%3A%20A%20Wellness%20Initiative!5e0!3m2!1sen!2sin!4v1761454912575!5m2!1sen!2sin"
                  width="90%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="NAMA Studio Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}