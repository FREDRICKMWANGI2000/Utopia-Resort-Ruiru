import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, Ticket } from 'lucide-react';
import { FEATURED_EVENT } from '../../data/siteData';
import './FeaturedEvent.css';
import backg from "../images/mainevent.png";

function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const calc = () => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft({ months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const totalSeconds = Math.floor(diff / 1000);
      const months = Math.floor(totalSeconds / (30 * 24 * 3600));
      const days = Math.floor((totalSeconds % (30 * 24 * 3600)) / (24 * 3600));
      const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;
      setTimeLeft({ months, days, hours, minutes, seconds });
    };

    calc();
    const interval = setInterval(calc, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
}

function CountdownUnit({ value, label }) {
  return (
    <div className="countdown__unit">
      <span className="countdown__value">{String(value ?? 0).padStart(2, '0')}</span>
      <span className="countdown__label">{label}</span>
    </div>
  );
}

export default function FeaturedEvent() {
  const ev = FEATURED_EVENT;
  const timeLeft = useCountdown(ev.date);

  const formatDate = (d) =>
    new Date(d).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  const formatTime = (d) =>
    new Date(d).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });

  return (
    <section id="featured-event" className="featured-event">
      <div className="featured-event__bg">
        <img src={backg} alt={ev.title} className="featured-event__bg-img" />
        <div className="featured-event__overlay" />
      </div>

      <div className="container featured-event__inner">
        <div className="featured-event__badge">
          <span className="pulse-dot" />
          Upcoming Event
        </div>

        <div className="featured-event__content">
          <div className="featured-event__left">
            <span className="section-label" style={{ color: 'var(--gold-light)' }}>{ev.subtitle}</span>
            <h2 className="featured-event__title">{ev.title}</h2>
            <div className="divider-gold" />
            <p className="featured-event__desc">{ev.description}</p>

            <div className="featured-event__meta">
              <div className="featured-event__meta-item">
                <Calendar size={16} />
                <span>{formatDate(ev.date)}</span>
              </div>
              <div className="featured-event__meta-item">
                <Clock size={16} />
                <span>Event Starts At 1700HRS {formatTime(ev.date)}</span>
              </div>
              <div className="featured-event__meta-item">
                <MapPin size={16} />
                <span>{ev.location}</span>
              </div>
            </div>
<a
  href={ev.ticketUrl}
  className="btn btn-gold featured-event__ticket-btn"
>
              <Ticket size={18} />
              Buy Tickets
            </a>
          </div>

          <div className="featured-event__right">
            <div className="featured-event__countdown-box">
              <p className="countdown__heading">Event Starts In</p>
              <div className="countdown__grid">
                <CountdownUnit value={timeLeft.months} label="Months" />
                <span className="countdown__sep">:</span>
                <CountdownUnit value={timeLeft.days} label="Days" />
                <span className="countdown__sep">:</span>
                <CountdownUnit value={timeLeft.hours} label="Hours" />
                <span className="countdown__sep">:</span>
                <CountdownUnit value={timeLeft.minutes} label="Mins" />
                <span className="countdown__sep">:</span>
                <CountdownUnit value={timeLeft.seconds} label="Secs" />
              </div>
              <div className="countdown__footer">
                <a
  href={ev.ticketUrl}
  className="btn btn-outline-gold countdown__cta"
>
                  Secure Your Spot
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
