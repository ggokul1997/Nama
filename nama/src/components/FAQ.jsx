import React, { useState } from 'react';

const faqData = [
  { q: 'What is NAMA and its philosophy?', a: 'NAMA is a philosophy for life that stands for Nurturing, Authenticity, Mindfulness, and Artistic expression — guiding discovery and gentle growth.' },
  { q: 'How do I book a session?', a: 'Click "BOOK A SESSION" in the hero and fill the quick form. Our team will follow up to confirm availability.' },
  { q: 'What types of mediums are explored?', a: 'We explore painting, movement, journaling, voice and mixed-media approaches designed for self-expression and wellbeing.' },
  { q: 'Do you offer online sessions?', a: 'Yes — many of our sessions are available online and are designed to be accessible from home.' },
  { q: 'What prior artistic experience is needed?', a: 'No prior experience is required — sessions are designed to be welcoming for all skill levels.' },
  { q: 'Are sessions confidential?', a: 'Yes. All our one-on-one sessions are confidential and tailored to your needs.' },
  { q: 'How long is a typical session?', a: 'Most sessions run 45-75 minutes depending on format and goals.' },
  { q: 'Can I schedule a group workshop?', a: 'Absolutely — contact us with your group size and needs and we will design a suitable workshop.' },
  { q: 'Can I schedule a group workshop?', a: 'Absolutely — contact us with your group size and needs and we will design a suitable workshop.' }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="faq-section container" aria-labelledby="faq-title">
      <h2 id="faq-title" className="section-title">Frequently Asked Questions</h2>
      <div className="faq-grid">
        {faqData.map((item, i) => (
          <div key={i} className={`faq-item ${openIndex === i ? 'open' : ''}`}>
            <button
              className="faq-question"
              onClick={() => toggle(i)}
              aria-expanded={openIndex === i}
              aria-controls={`faq-panel-${i}`}
              id={`faq-btn-${i}`}
            >
              <span>{item.q}</span>
              <span className="faq-icon" aria-hidden>▾</span>
            </button>

            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-btn-${i}`}
              className="faq-answer"
              style={{ maxHeight: openIndex === i ? '400px' : '0' }}
            >
              <div className="faq-answer-inner">
                {item.a}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
