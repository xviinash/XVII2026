import React from "react";
import SocialIcons from "./SocialIcons";

const VideoWall = () => {
  return (
    <section className="video-wall">
      <video src="/videos/vid3.mp4" autoPlay loop muted playsInline />
      <video src="/videos/vid2.mp4" autoPlay loop muted playsInline />
      <video src="/videos/vid1.mp4" autoPlay loop muted playsInline />
    <div className="video-overlay">
        <div className="overlay-text">
        <img src="/images/icon.svg" alt="Logo XVIINASH" className="overlay-logo" />
        <h1>XVIINASH</h1>
        <p>DIGITAL DESIGNER BASED IN PARIS</p>
        <SocialIcons />
        </div>
      </div>
    </section>
  );
};

export default VideoWall;