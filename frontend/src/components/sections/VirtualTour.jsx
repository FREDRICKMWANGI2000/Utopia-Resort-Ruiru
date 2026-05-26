import React, { useState } from 'react';
import { ChevronLeft,Send, ChevronRight, Maximize2 } from 'lucide-react';
import { TOUR_SPACES } from '../../data/siteData';
import './VirtualTour.css';


export default function VirtualTour() {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const prev = () => setActive(a => (a - 1 + TOUR_SPACES.length) % TOUR_SPACES.length);
  const next = () => setActive(a => (a + 1) % TOUR_SPACES.length);
  const space = TOUR_SPACES[active];

  return (
    <section id="virtual-tour" className="virtual-tour section-pad">
      <div className="container">
        <div className="section-header center">
          <span className="section-label">Virtual Tour</span>
          <h2 className="section-title">Explore AdvaBliss</h2>
          <div className="divider-gold center" />
          <p className="section-subtitle">
            Take an immersive visual journey through our resort — from lush gardens and luxury suites to our fine dining spaces and event venues.
          </p>
        </div>

        <div className="vt__main">
          {/* Main Viewer */}
          <div className="vt__viewer">
            <img
              src={space.image}
              alt={space.name}
              className="vt__viewer-img"
              key={active}
            />
            <div className="vt__viewer-overlay">
              <div className="vt__viewer-info">
                <h3 className="vt__viewer-name">{space.name}</h3>
                <p className="vt__viewer-desc">{space.desc}</p>
              </div>
              <button className="vt__viewer-expand" onClick={() => setLightbox(true)} aria-label="Expand">
                <Maximize2 size={18} />
              </button>
            </div>

            {/* Navigation Arrows */}
            <button className="vt__nav vt__nav--prev" onClick={prev} aria-label="Previous">
              <ChevronLeft size={22} />
            </button>
            <button className="vt__nav vt__nav--next" onClick={next} aria-label="Next">
              <ChevronRight size={22} />
            </button>

            {/* Progress dots */}
            <div className="vt__dots">
              {TOUR_SPACES.map((_, i) => (
                <button
                  key={i}
                  className={`vt__dot ${i === active ? 'vt__dot--active' : ''}`}
                  onClick={() => setActive(i)}
                  aria-label={`Space ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnails */}
          <div className="vt__thumbs">
            {TOUR_SPACES.map((s, i) => (
              <button
                key={s.id}
                className={`vt__thumb ${i === active ? 'vt__thumb--active' : ''}`}
                onClick={() => setActive(i)}
              >
                <img src={s.thumb} alt={s.name} loading="lazy" className="vt__thumb-img" />
                <div className="vt__thumb-overlay">
                  <span className="vt__thumb-name">{s.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="vt__cta-bar">
          <div className="vt__cta-text">
            <h4>Ready to Experience It In Person?</h4>
            <p>Schedule a complimentary resort walkthrough with our hospitality team.</p>
          </div>
          <div className="vt__cta-actions">
            <button
              className="btn btn-gold"
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
              }}
            > <Send size={20} />
              Book a Site Visit
            </button>
            <button type='submit'
              className="btn btn-outline-gold"
              
            
              onClick={() => {
                const el = document.getElementById('accommodation');
                if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
              }}
            >
              <Send size={20} />
              Reserve a Stay
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="vt__lightbox" onClick={() => setLightbox(false)}>
          <button className="vt__lightbox-close" onClick={() => setLightbox(false)}>✕</button>
          <img src={space.image} alt={space.name} className="vt__lightbox-img" onClick={e => e.stopPropagation()} />
          <div className="vt__lightbox-caption">{space.name} — {space.desc}</div>
        </div>
      )}
    </section>
  );
}
