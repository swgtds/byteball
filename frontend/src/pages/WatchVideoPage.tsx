import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const WatchVideoPage: React.FC = () => {
  const { videoId } = useParams<{ videoId: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!videoId) {
      navigate('/'); 
    }
  }, [videoId, navigate]);

  if (!videoId) {
    return null;
  }

  return (
    <div style={styles.pageContainer}>
      <h2>Watch Video</h2>
      <div style={styles.videoContainer}>
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={styles.videoIframe}
        ></iframe>
      </div>

      <button onClick={() => navigate('/')} style={styles.backButton}>
        Back to Home
      </button>
    </div>
  );
};

const styles = {
  pageContainer: {
    width: '80%',
    margin: '0 auto',
    textAlign: 'center',
    padding: '20px',
  },
  videoContainer: {
    width: '80%',
    height: '500px',
    margin: '0 auto',
    border: '1px solid #ddd',
    borderRadius: '10px',
  },
  videoIframe: {
    width: '100%',
    height: '100%',
    borderRadius: '8px',
  },
  backButton: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '1.2rem',
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default WatchVideoPage;
