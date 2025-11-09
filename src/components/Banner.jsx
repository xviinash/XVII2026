import React, { useEffect, useRef, useState } from "react";
import pinkIcon from "/images/pink-icon.svg"; // chemin vers ton icône

const Banner = ({ items }) => {
  const trackRef = useRef();
  const [cloneCount, setCloneCount] = useState(1);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const trackWidth = track.scrollWidth;
    const containerWidth = track.parentElement.offsetWidth;

    // Combien de fois on doit dupliquer pour remplir la largeur ?
    const minClones = Math.ceil(containerWidth / trackWidth) + 2;
    setCloneCount(minClones);
  }, [items]);

  return (
    <section className="banner">
      <div className="banner-track" ref={trackRef}>
        {Array.from({ length: cloneCount }).map((_, idx) =>
          items.map((item, i) => (
            <span key={`${idx}-${i}`} className="banner-item">
              <span className="banner-icon">
                <img src={pinkIcon} alt="" />
              </span>
              <span className="banner-text">{item.text}</span>
            </span>
          ))
        )}
      </div>
    </section>
  );
};

export default Banner;
