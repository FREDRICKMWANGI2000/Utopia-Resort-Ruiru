import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import './BookNowModal.css';

export default function BookNowModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  const scrollTo = (id) => {
    onClose();
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
    }, 200);
  };

  const options = [
    { title: 'Accommodation', desc: 'Book a room or suite', section: 'accommodation' },
    { title: 'Restaurant', desc: 'Reserve a dining table', section: 'restaurant' },
    { title: 'Events & Meetings', desc: 'Plan your event', section: 'events' },
    { title: 'Activities', desc: 'Book activities', section: 'activities' },
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Close"><X size={20} /></button>
        <div className="modal__header">
          <span className="modal__icon">✦</span>
          <h2 className="modal__title">What would you like to book?</h2>
          <p className="modal__sub">Select a category to continue your reservation</p>
        </div>
        <div className="modal__options">
          {options.map(opt => (
            <button key={opt.section} className="modal__option" onClick={() => scrollTo(opt.section)}>
              <span className="modal__option-icon">{opt.icon}</span>
              <div>
                <div className="modal__option-title">{opt.title}</div>
                <div className="modal__option-desc">{opt.desc}</div>
              </div>
              <span className="modal__option-arrow">→</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
