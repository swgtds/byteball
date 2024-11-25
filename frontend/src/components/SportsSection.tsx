// src/components/SportsSectionCard.tsx
import React, { useState, useEffect } from 'react';
import LiveStreamCard from './LiveStreamCard';
import NoLiveStreamCard from './NoLiveStreamCard';

const SportsSection: React.FC = () => {
  const [hasLiveStream, setHasLiveStream] = useState(false);

  // Define the live stream time range
  const startTime = new Date("2024-12-06T09:00:00");
  const endTime = new Date("2024-12-11T23:00:00");

  useEffect(() => {
    const checkLiveStreamStatus = () => {
      const now = new Date();
      if (now >= startTime && now <= endTime) {
        setHasLiveStream(true);
      } else {
        setHasLiveStream(false);
      }
    };

    // Check immediately and set interval for live updates
    checkLiveStreamStatus();
    const interval = setInterval(checkLiveStreamStatus, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [startTime, endTime]);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Cricket Hub</h1>
      <section style={styles.section}>
        <h2>Live Streaming</h2>
        {hasLiveStream ? (
          <LiveStreamCard 
            title="India vs Australia (BGT) Test 1 Day 3" 
            redirectTo="/border-gavaskar-trophy-2024" // Updated redirect to the new route
            startTime={startTime.toISOString()} 
            endTime={endTime.toISOString()}
          >
            <div style={styles.thumbnailContainer}>
              <img
                src="/images/ind-vs-aus.jpg"
                alt="India vs Australia Match"
                style={styles.thumbnail}
              />
            </div>
          </LiveStreamCard>
        ) : (
          <NoLiveStreamCard />
        )}
      </section>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center' as const,
  },
  heading: {
    fontSize: '2em',
    margin: '10px 0',
  },
  section: {
    margin: '20px 0',
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
};

export default SportsSection;
