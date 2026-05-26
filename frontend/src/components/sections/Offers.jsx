import React, { useState } from 'react';
import { Check,Send, Tag } from 'lucide-react';
import { OFFERS } from '../../data/siteData';
import './Offers.css';
import eventsimg from "../images/boatriding.png"

export default function Offers() {
  const [hover, setHover] = useState(null);

  return (
    <section id="offers" className="offers section-pad">
      <div className="offers__bg">
        <img src={eventsimg} alt="" className="offers__bg-img" />
        <div className="offers__bg-overlay" />
      </div>

      <div className="container offers__inner">
        <div className="section-header center">
          <span className="section-label" style={{ color: 'var(--gold-light)' }}>Special Offers</span>
          <h2 className="section-title light">Exclusive Packages & Deals</h2>
          <div className="divider-gold center" />
          <p className="section-subtitle light">
            Handpicked packages that combine our finest services at exceptional value — for every occasion, budget, and dream.
          </p>
        </div>

        <div className="offers__grid">
          {OFFERS.map((offer, i) => (
            <div
              key={i}
              className={`offers__card ${hover === i ? 'offers__card--hover' : ''}`}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
            >
              <div className="offers__card-img-wrap">
                <img src={offer.image} alt={offer.title} loading="lazy" className="offers__card-img" />
                <div className="offers__badge">{offer.badge}</div>
                <div className="offers__tag-chip"><Tag size={11} /> {offer.tag}</div>
              </div>

              <div className="offers__card-body">
                <h3 className="offers__card-title">{offer.title}</h3>
                <p className="offers__card-desc">{offer.desc}</p>

                <div className="offers__includes">
                  <div className="offers__includes-title">What's Included:</div>
                  <ul className="offers__includes-list">
                    {offer.includes.map(inc => (
                      <li key={inc}><Check size={12} />{inc}</li>
                    ))}
                  </ul>
                </div>

               
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
