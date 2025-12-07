import React from "react";
import SocialIcons from "./SocialIcons";

const VideoWall = () => {
  return (
    <section className="video-wall">

      {/* VIDEO DESKTOP 16:9 */}
      <video
        className="video-desktop"
        src="/videos/showreel-16-9.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* VIDEO MOBILE 9:16 */}
      <video
        className="video-mobile"
        src="/videos/showreel-9-16.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* OVERLAY */}
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
