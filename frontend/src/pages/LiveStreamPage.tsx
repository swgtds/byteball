import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LiveStreamPage: React.FC = () => {
  const navigate = useNavigate();
  const [isStreamLive, setIsStreamLive] = useState(false);

  const streamStartDate = new Date('2024-12-26T04:30:00');
  const streamEndDate = new Date('2024-12-30T13:00:00');
  
  useEffect(() => {
    const currentDate = new Date();

    
    if (currentDate < streamStartDate || currentDate > streamEndDate) {
      navigate('/coming-soon');
    } else {
      setIsStreamLive(true);
    }
  }, [navigate]);

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div style={styles.container}>
      {isStreamLive ? (
        <>
          <h1>Border Gavaskar Trophy 2024</h1>
          <div style={styles.videoContainer}>
            <iframe
              //src="/videos/border-gavaskar-trophy-2024.html"
              src="/videos/astro-cricket.html"
              //src="/videos/tnt1.html"
              width="100%"
              height="600px"
              title="BGT 2024"
            />
          </div>
          <button onClick={handleBackToHome} style={styles.backButton}>
            Back to Home
          </button>
        </>
      ) : (
        <div style={styles.comingSoonMessage}>
          <h2>The stream will start soon. Please check back later!</h2>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center' as const,
  },
  videoContainer: {
    marginTop: '20px',
  },
  comingSoonMessage: {
    marginTop: '50px',
    fontSize: '20px',
    fontWeight: 'bold',
    color: 'gray',
  },
  backButton: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#000000',
    color: '#FFF',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
  },
};

export default LiveStreamPage;
