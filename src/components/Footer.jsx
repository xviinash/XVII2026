import React from "react";
import { FaBehance, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const socials = [
    { icon: <FaBehance />, url: "https://www.behance.net/xviinash" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/xviinash" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/philippe-chevalier-711810215/" },
    { icon: <FaYoutube />, url: "https://www.youtube.com/xviinash" },
  ];

  return (
    <footer className="footer">
      <div className="footer-left">
        {socials.map((social, i) => (
          <a
            key={i}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            {social.icon}
          </a>
        ))}
      </div>

      <div className="footer-center">
        <a href="mailto:hello@xviinash.com" className="footer-email">
          hello@xviinash.com
        </a>
      </div>

      <div className="footer-right">
        <p>© XVIINASH, 2025</p>
      </div>
    </footer>
  );
}
