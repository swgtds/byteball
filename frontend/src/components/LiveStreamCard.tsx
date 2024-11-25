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
      <h3 style={styles.title}>{title}</h3>
      <div
        style={{
          ...styles.thumbnailContainer,
          ...(isHovered ? styles.thumbnailHover : {}),
        }}
        onClick={handleThumbnailClick} 
      >
        {children}
      </div>
      <a href={redirectTo} target="_blank" rel="noopener noreferrer" style={styles.button}>Watch Now</a>
    </div>
  );
};

const styles = {
  card: {
    width: '90%',  
    maxWidth: '350px',  
    padding: '15px',
    margin: '10px auto',  
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    background: 'linear-gradient(to right, #8BC6EC, #9599E2)', //change gradient  color
    textAlign: 'center',
    overflow: 'hidden',
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '15px',
  },
  button: {
    display: 'inline-block',
    padding: '10px 15px',
    backgroundColor: '#007BFF',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    marginTop: '15px',
  },
  thumbnailContainer: {
    marginTop: '15px',
    display: 'flex',
    justifyContent: 'center',
    cursor: 'pointer', 
    transition: 'all 0.3s ease-in-out',
    maxWidth: '100%',
    overflow: 'hidden',
  },
  thumbnail: {
    width: '100%',  
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  thumbnailHover: {
    transform: 'scale(1.05)', 
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', 
  },
  '@media screen and (max-width: 768px)': {
    card: {
      maxWidth: '100%',  
      padding: '10px',   
    },
    title: {
      fontSize: '16px',  
    },
    button: {
      fontSize: '14px',  
    },
  },
};

export default LiveStreamCard;
