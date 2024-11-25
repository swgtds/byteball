// src/components/SportsSection.tsx
import React from 'react';
import LiveStreamCard from './LiveStreamCard';

const SportsSection: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Cricket Hub</h1>
      <section style={styles.section}>
        <h2>Live Streaming</h2>
        <LiveStreamCard title={
          <div style={styles.liveTitleContainer}>
            <span>
              India vs Australia (BGT) <br /> Test 1 Day 3
            </span>
            <div style={styles.liveBadge}>
              <img
                src="/images/live-icon.png" // Add a 'live' icon image to represent live status
                alt="Live Icon"
                style={styles.liveIcon}
              />
              <span style={styles.liveText}>Live</span>
            </div>
          </div>
        } redirectTo="/videos/stream-ended.html">

          <div style={styles.thumbnailContainer}>
            <img
              src="/images/ind-vs-aus.jpg" // Path to the cricket thumbnail image
              alt="India vs Australia Match"
              style={styles.thumbnail}
            />
          </div>
        </LiveStreamCard>
      </section>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2em',
    margin: '10px 0',
  },
  section: {
    margin: '20px 0',
  },
  liveTitleContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  liveBadge: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '10px',
  },
  liveIcon: {
    width: '20px',
    height: '20px',
    marginRight: '5px',
  },
  liveText: {
    fontSize: '1.2em',
    color: 'red', // Red color for 'Live'
    fontWeight: 'bold',
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
