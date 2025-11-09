import React, { useEffect, useRef, useState } from "react";

export default function VideoOverlay({ videos }) {
  const overlayRef = useRef();
  const [color, setColor] = useState("#fff");

  useEffect(() => {
    const interval = setInterval(() => {
      // On prend la vidéo principale pour l'exemple
      const video = videos.current[0]; 
      if (!video) return;

      // Création d'un canvas temporaire pour lire une frame
      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext("2d");

      try {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = frame.data;

        // calcul de la luminance moyenne de la frame
        let total = 0;
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          total += 0.299 * r + 0.587 * g + 0.114 * b;
        }
        const avg = total / (data.length / 4);

        // si clair → texte noir, si sombre → texte blanc
        setColor(avg > 128 ? "#000" : "#fff");
      } catch (err) {
        // catch pour les vidéos cross-origin
        // si c'est cross-origin, on ne peut pas lire les pixels
      }
    }, 100); // toutes les 0.1s

    return () => clearInterval(interval);
  }, [videos]);

  return (
    <div
      ref={overlayRef}
      style={{
        position: "absolute",
        bottom: "10%",
        left: "50%",
        transform: "translateX(-50%)",
        color: color,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "'Gambarino', serif",
        zIndex: 10,
        transition: "color 0.2s ease"
      }}
    >
      <h1>XVIINASH</h1>
      <p>Digital designer based in Paris</p>

    </div>
  );
}
