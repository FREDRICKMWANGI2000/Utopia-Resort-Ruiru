import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../../data/siteData';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const setField = (k, v) => setForm(p => ({ ...p, [k]: v }));

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name required';
    if (!form.phone.trim()) e.phone = 'Phone required';
    if (!form.email.trim()) e.email = 'Email required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Invalid email';
    if (!form.message.trim()) e.message = 'Message required';
    return e;
  };

 const handleSubmit = async (ev) => {
  ev.preventDefault();

  const errs = validate();

  if (Object.keys(errs).length) {
    setErrors(errs);
    return;
  }

  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/contact`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          message: form.message,
        }),
      }
    );

    const data = await response.json();

    if (data.success) {
      setSubmitted(true);

      setForm({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    }

  } catch (error) {
    console.log(error);
    alert("Failed to send message");
  }
};

  return (
    <section id="contact" className="contact section-pad">
      <div className="container">
        <div className="section-header center">
          <span className="section-label">Contact Us</span>
          <h2 className="section-title">Get in Touch</h2>
          <div className="divider-gold center" />
          <p className="section-subtitle">
            Our dedicated hospitality team is here to assist with reservations, event planning, and any special requests. Reach out — we'd love to hear from you.
          </p>
        </div>

        <div className="contact__grid">
          {/* Left Information of the email phone etc.. + Map */}
          <div className="contact__left">
            <div className="contact__info-cards">
              <a href={`tel:${CONTACT_INFO.phone}`} className="contact__info-card">
                <div className="contact__info-icon"><Phone size={20} /></div>
                <div>
                  <div className="contact__info-label">Call Us</div>
                  <div className="contact__info-value">{CONTACT_INFO.phone}</div>
                  <div className="contact__info-sub">Available 24/7</div>
                </div>
              </a>

              <a href={`mailto:${CONTACT_INFO.email}`} className="contact__info-card">
                <div className="contact__info-icon"><Mail size={20} /></div>
                <div>
                  <div className="contact__info-label">Email Us</div>
                  <div className="contact__info-value">{CONTACT_INFO.email}</div>
                  <div className="contact__info-sub">Reply within 2 hours</div>
                </div>
              </a>

              <a href={CONTACT_INFO.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="contact__info-card">
                <div className="contact__info-icon contact__info-icon--green"><MessageCircle size={20} /></div>
                <div>
                  <div className="contact__info-label">WhatsApp</div>
                  <div className="contact__info-value">Message us directly</div>
                  <div className="contact__info-sub">Instant responses</div>
                </div>
              </a>

              <div className="contact__info-card">
                <div className="contact__info-icon contact__info-icon--gold"><MapPin size={20} /></div>
                <div>
                  <div className="contact__info-label">Visit Us</div>
                  <div className="contact__info-value">{CONTACT_INFO.address}</div>
                  <a href={CONTACT_INFO.mapUrl} target="_blank" rel="noopener noreferrer" className="contact__info-sub contact__info-link">
                    Get directions →
                  </a>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="contact__map-wrap">
              <iframe
                title="AdvaBliss Resort Location"
                src={CONTACT_INFO.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="contact__map"
              />
              <a
                href={CONTACT_INFO.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__map-overlay-btn"
              >
                Open in Google Maps ↗
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact__right">
            <div className="contact__form-wrap">
              <span className="section-label">Send a Message</span>
              <h3 className="contact__form-title">We'd Love to Hear From You</h3>
              <div className="divider-gold" />

              {submitted ? (
                <div className="contact__success">
                  <div className="contact__success-icon">
                    <Send size={28} />
                  </div>
                  <h4>Message Sent!</h4>
                  <p>Thank you, <strong>{form.name}</strong>! We've received your message and will respond to <strong>{form.email}</strong> within 2 hours.</p>
                  <button className="btn btn-outline-gold" onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', message: '' }); }}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact__form" onSubmit={handleSubmit} noValidate>
                  <div className="form-group">
                    <label className="form-label">Your Name *</label>
                    <input
                      className={`form-input ${errors.name ? 'error' : ''}`}
                      placeholder="Your full name"
                      value={form.name}
                      onChange={e => setField('name', e.target.value)}
                    />
                    {errors.name && <span className="form-error">{errors.name}</span>}
                  </div>

                  <div className="contact__form-row">
                    <div className="form-group">
                      <label className="form-label">Phone Number *</label>
                      <input
                        type="tel"
                        className={`form-input ${errors.phone ? 'error' : ''}`}
                        placeholder="+254 700 000 000"
                        value={form.phone}
                        onChange={e => setField('phone', e.target.value)}
                      />
                      {errors.phone && <span className="form-error">{errors.phone}</span>}
                    </div>

                    <div className="form-group">
                      <label className="form-label">Email Address *</label>
                      <input
                        type="email"
                        className={`form-input ${errors.email ? 'error' : ''}`}
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={e => setField('email', e.target.value)}
                      />
                      {errors.email && <span className="form-error">{errors.email}</span>}
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message *</label>
                    <textarea
                      className={`form-textarea ${errors.message ? 'error' : ''}`}
                      placeholder="How can we help you? Tell us about your enquiry, upcoming stay, or event plans…"
                      rows={6}
                      value={form.message}
                      onChange={e => setField('message', e.target.value)}
                    />
                    {errors.message && <span className="form-error">{errors.message}</span>}
                  </div>

                  <button type="submit" className="btn btn-gold contact__submit">
                    <Send size={16} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
