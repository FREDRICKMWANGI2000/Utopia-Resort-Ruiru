import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../../data/siteData';
import './Testimonials.css';

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="testimonials section-pad">
      <div className="testimonials__bg">
        <img src="https://images.unsplash.com/photo-1586105251261-72a756497a11?w=1600&q=80" alt="" className="testimonials__bg-img" />
        <div className="testimonials__overlay" />
      </div>

      <div className="container testimonials__inner">
        <div className="section-header center">
          <span className="section-label" style={{ color: 'var(--gold-light)' }}>Testimonials</span>
          <h2 className="section-title light">What Our Guests Say</h2>
          <div className="divider-gold center" />
        </div>

        <div className="testimonials__carousel">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className={`testimonials__card ${i === active ? 'testimonials__card--active' : ''}`}>
              <div className="testimonials__quote-icon"><Quote size={32} /></div>
              <p className="testimonials__text">"{t.text}"</p>
              <div className="testimonials__stars">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} size={16} fill="currentColor" />
                ))}
              </div>
              <div className="testimonials__author">
                <img src={t.avatar} alt={t.name} className="testimonials__avatar" loading="lazy" />
                <div>
                  <div className="testimonials__name">{t.name}</div>
                  <div className="testimonials__occasion">{t.occasion}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials__dots">
          {TESTIMONIALS.map((_, i) => (
            <button key={i} className={`testimonials__dot ${i === active ? 'testimonials__dot--active' : ''}`} onClick={() => setActive(i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
