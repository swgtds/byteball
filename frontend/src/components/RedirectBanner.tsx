import { useEffect, useState } from "react";
import React from 'react';


const RedirectBanner: React.FC = () => {
  const [redirecting, setRedirecting] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const redirectUrl = "https://stumpvizz.vercel.app/";

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (redirecting) {
      timer = setTimeout(() => {
        window.location.href = redirectUrl;
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [redirecting]);

  const handleCancel = () => {
    setFadeOut(true); // Start fade-out animation
    setTimeout(() => setRedirecting(false), 500); // Hide after animation
  };

  if (!redirecting) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backdropFilter: "blur(10px)", // Apply blur effect
        backgroundColor: "rgba(255, 255, 255, 0.2)", // Light overlay
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        opacity: fadeOut ? 0 : 1, // Smooth fade-out
        transition: "opacity 0.5s ease-in-out",
        zIndex: 1000, // Ensure it's on top
      }}
    >
      <div
        style={{
          textAlign: "center",
          backgroundColor: "rgba(255, 255, 255, 0.8)", // Slightly opaque white background
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <p style={{ fontSize: "1.5rem", color: "black", fontWeight: "bold" }}>
          Byteball is now <strong>StumpVizz</strong>, redirecting...
        </p>
        <button
          onClick={handleCancel}
          style={{
            marginTop: "10px",
            background: "black",
            border: "none",
            color: "white",
            padding: "8px 20px",
            cursor: "pointer",
            borderRadius: "5px",
            fontSize: "1rem",
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default RedirectBanner;
