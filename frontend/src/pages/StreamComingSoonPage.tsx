// src/pages/StreamComingSoonPage.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const StreamComingSoonPage: React.FC = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState<string>('');
  
  const streamStartTime = new Date("2024-12-14T05:40:00");

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      const now = new Date();
      const timeDiff = streamStartTime.getTime() - now.getTime();

      if (timeDiff <= 0) {
        clearInterval(countdownInterval);  // Stop countdown when the time is up
        navigate('/border-gavaskar-trophy-2024');  // Redirect to the live stream page once started
      } else {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(countdownInterval);
  }, [streamStartTime, navigate]);

  return (
    <div style={styles.container}>
      <h1>Stream Starts Soon</h1>
      <p>Stream starts in: {timeLeft}</p>
      <button onClick={() => navigate('/')} style={styles.button}>
        Go Back to Home
      </button>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center' as const,
  },
  button: {
    padding: '10px 20px',
    marginTop: '20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#000000',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
  },
};

export default StreamComingSoonPage;
