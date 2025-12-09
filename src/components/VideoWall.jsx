import React, { useEffect, useRef } from "react";
import SocialIcons from "./SocialIcons";

const VideoWall = () => {
  // Références pour forcer la lecture sur mobile/Safari
  const desktopVideoRef = useRef(null);
  const mobileVideoRef = useRef(null);

  useEffect(() => {
    const playVideo = (videoRef) => {
      if (videoRef.current) {
        // On force le mode muet pour que le navigateur autorise l'autoplay
        videoRef.current.muted = true;
        videoRef.current.play().catch((error) => {
          console.log("Autoplay bloqué par le navigateur :", error);
        });
      }
    };

    playVideo(desktopVideoRef);
    playVideo(mobileVideoRef);
  }, []);

  return (
    <section className="video-wall">
      
      {/* VIDEO DESKTOP 16:9 */}
      <video
        ref={desktopVideoRef}
        className="video-desktop"
        src="/videos/showreel-16-9.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* VIDEO MOBILE 9:16 */}
      <video
        ref={mobileVideoRef}
        className="video-mobile"
        src="/videos/showreel-9-16.mp4"
        autoPlay
        loop
        muted
        playsInline
        type="video/mp4" // Aide iOS à comprendre le format
      />

      {/* 🔥 NOUVEAU : EMAIL EN HAUT 🔥 */}
      <a href="mailto:hello@xviinash.com" className="video-top-email">
        hello@xviinash.com
      </a>

      {/* OVERLAY DU BAS */}
      <div className="video-overlay">
        <div className="overlay-text">
          <img src="/images/icon.svg" alt="Logo XVIINASH" className="overlay-logo" />
          <h1>XVIINASH</h1>
          <p>VISUAL DESIGNER BASED IN PARIS</p>
          <SocialIcons />
        </div>
      </div>

    </section>
  );
};

export default VideoWall;