import React, { useState, useEffect } from 'react';

const NoLiveStreamCard: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  // Function to calculate the time left until the match starts
  function calculateTimeLeft() {
    const matchStartTime = new Date("2024-12-14T05:40:00").getTime();
    const now = new Date().getTime();
    const difference = matchStartTime - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      return { days, hours, minutes, seconds };
    }
    return null; // Match has started or passed
  }

  return (
    <div style={styles.card}>
      <h3 style={styles.heading}>No Live Stream Available</h3>
      <p style={styles.text}>Next match: India vs Australia</p>
      <p style={{...styles.text, fontWeight: 'bold' }}>Border Gavaskar Trophy 2024</p>
      <p style={{...styles.text, fontWeight: 'bold' }}>SAT, 14 DEC | 3rd Test | The Gabba, Brisbane</p>
      <div style={styles.thumbnailContainer}>
        <img
          src="/images/ind-vs-aus.jpg"
          alt="India vs Australia Match Thumbnail"
          style={styles.thumbnail}
        />
      </div>
      {timeLeft ? (
        <div style={styles.countdown}>
          <p style={styles.text}>
            Starts in: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
            {timeLeft.seconds}s
          </p>
        </div>
      ) : (
        <p style={styles.text}>Match has started! Check back soon for live updates.</p>
      )}
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    padding: '20px',
    margin: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
    background: 'linear-gradient(to right, #8BC6EC, #9599E2)', 
    textAlign: 'center' as const,
  },
  heading: {
    color: '#5D4037',
    fontSize: '1.5rem',
    marginBottom: '10px',
  },
  text: {
    color: '#424242',
    fontSize: '1rem',
    
  },
  thumbnailContainer: {
    marginTop: '15px',
    display: 'flex',
    justifyContent: 'center',
  },
  thumbnail: {
    width: '300px',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
  },
  countdown: {
    marginTop: '10px',
    fontSize: '1rem',
    color: '#5D4037',
  },
};

export default NoLiveStreamCard;
