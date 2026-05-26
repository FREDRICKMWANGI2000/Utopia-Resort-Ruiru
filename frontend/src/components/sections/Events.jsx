import React, { useState } from "react";
import { Check } from "lucide-react";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";
import { EVENT_TYPES, EVENT_ADDONS } from "../../data/siteData";
import "./Events.css";
import eventsimg from "../images/backgroundimg2.png";
import eventsimg1 from "../images/logo11.png";

export default function Events() {
  const [activeType, setActiveType] = useState("wedding");
  const [addons, setAddons] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    guests: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const toggleAddon = (id) =>
    setAddons((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id],
    );
  const totalAddons = addons.reduce(
    (s, id) => s + (EVENT_ADDONS.find((a) => a.id === id)?.price || 0),
    0,
  );

  const setField = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name required";
    if (!form.email.trim()) e.email = "Email required";
    if (!form.phone.trim()) e.phone = "Phone required";
    if (!form.date) e.date = "Event date required";
    if (!form.guests.trim()) e.guests = "Guest count required";
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
        `${import.meta.env.VITE_API_URL}/api/book-meeting`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            eventType: activeType,
            name: form.name,
            email: form.email,
            phone: form.phone,
            date: form.date,
            guests: form.guests,
            message: form.message,
            addons,
          }),
        },
      );

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);

        setForm({
          name: "",
          email: "",
          phone: "",
          date: "",
          guests: "",
          message: "",
        });

        setAddons([]);
      }
    } catch (error) {
      console.log(error);
      alert("Failed to submit enquiry");
    }
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <section id="events" className="events section-pad">
      <div className="events__hero-banner">
        <img src={eventsimg} alt="Events" className="events__hero-img" />
        <div className="events__hero-overlay" />
        <div className="events__hero-content container">
          <span
            className="section-label"
            style={{ color: "var(--gold-light)" }}
          >
            Meetings & Events
          </span>
          <h2 className="section-title light">
            Crafting Extraordinary Moments
          </h2>
          <div className="divider-gold" />
          <p className="section-subtitle light">
            From grand wedding galas to intimate corporate retreats — our
            dedicated events team handles every detail so you can focus on the
            experience.
          </p>
        </div>
      </div>

      <div className="container">
        {/* Event Types */}
        <div className="events__types">
          {EVENT_TYPES.map((type) => (
            <button
              key={type.id}
              className={`events__type-card ${activeType === type.id ? "events__type-card--active" : ""}`}
              onClick={() => setActiveType(type.id)}
            >
              <span className="events__type-icon">{type.icon}</span>
              <div className="events__type-name">{type.name}</div>
              <div className="events__type-capacity">{type.capacity}</div>
            </button>
          ))}
        </div>

        {/* Active Type Description */}
        {EVENT_TYPES.filter((t) => t.id === activeType).map((type) => (
          <div key={type.id} className="events__type-desc">
            <span className="events__type-icon-lg">{type.icon}</span>
            <div>
              <h3>{type.name}</h3>
              <p>{type.desc}</p>
              <span className="events__capacity-tag">👥 {type.capacity}</span>
            </div>
          </div>
        ))}

        {/* Add-Ons */}
        <div className="events__addons-section">
          <div className="section-header">
            <span className="section-label">Enhance Your Event</span>
            <h3 className="events__addons-title">Add-On Services</h3>
            <div className="divider-gold" />
            <p className="section-subtitle">
              Customise your event with our premium add-ons. Select all that
              apply.
            </p>
          </div>

          <div className="events__addons-grid">
            {EVENT_ADDONS.map((addon) => (
              <button
                key={addon.id}
                className={`events__addon ${addons.includes(addon.id) ? "events__addon--selected" : ""}`}
                onClick={() => toggleAddon(addon.id)}
              >
                <span className="events__addon-icon">{addon.icon}</span>
                <div className="events__addon-name">{addon.name}</div>
                <div className="events__addon-price">
                  +KSh {Number(addon.price).toLocaleString()}
                </div>
                {addons.includes(addon.id) && (
                  <div className="events__addon-check">
                    <Check size={14} />
                  </div>
                )}
              </button>
            ))}
          </div>

          {addons.length > 0 && (
            <div className="events__addon-total">
              <span>Selected Add-ons ({addons.length}):</span>
              <strong>+KSh {Number(totalAddons).toLocaleString()}</strong>
            </div>
          )}
        </div>

        {/* Booking Form */}
        <div className="events__form-wrap">
          <div className="events__form-left">
            <img
              src={eventsimg1}
              alt="Event planning"
              loading="lazy"
              className="events__form-img"
            />
            <div className="events__form-info">
              <h4>Why Choose Utopia?</h4>
              <ul>
                {[
                  "Dedicated event coordinator",
                  "In-house catering team",
                  "Flexible payment plans",
                  "5-star hospitality staff",
                  "Premium Sound & Lighting",
                  "Exclusive Venue Access",
                ].map((f) => (
                  <li key={f}>
                    <Check size={14} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="events__form-right">
            <span className="section-label">Event Enquiry</span>
            <h3 className="events__form-title">Plan Your Event</h3>
            <div className="divider-gold" />

            {submitted ? (
              <div className="accom__success">
                <div className="accom__success-icon">✓</div>
                <h3>Enquiry Submitted!</h3>
                <p>
                  Our events team will reach out to{" "}
                  <strong>{form.email}</strong> within 24 hours to discuss your
                  vision for a{" "}
                  <strong>
                    {EVENT_TYPES.find((t) => t.id === activeType)?.name}
                  </strong>{" "}
                  event.
                </p>
                <button
                  className="btn btn-gold"
                  onClick={() => setSubmitted(false)}
                >
                  New Enquiry
                </button>
              </div>
            ) : (
              <form className="events__form" onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label className="form-label">Event Type</label>
                  <div className="events__selected-type">
                    {EVENT_TYPES.find((t) => t.id === activeType)?.icon}{" "}
                    {EVENT_TYPES.find((t) => t.id === activeType)?.name}
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Your Name *</label>
                  <input
                    className={`form-input ${errors.name ? "error" : ""}`}
                    placeholder="Full name"
                    value={form.name}
                    onChange={(e) => setField("name", e.target.value)}
                  />
                  {errors.name && (
                    <span className="form-error">{errors.name}</span>
                  )}
                </div>
                <div className="events__form-row">
                  <div className="form-group">
                    <label className="form-label">Email *</label>
                    <input
                      type="email"
                      className={`form-input ${errors.email ? "error" : ""}`}
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => setField("email", e.target.value)}
                    />
                    {errors.email && (
                      <span className="form-error">{errors.email}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone *</label>
                    <input
                      type="tel"
                      className={`form-input ${errors.phone ? "error" : ""}`}
                      placeholder="+254 700 000 000"
                      value={form.phone}
                      onChange={(e) => setField("phone", e.target.value)}
                    />
                    {errors.phone && (
                      <span className="form-error">{errors.phone}</span>
                    )}
                  </div>
                </div>
                <div className="events__form-row">
                  <div className="form-group">
                    <label className="form-label">Event Date *</label>
                    <input
                      type="date"
                      className={`form-input ${errors.date ? "error" : ""}`}
                      min={today}
                      value={form.date}
                      onChange={(e) => setField("date", e.target.value)}
                    />
                    {errors.date && (
                      <span className="form-error">{errors.date}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label className="form-label">Number of Guests *</label>
                    <input
                      type="number"
                      className={`form-input ${errors.guests ? "error" : ""}`}
                      placeholder="e.g. 150"
                      min="1"
                      value={form.guests}
                      onChange={(e) => setField("guests", e.target.value)}
                    />
                    {errors.guests && (
                      <span className="form-error">{errors.guests}</span>
                    )}
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Additional Details</label>
                  <textarea
                    className="form-textarea"
                    placeholder="Tell us about your vision, special requirements, or any questions…"
                    value={form.message}
                    onChange={(e) => setField("message", e.target.value)}
                  />
                </div>
                {addons.length > 0 && (
                  <div className="events__form-addons-summary">
                    <strong>Selected add-ons:</strong>{" "}
                    {addons
                      .map((id) => EVENT_ADDONS.find((a) => a.id === id)?.name)
                      .join(", ")}
                  </div>
                )}
                <button
                  type="submit"
                  className="btn btn-gold events__form-submit"
                >
                  <Send size={16} />
                  Submit Event Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
