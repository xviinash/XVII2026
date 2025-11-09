import React from "react";
import { FaBehance, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";


export default function SocialIcons() {
  const socials = [
    { icon: <FaBehance />, url: "https://www.behance.net/xviinash" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/xviinash" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/philippe-chevalier-711810215/" },
    { icon: <FaYoutube />, url: "https://www.youtube.com/xviinash" },
  ];

  return (
<div className="social-icons">
  {socials.map((social, i) => (
    <a
      key={i}
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {social.icon}
    </a>
  ))}
</div>

  );
}
