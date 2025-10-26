import React, { useState } from 'react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/manlyzpo';

export default function FormModal({ isOpen, onClose, type }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [submitError, setSubmitError] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\+?[0-9\s]{7,15}$/.test(formData.phone.trim())) newErrors.phone = 'Enter a valid phone number';
    if (type === 'learn' && !formData.email.trim()) newErrors.email = 'Email is required for details';
    else if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) newErrors.email = 'Enter a valid email address';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);
    if (!validateForm()) return;
    setLoading(true);
    try {
      const payload = {
        formType: type === 'book' ? 'Book Session' : 'Learn More',
        name: formData.name,
        phone: formData.phone,
        email: formData.email
      };

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || 'Submission failed');
      }

      setSuccess('Thanks — we received your request.');
      setFormData({ name: '', phone: '', email: '' });
      // close after short delay so user sees success
      setTimeout(() => {
        setSuccess(null);
        onClose();
      }, 1400);
    } catch (err) {
      setSubmitError('There was an error submitting the form. Please try again.');
      console.error('FormModal submit error:', err);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-close" onClick={onClose} aria-label="Close">&times;</button>
        <h2>{type === 'book' ? 'Book Your Session' : 'Download Program Details'}</h2>

        <form onSubmit={handleSubmit} className="form" noValidate>
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Full Name"
              className={errors.name ? 'error' : ''}
              required
            />
            {errors.name && <span className="error-text">{errors.name}</span>}
          </div>

          <div className="form-group">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone Number"
              className={errors.phone ? 'error' : ''}
              required
            />
            {errors.phone && <span className="error-text">{errors.phone}</span>}
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder={`Email Address ${type === 'learn' ? '(Required)' : '(Optional)'}`}
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          {submitError && <div className="error-text">{submitError}</div>}
          {success && <div className="form-success">{success}</div>}

          <button
            type="submit"
            className={`cta ${type === 'book' ? 'cta--secondary' : 'cta--secondary'} full-width`}
            disabled={loading}
          >
            {loading ? 'Sending...' : (type === 'book' ? 'BOOK NOW' : 'DOWNLOAD DETAILS')}
          </button>
        </form>
      </div>
    </div>
  );
}