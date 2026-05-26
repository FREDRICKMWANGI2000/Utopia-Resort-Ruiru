import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './Hero.css';
import slide1 from "../images/ziplining.png";
import slide2 from "../images/backgroundimg1.png";
import slide3 from "../images/boat.webp";

const SLIDES = [
  {
    image: slide1, 
    headline: 'Where Luxury',
    headlineAccent: 'Meets Nature',
    sub: 'An immersive resort experience nestled in lush gardens — crafted for celebrations, escapes, and unforgettable moments.',
  },
  {
    image: slide2,
    headline: 'Dream Weddings',
    headlineAccent: 'Made Real',
    sub: 'Say "I do" beneath open skies, Around Utopia garden and five-star elegance at Utopia Resort.',
  },
  {
      image: slide3,
    headline: 'Adventures',
    headlineAccent: 'For All Ages',
    sub: 'From exciting jet ski adventures to relaxing boat rides — discover unforgettable experiences for the whole family.',
  },
];

export default function Hero({ onBookNow }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent(c => (c + 1) % SLIDES.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const scrollDown = () => {
    const el = document.getElementById('featured-event');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      {/* Slides */}
      {SLIDES.map((slide, i) => (
        <div key={i} className={`hero__slide ${i === current ? 'hero__slide--active' : ''}`}>
          <img src={slide.image} alt="" className="hero__slide-img" loading={i === 0 ? 'eager' : 'lazy'} />
          <div className="hero__slide-overlay" />
        </div>
      ))}

      {/* Content */}
      <div className="hero__content container">
        <div className="hero__badge">✦ Premium Hospitality & Events</div>
        <h1 className="hero__title" key={current}>
          {SLIDES[current].headline}<br />
          <em className="hero__title-accent">{SLIDES[current].headlineAccent}</em>
        </h1>
        <p className="hero__sub" key={`sub-${current}`}>{SLIDES[current].sub}</p>
        <div className="hero__actions">
          <button className="btn btn-gold" onClick={onBookNow}>Reserve Your Stay</button>
          <button className="btn btn-outline-white" onClick={() => {
            const el = document.getElementById('virtual-tour');
            if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
          }}>
            Explore the Resort
          </button>
        </div>

        {/* Stats */}
        <div className="hero__stats">
          {[['5★', 'Luxury Rating'],['500+', 'Events Hosted'],['100+', 'Business Clients '],['24/7', 'Concierge'],].map(([val, lbl]) => (
            <div key={lbl} className="hero__stat">
              <span className="hero__stat-val">{val}</span>
              <span className="hero__stat-lbl">{lbl}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Slide dots */}
      <div className="hero__dots">
        {SLIDES.map((_, i) => (
          <button key={i} className={`hero__dot ${i === current ? 'hero__dot--active' : ''}`} onClick={() => setCurrent(i)} aria-label={`Slide ${i + 1}`} />
        ))}
      </div>

      {/* Scroll cue */}
      <button className="hero__scroll" onClick={scrollDown} aria-label="Scroll down">
        <ChevronDown size={24} />
      </button>
    </section>
  );
}
