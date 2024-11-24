// src/components/LiveStreamCard.tsx
import React, { useState } from 'react';

const LiveStreamCard: React.FC<{ title: string; children?: React.ReactNode; redirectTo?: string }> = ({ title, children, redirectTo }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Function to handle redirection on thumbnail click
  const handleThumbnailClick = () => {
    if (redirectTo) {
      window.location.href = redirectTo;
    }
  };

  return (
    <div style={styles.card}>
      <h3>{title}</h3>
      {/* Render the thumbnail image or other children passed */}
      <div
        style={{
          ...styles.thumbnailContainer,
          ...(isHovered ? styles.thumbnailHover : {}),
        }}
        onClick={handleThumbnailClick} // Click handler for redirection
      >
        {children}
      </div>
      <button style={styles.button} onClick={() => window.location.href = redirectTo}>Watch Now</button>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    padding: '10px',
    margin: '10px',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
    background: 'linear-gradient(to right, #ff9a8b, #ffb67c)', // Lighter gradient for LiveStreamCard
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007BFF',
    color: 'white',
    padding: '5px 10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '15px',
  },
  thumbnailContainer: {
    marginTop: '15px',
    display: 'flex',
    justifyContent: 'center',
    cursor: 'pointer', // Indicates the thumbnail is clickable
    transition: 'all 0.3s ease-in-out',
  },
  thumbnail: {
    width: '300px',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  thumbnailHover: {
    transform: 'scale(1.05)', // Slightly scale the image
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // Enhance the shadow on hover
  },
};

export default LiveStreamCard;
