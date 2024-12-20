import React, { useState, useEffect } from 'react';
import LiveStreamCard from './LiveStreamCard';
import NoLiveStreamCard from './NoLiveStreamCard';
import HighlightsCard from './HighlightsCard';

const SportsSection: React.FC = () => {
  const [hasLiveStream, setHasLiveStream] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTest, setCurrentTest] = useState('Test 1');

  const startTime = new Date("2024-12-26T04:30:00");
  const endTime = new Date("2024-12-30T13:00:00");

  const highlights = {
    'Test 1': [
      {
        day: 'Day 1',
        videoUrl: 'https://youtu.be/pmxfvy3SImg?si=zz17uX79yxlHBjP7',
        thumbnail: 'https://i.ytimg.com/vi/pmxfvy3SImg/maxresdefault.jpg',
      },
      {
        day: 'Day 2',
        videoUrl: 'https://youtu.be/4W9YskwfTXE?si=HjGjLLb6QZIxaWI5',
        thumbnail: 'https://i.ytimg.com/vi/4W9YskwfTXE/maxresdefault.jpg',
      },
      {
        day: 'Day 3',
        videoUrl: 'https://youtu.be/jek9RyKqmlE?si=ZzWew9Qb3_TMLR3I',
        thumbnail: 'https://i.ytimg.com/vi/jek9RyKqmlE/maxresdefault.jpg',
      },
      {
        day: 'Day 4',
        videoUrl: 'https://youtu.be/aXhDkAhgoCM?si=dKEkehYh8UHO3ErG',
        thumbnail: 'https://i.ytimg.com/vi/aXhDkAhgoCM/maxresdefault.jpg',
      },
    ],
    'Test 2': [
      {
        day: 'Day 1',
        videoUrl: 'https://youtu.be/xgiiwsJ7mOk?si=9iNxoDAyMcqj8L3e',
        thumbnail: 'https://i.ytimg.com/vi/xgiiwsJ7mOk/maxresdefault.jpg',
      },
      {
        day: 'Day 2',
        videoUrl: 'https://youtu.be/KYEPvfPqmdE?si=1vCtKnfOna2k7awH',
        thumbnail: 'https://i.ytimg.com/vi/KYEPvfPqmdE/maxresdefault.jpg',
      },
      {
        day: 'Day 3',
        videoUrl: 'https://youtu.be/qYmzdc-8238?si=um48YwOU5KMAqtlz',
        thumbnail: 'https://i.ytimg.com/vi/qYmzdc-8238/maxresdefault.jpg',
      },
    ],
    'Test 3': [
      {
        day: 'Day 1',
        videoUrl: 'https://youtu.be/ArA-0ktjrh8?si=6cV33IoAd43TQXhN',
        thumbnail: 'https://i.ytimg.com/vi/ArA-0ktjrh8/maxresdefault.jpg',
      },
    ],
  };

  useEffect(() => {
    const checkLiveStreamStatus = () => {
      const now = new Date();
      setHasLiveStream(now >= startTime && now <= endTime);
    };

    checkLiveStreamStatus();
    const interval = setInterval(checkLiveStreamStatus, 1000);

    return () => clearInterval(interval);
  }, [startTime, endTime]);

  const handleArrowClick = (direction: 'left' | 'right') => {
    const currentHighlights = highlights[currentTest];
    setCurrentIndex((prevIndex) =>
      direction === 'left'
        ? (prevIndex === 0 ? currentHighlights.length - 1 : prevIndex - 1)
        : (prevIndex === currentHighlights.length - 1 ? 0 : prevIndex + 1)
    );
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Cricket Hub</h1>

      {/* Live Streaming Section */}
      <section style={styles.section}>
        <h2 style={styles.subheading}>Live Streaming</h2>
        {hasLiveStream ? (
          <>
            <div style={styles.liveIndicator}>
              <span className="blinking" style={styles.liveText}>
                LIVE
              </span>
              <img
                src="/images/live-icon.png"
                alt="Live Logo"
                style={styles.liveLogo}
              />
            </div>
            <LiveStreamCard
              title="India vs Australia"
              redirectTo="/live-streams"
              startTime={startTime.toISOString()}
              endTime={endTime.toISOString()}
              imageUrl="/images/ind-vs-aus.jpg"
            />
          </>
        ) : (
          <NoLiveStreamCard />
        )}
      </section>

      {/* Highlights Section */}
      <section style={styles.highlightsSection}>
        <h2 style={styles.subheading}>Match Highlights</h2>
        <HighlightsCard
          highlights={highlights[currentTest]}
          currentIndex={currentIndex}
          onArrowClick={handleArrowClick}
          setCurrentTest={setCurrentTest}  
          currentTest={currentTest}         
        />
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
    fontSize: '2.5em',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333',
  },
  subheading: {
    fontSize: '1.5em',
    marginBottom: '10px',
    color: '#555',
  },
  section: {
    margin: '20px 0',
  },
  highlightsSection: {
    marginTop: '30px',
    padding: '20px',
  },
  liveIndicator: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10px',
  },
  liveText: {
    fontSize: '1.2em',
    fontWeight: 'bold',
    color: 'red',
  },
  liveLogo: {
    width: '24px',
    height: '24px',
    marginLeft: '10px',
  },
};

export default SportsSection;
