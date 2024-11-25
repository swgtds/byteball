import React, { useState, useEffect } from 'react';
import LiveStreamCard from './LiveStreamCard';
import NoLiveStreamCard from './NoLiveStreamCard';
import HighlightsCard from './HighlightsCard';

const SportsSection: React.FC = () => {
  const [hasLiveStream, setHasLiveStream] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const startTime = new Date("2024-12-06T09:00:00");
  const endTime = new Date("2024-12-10T18:00:00");

  const highlights = [
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
      videoUrl: 'https://youtu.be/jek9RyKqmlE?si=D9D-CwZqtXwGw1DE',
      thumbnail: 'https://i.ytimg.com/vi/jek9RyKqmlE/maxresdefault.jpg',
    },
    {
      day: 'Day 4',
      videoUrl: 'https://youtu.be/aXhDkAhgoCM?si=a5zi4khwbHkghs4_',
      thumbnail: 'https://i.ytimg.com/vi/aXhDkAhgoCM/maxresdefault.jpg',
    },
  ];

  useEffect(() => {
    const checkLiveStreamStatus = () => {
      const now = new Date();
      if (now >= startTime && now <= endTime) {
        setHasLiveStream(true);
      } else {
        setHasLiveStream(false);
      }
    };

    checkLiveStreamStatus();
    const interval = setInterval(checkLiveStreamStatus, 1000);

    return () => clearInterval(interval);
  }, [startTime, endTime]);

  const handleArrowClick = (direction: 'left' | 'right') => {
    setCurrentIndex((prevIndex) => {
      if (direction === 'left') {
        return prevIndex === 0 ? highlights.length - 1 : prevIndex - 1;
      } else {
        return prevIndex === highlights.length - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Cricket Hub</h1>

      <section style={styles.section}>
        <h2>Live Streaming</h2>
        {hasLiveStream ? (
          <LiveStreamCard
            title="India vs Australia (BGT) Test 1 Day 3"
            redirectTo="/border-gavaskar-trophy-2024"
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

      <section style={styles.highlightsSection}>
      <h2>Match Highlights</h2>
        <HighlightsCard
          highlights={highlights}
          currentIndex={currentIndex}
          onArrowClick={handleArrowClick}
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
    fontSize: '2em',
    margin: '10px 0',
  },
  section: {
    margin: '20px 0',
  },
  highlightsSection: {
    marginTop: '30px',
    padding: '20px',
  },
};

export default SportsSection;
