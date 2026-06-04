import React, { useState } from "react";
import { Users, Star, Check, X } from "lucide-react";
import Select from "react-select";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";
import { ACCOMMODATIONS } from "../../data/siteData";
import "./Accommodation.css";
import axios from "axios";

function useForm(init) {
  const [values, setValues] = useState(init);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const set = (k, v) => setValues((p) => ({ ...p, [k]: v }));
  return { values, errors, setErrors, set, loading, setLoading };
}

export default function Accommodation() {
  const { values, errors, setErrors, set, loading, setLoading } = useForm({
    fullName: "",
    accommodationType: "",
    checkIn: "",
    checkOut: "",
    adults: 1,
    children: 0,
    phone: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [selected, setSelected] = useState(null);

  const validate = (values) => {
    const e = {};

    if (!values.fullName.trim()) e.fullName = "Full name is required";

    if (!values.accommodationType)
      e.accommodationType = "Please select a room type";

    if (!values.checkIn) e.checkIn = "Check-in date required";

    if (!values.checkOut) e.checkOut = "Check-out date required";

    if (
      values.checkIn &&
      values.checkOut &&
      values.checkIn >= values.checkOut
    ) {
      e.checkOut = "Check-out must be after check-in";
    }

    if (!values.phone.trim()) {
      e.phone = "Phone number required";
    } else if (!/^\d{10}$/.test(values.phone)) {
      e.phone = "Phone number must be exactly 10 digits";
    }

    if (!values.email.trim()) e.email = "Email address required";
    else if (!/\S+@\S+\.\S+/.test(values.email))
      e.email = "Invalid email address";

    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validate(values);

    setErrors(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    setLoading(true);

    try {
    const response = await axios.post(
  `${import.meta.env.VITE_API_URL}/api/book-accommodation`,
  {
    fullName: values.fullName,
    accommodationType: values.accommodationType,
    checkInDate: values.checkIn,
    checkOutDate: values.checkOut,
    adults: values.adults,
    children: values.children,
    phone: values.phone,
    email: values.email,
  },
);

      console.log(response.data);

      setSubmitted(true);
    } catch (error) {
      console.log(error);
      alert("Failed to send booking request");
    } finally {
      setLoading(false);
    }
  };
  const today = new Date().toISOString().split("T")[0];

  return (
    <section id="accommodation" className="accommodation section-pad">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Accommodation</span>
          <h2 className="section-title">Luxury Rooms & Suites</h2>
          <div className="divider-gold" />
          <p className="section-subtitle">
            Each space is thoughtfully designed to harmonise comfort with
            natural beauty — from intimate garden rooms to expansive family
            suites.
          </p>
        </div>

        {/* Room Cards */}
        <div className="accom__rooms">
          {ACCOMMODATIONS.map((room) => (
            <div
              key={room.id}
              className={`accom__card ${selected === room.id ? "accom__card--selected" : ""}`}
              onClick={() => {
                setSelected(room.id);
                set("accommodationType", room.id);
              }}
            >
              {room.badges && <span className="accom__badge">{room.badges}</span>}
              <div className="accom__card-img-wrap">
                <img
                  src={room.image}
                  alt={room.name}
                  className="accom__card-img"
                  loading="lazy"
                />
                <div className="accom__card-overlay">
                  <div className="accom__card-features">
                    {room.features.map((f) => (
                      <span key={f} className="accom__feature">
                        <Check size={12} />
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="accom__card-body">
                <div className="accom__card-type">{room.type}</div>
                <h3 className="accom__card-name">{room.name}</h3>
                <p className="accom__card-desc">{room.description}</p>
                <div className="accom__card-footer">
                  <div className="accom__price">
                    <span className="accom__price-from">From</span>
                    <span className="accom__price-val">
                      {room.price.toLocaleString("en-KE", {
                        style: "currency",
                        currency: "KES",
                        maximumFractionDigits: 0,
                      })}
                    </span>
                    <span className="accom__price-per">/night</span>
                  </div>
                  <div className="accom__capacity">
                    <Users size={14} />
                    <span>Up to {room.capacity}</span>
                  </div>
                </div>
                <button
                  className={`btn accom__select-btn ${selected === room.id ? "btn-rgba(3, 10, 71, 0.97)" : "btn-outline-gold"}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelected(room.id);
                    set("accommodationType", room.id);
                  }}
                >
                  {selected === room.id ? (
                    <>
                      <Check size={15} /> Selected
                    </>
                  ) : (
                    "Select Room"
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Booking Form */}
        <div className="accom__form-wrap" id="accommodation-form">
          <div className="accom__form-header">
            <span className="section-label">Reservation</span>
            <h3 className="accom__form-title">Complete Your Booking</h3>
            <div className="divider-gold" />
          </div>

          {submitted ? (
            <div className="accom__success">
              <div className="accom__success-icon">✓</div>
              <h3>Booking Request Received!</h3>
              <p>
                Thank you, <strong>{values.fullName}</strong>. Our reservations
                team will contact you within 2 hours at{" "}
                <strong>{values.email}</strong> to confirm availability and
                finalise your booking.
              </p>
              <button
                className="btn btn-gold"
                onClick={() => {
                  setSubmitted(false);
                }}
              >
                Make Another Booking
              </button>
            </div>
          ) : (
            <form className="accom__form" onSubmit={handleSubmit} noValidate>
              <div className="accom__form-grid">
                <div className="form-group accom__span-2">
                  <label className="form-label">Full Name *</label>
                  <input
                    className={`form-input ${errors.fullName ? "error" : ""}`}
                    placeholder="Your full name"
                    value={values.fullName}
                    onChange={(e) => set("fullName", e.target.value)}
                  />
                  {errors.fullName && (
                    <span className="form-error">{errors.fullName}</span>
                  )}
                </div>

              <div className="form-group accom__span-2">
  <label className="form-label">Accommodation Type *</label>

  <Select
    className="custom-select"
    classNamePrefix="select"
    placeholder="— Select room type —"
    value={
      ACCOMMODATIONS
        .map((r) => ({
          value: r.id,
          label: `${r.name} — ${r.price.toLocaleString("en-KE", {
            style: "currency",
            currency: "KES",
            maximumFractionDigits: 0,
          })}/night`,
        }))
        .find((option) => option.value === values.accommodationType)
    }
    onChange={(selectedOption) => {
      set("accommodationType", selectedOption.value);
      setSelected(selectedOption.value);
    }}
    options={ACCOMMODATIONS.map((r) => ({
      value: r.id,
      label: `${r.name} — ${r.price.toLocaleString("en-KE", {
        style: "currency",
        currency: "KES",
        maximumFractionDigits: 0,
      })}/night`,
    }))}
  />

  {errors.accommodationType && (
    <span className="form-error">
      {errors.accommodationType}
    </span>
  )}
</div>

                <div className="form-group">
                  <label className="form-label">Check-in Date *</label>
                  <input
                    type="date"
                    className={`form-input ${errors.checkIn ? "error" : ""}`}
                    min={today}
                    value={values.checkIn}
                    onChange={(e) => set("checkIn", e.target.value)}
                  />
                  {errors.checkIn && (
                    <span className="form-error">{errors.checkIn}</span>
                  )}
                </div>

                <div className="form-group">
                  <label className="form-label">Check-out Date *</label>
                  <input
                    type="date"
                    className={`form-input ${errors.checkOut ? "error" : ""}`}
                    min={values.checkIn || today}
                    value={values.checkOut}
                    onChange={(e) => set("checkOut", e.target.value)}
                  />
                  {errors.checkOut && (
                    <span className="form-error">{errors.checkOut}</span>
                  )}
                </div>

                <div className="form-group">
                  <label className="form-label">Adults</label>
                  <div className="accom__counter">
                    <button
                      type="button"
                      className="accom__counter-btn"
                      onClick={() =>
                        set("adults", Math.max(1, values.adults - 1))
                      }
                    >
                      −
                    </button>
                    <span className="accom__counter-val">{values.adults}</span>
                    <button
                      type="button"
                      className="accom__counter-btn"
                      onClick={() =>
                        set("adults", Math.min(10, values.adults + 1))
                      }
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Children (under 12)</label>
                  <div className="accom__counter">
                    <button
                      type="button"
                      className="accom__counter-btn"
                      onClick={() =>
                        set("children", Math.max(0, values.children - 1))
                      }
                    >
                      −
                    </button>
                    <span className="accom__counter-val">
                      {values.children}
                    </span>
                    <button
                      type="button"
                      className="accom__counter-btn"
                      onClick={() =>
                        set("children", Math.min(8, values.children + 1))
                      }
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    className={`form-input ${errors.phone ? "error" : ""}`}
                    placeholder="+254 700 000 000"
                    value={values.phone}
                    onChange={(e) => set("phone", e.target.value)}
                  />
                  {errors.phone && (
                    <span className="form-error">{errors.phone}</span>
                  )}
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    className={`form-input ${errors.email ? "error" : ""}`}
                    placeholder="your@email.com"
                    value={values.email}
                    onChange={(e) => set("email", e.target.value)}
                  />
                  {errors.email && (
                    <span className="form-error">{errors.email}</span>
                  )}
                </div>

                <div className="accom__form-actions accom__span-2">
                  <button
                    type="submit"
                    className="btn btn-gold accom__submit-btn"
                  >
                    <Send size={16} />
                    {loading ? "Sending..." : "Request Availability & Book"}
                  </button>
                  <p className="accom__form-note">
                    ✓ Free cancellation within 48 hours &nbsp;·&nbsp; ✓ Best
                    rate guarantee &nbsp;·&nbsp; ✓ Instant confirmation
                  </p>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
