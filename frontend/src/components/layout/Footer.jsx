import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { NAV_LINKS, CONTACT_INFO } from "../../data/siteData";
import "./Footer.css";

export default function Footer({ onBookNow }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 80,
        behavior: "smooth",
      });
    }
  };

  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-icon">✦</span>
              <div>
                <div className="footer__logo-main">Utopia</div>
                <div className="footer__logo-sub">Resort Ruiru</div>
              </div>
            </div>
            <p className="footer__tagline">
              Where luxury meets nature — an immersive hospitality experience
              crafted for moments that last a lifetime.
            </p>
            <div className="footer__socials">
              <button
                onClick={() =>
                  window.open(CONTACT_INFO.socials.instagram, "_blank")
                }
                className="footer__social"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </button>

              <button
                onClick={() =>
                  window.open(CONTACT_INFO.socials.facebook, "_blank")
                }
                className="footer__social"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </button>

              <button
                onClick={() =>
                  window.open(CONTACT_INFO.socials.whatsapp, "_blank")
                }
                className="footer__social"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={18} />
              </button>

              <button
                onClick={() =>
                  window.open(CONTACT_INFO.socials.tiktok, "_blank")
                }
                className="footer__social"
                aria-label="TikTok"
              >
                <FaTiktok size={18} />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h4 className="footer__col-title">Quick Links</h4>
            <ul className="footer__nav">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    className="footer__nav-link"
                    onClick={() => scrollTo(link.id)}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer__col">
            <h4 className="footer__col-title">Services</h4>
            <ul className="footer__nav">
              {[
                "Luxury Accommodation",
                "Fine Dining",
                "Wedding Packages",
                "Corporate Events",
                "Garden Hire",
                "Activities & Games",
                "Virtual Tours",
                "Bonfire Evenings",
              ].map((s) => (
                <li key={s}>
                  <span className="footer__nav-link footer__nav-text">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h4 className="footer__col-title">Get in Touch</h4>
            <div className="footer__contact">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="footer__contact-item"
              >
                <Phone size={15} />
                <span>{CONTACT_INFO.phone}</span>
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="footer__contact-item"
              >
                <Mail size={15} />
                <span>{CONTACT_INFO.email}</span>
              </a>
              <div className="footer__contact-item">
                <MapPin size={15} />
                <span>{CONTACT_INFO.address}</span>
              </div>
            </div>
            <button className="btn btn-gold footer__cta" onClick={onBookNow}>
              Book Now
            </button>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copy">
            © {year} Utopia Resort Ruiru. All rights reserved.
          </p>
          <div className="footer__legal">
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms & Conditions</span>
            <span>•</span>
          <button
  onClick={() =>
    window.open(
      "https://wa.me/254794400999?text=Hello%2C%20I%20hope%20you%27re%20doing%20well.%20I%20would%20like%20some%20assistance%20with%20a%20project.%20Please%20let%20me%20know%20when%20you%20are%20available.%20Thank%20you!",
      "_blank"
    )
  }
  className="footer__credit"
>
  Designed By <strong>CODE WITH FRED</strong>
</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
