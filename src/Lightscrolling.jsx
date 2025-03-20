import React, { useState, useEffect } from "react";

const LightStreakBackground = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const streakPosition = `${scrollY * 0.5}px`; // Adjust speed if needed

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Light Streak */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background: `linear-gradient(to right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.1))`,
          backgroundSize: "100% 300px",
          backgroundPosition: `center ${streakPosition}`, // Moves vertically
          mixBlendMode: "overlay", // Optional for blending
          opacity: 0.7,
          zIndex: -1,
        }}
      />

      {/* Actual Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default LightStreakBackground;
