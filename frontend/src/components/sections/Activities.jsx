import React, { useState } from 'react';
import { Clock, Users, Star } from 'lucide-react';
import { ACTIVITIES } from '../../data/siteData';
import eventsimg from "../images/mainevent.png";
import './Activities.css';


export default function Activities() {
  const [activeActivity, setActiveActivity] = useState(null);

  return (
    <section id="activities" className="activities section-pad">
      <div className="container">
        <div className="section-header center">
          <span className="section-label">Games & Activities</span>
          <h2 className="section-title">Adventures For Everyone</h2>
          <div className="divider-gold center" />
          <p className="section-subtitle">
            Thrill-seekers and leisure lovers alike will find their perfect escape in our range of activities — all set within the natural beauty of Utopia.
          </p>
        </div>

        <div className="activities__grid">
          {ACTIVITIES.map((act, i) => (
            <div
              key={act.name}
              className={`activities__card ${activeActivity === i ? 'activities__card--active' : ''}`}
              onClick={() => setActiveActivity(activeActivity === i ? null : i)}
            >
              <div className="activities__card-img-wrap">
                <img src={act.image} alt={act.name} loading="lazy" className="activities__card-img" />
                
               
              </div>
              <div className="activities__card-body">
                <h3 className="activities__card-name">{act.name}</h3>
                <p className="activities__card-desc">{act.desc}</p>
                <div className="activities__card-meta">
                  <span><Clock size={13} /> {act.duration}</span>
                  <span><Users size={13} /> Ages {act.ageMin}+</span>
                  <span><Star size={13} fill="currentColor" /> 4.9</span>
                </div>
                <div className="activities__card-footer">
                
                 
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Activity Bundle Banner */}
        <div className="activities__bundle">
          <div className="activities__bundle-content">
            <span className="section-label" style={{ color: 'var(--gold-light)' }}>Bundle Deal</span>
            <h3 className="activities__bundle-title">All-Day Activities Pass</h3>
            <p>Unlimited access to all activities for a full day — the perfect add-on for family stays and group events.</p>
            <div className="activities__bundle-price">
              <span className="activities__bundle-original">kes 2,500</span>
              <span className="activities__bundle-sale">kes 2,000</span>
              <span className="activities__bundle-per">/person Exclusive of yatch Ride and jet Ski</span>
            </div>
           <div className="daypass__image-wrap">
  <img
    src={eventsimg}
    alt="Day Pass"
    className="daypass__image"
  />
</div>
          </div>
          <div className="activities__bundle-icons">
            {ACTIVITIES.map(a => (
              <div key={a.name} className="activities__bundle-item">
                <span className="activities__bundle-item-icon">{a.icon}</span>
                <span>{a.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
