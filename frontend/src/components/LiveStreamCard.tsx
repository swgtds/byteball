import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LiveStreamCard: React.FC<{
  title: string;
  redirectTo?: string;
  startTime: string;
  endTime: string;
  imageUrl: string;
}> = ({ title, redirectTo, startTime, endTime, imageUrl }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLive, setIsLive] = useState(false);
  const [testNumber, setTestNumber] = useState(2); 
  const [dayNumber, setDayNumber] = useState(1); 
  const navigate = useNavigate();

  useEffect(() => {
    const start = new Date(startTime);
    const end = new Date(endTime);

    const updateTestAndDayNumbers = () => {
      const now = new Date();

      const totalDaysSinceStart = Math.floor((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
      
      const newTestNumber = 2 + Math.floor(totalDaysSinceStart / 5);

      const newDayNumber = (totalDaysSinceStart % 5) + 1;

      setTestNumber(newTestNumber);
      setDayNumber(newDayNumber);
    };

    const checkLiveStatus = () => {
      const now = new Date();
      setIsLive(now >= start && now <= end);
      updateTestAndDayNumbers();
    };

    checkLiveStatus();
    const interval = setInterval(checkLiveStatus, 1000);

    return () => clearInterval(interval);
  }, [startTime, endTime]);

  const handleThumbnailClick = () => {
    if (redirectTo) {
      navigate(redirectTo); 
    }
  };

  return (
    <div style={styles.card}>
      <h3 style={styles.title}>
        {title} 
        <br/>
        <span style={styles.dynamicText}>Test {testNumber} Day {dayNumber}</span>
      </h3>
      {isLive ? (
        <>
          <div
            style={{
              ...styles.thumbnailContainer,
              ...(isHovered ? styles.thumbnailHover : {}),
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleThumbnailClick}
          >
            <img src={imageUrl} alt={title} style={styles.thumbnail} />
          </div>
          <button
            onClick={handleThumbnailClick}
            style={styles.button}
          >
            Watch Now
          </button>
        </>
      ) : (
        <p style={styles.notLive}>Stream Not Available</p>
      )}
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
    background: 'linear-gradient(to right, #8BC6EC, #9599E2)',
    textAlign: 'center',
    overflow: 'hidden',
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '15px',
  },
  dynamicText: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#000000',
    marginLeft: '10px',
  },
  button: {
    display: 'inline-block',
    padding: '10px 15px',
    backgroundColor: '#000000',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    marginTop: '15px',
    border: 'none',
    cursor: 'pointer',
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
  notLive: {
    fontSize: '16px',
    color: '#555',
  },
};

export default LiveStreamCard;
