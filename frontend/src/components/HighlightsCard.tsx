import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

interface Highlight {
  day: string;
  videoUrl: string;
  thumbnail: string;
}

interface HighlightsCardProps {
  highlights: Highlight[];
  currentIndex: number;
  onArrowClick: (direction: 'left' | 'right') => void;
  setCurrentTest: React.Dispatch<React.SetStateAction<string>>;  
  currentTest: string;  
}

const HighlightsCard: React.FC<HighlightsCardProps> = ({ highlights, currentIndex, onArrowClick, setCurrentTest, currentTest }) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);  
  const navigate = useNavigate(); 

  // Function to extract the video ID from the YouTube URL
  const getVideoId = (url: string) => {
    const regExp = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/([^"&?/\s]{11}))|youtu\.be\/([^"&?/\s]{11}))/;
    const match = url.match(regExp);
    return match && (match[1] || match[2]);
  };


  const handleThumbnailClick = () => {
    const videoId = getVideoId(highlights[currentIndex].videoUrl);
    navigate(`/watch-video/${videoId}`); 
  };

  return (
    <div style={styles.card}>
      <div style={styles.testToggle}>
        <button
          onClick={() => setCurrentTest('Test 1')}
          style={{
            ...styles.toggleButton,
            ...(currentTest === 'Test 1' && styles.activeButton),
          }}
        >
          Test 1
        </button>
        <button
          onClick={() => setCurrentTest('Test 2')}
          style={{
            ...styles.toggleButton,
            ...(currentTest === 'Test 2' && styles.activeButton),
          }}
        >
          Test 2
        </button>
      </div>

      <h2>{currentTest} Highlights</h2>

      <div style={styles.sliderContainer}>
        <div
          style={styles.testDayThumbnail}
          onClick={handleThumbnailClick} 
        >
          <img
            src={highlights[currentIndex].thumbnail}
            alt={`${highlights[currentIndex].day} Highlights`}
            style={styles.thumbnail}
          />
        </div>
      </div>

      
      <div style={styles.navigationContainer}>
        <button style={styles.arrowButton} onClick={() => onArrowClick('left')}>
          ←
        </button>
        <p style={styles.dayNumber}>{highlights[currentIndex].day}</p>
        <button style={styles.arrowButton} onClick={() => onArrowClick('right')}>
          →
        </button>
      </div>

      <button
        onClick={handleThumbnailClick} 
        style={styles.watchButton}
      >
        Watch Now
      </button>
      {isVideoModalOpen && (
        <div style={styles.modalOverlay} onClick={() => setIsVideoModalOpen(false)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button style={styles.closeButton} onClick={() => setIsVideoModalOpen(false)}>X</button>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${getVideoId(highlights[currentIndex].videoUrl)}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={styles.videoIframe}
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  card: {
    width: '90%',
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center' as const,
    position: 'relative' as const,
    background: 'linear-gradient(to right, #8BC6EC, #9599E2)',
  },
  sliderContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflowX: 'hidden' as const,
    width: '100%',
    paddingBottom: '20px',
  },
  testDayThumbnail: {
    flexShrink: 0 as const,
    textAlign: 'center' as const,
    margin: '0 10px',
    cursor: 'pointer' as const,
    width: '250px',
  },
  thumbnail: {
    width: '100%',
    height: 'auto' as const,
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
  },
  navigationContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px', 
    marginTop: '10px',
  },
  dayNumber: {
    fontSize: '1.5rem',
    fontWeight: 'bold' as const,
    margin: 0,
    color: '#333',
  },
  arrowButton: {
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '2rem',
    cursor: 'pointer' as const,
    padding: '10px',
  },
  watchButton: {
    display: 'inline-block',
    marginTop: '10px',
    padding: '10px 15px',
    backgroundColor: '#000000',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    border: 'none',
    transition: 'background-color 0.3s',
  },
  testToggle: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
    gap: '10px',
  },
  toggleButton: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#ccc',
    border: 'none',
    borderRadius: '5px',
  },
  activeButton: {
    backgroundColor: '#000000', 
    color: 'white',
  },
  modalOverlay: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modalContent: {
    position: 'relative',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '80%',
    maxHeight: '80%',
    overflow: 'auto',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    padding: '10px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  videoIframe: {
    width: '100%',
    height: '315px',
    borderRadius: '8px',
  },
};

export default HighlightsCard;
