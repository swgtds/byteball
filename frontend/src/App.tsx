import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import SportsSection from './components/SportsSection';
import LiveStreamPage from './pages/LiveStreamPage';
import StreamComingSoonPage from './pages/StreamComingSoonPage';
import Header from './components/Header';
import WatchVideoPage from './pages/WatchVideoPage';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
    const redirectTimer = setTimeout(() => {
      navigate('/');
    }, 3000);
    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, [navigate]);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404</h1>
      <p style={styles.message}>Page Not Found</p>
      <p style={styles.redirectMessage}>
        Redirecting to the home screen in {countdown}...
      </p>
    </div>
  );
};

const App: React.FC = () => {
  const [selectedSport, setSelectedSport] = useState('Cricket');

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<SportsSection sport={selectedSport} />} />
        <Route path="/live-streams" element={<LiveStreamPage />} />
        <Route path="/coming-soon" element={<StreamComingSoonPage />} />
        <Route path="/watch-video/:videoId" element={<WatchVideoPage />} />
        <Route path="/watch-video" element={<WatchVideoPage />} />

        {/* Fallback Route for Invalid URLs */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center' as const,
    marginTop: '50px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '5rem',
    color: '#ff4757',
  },
  message: {
    fontSize: '1.5rem',
    color: '#333',
  },
  logo: {
    marginTop: '20px',
    width: '100px', 
  },
  redirectMessage: {
    fontSize: '1rem',
    color: '#555',
    marginTop: '10px',
  },
};

export default App;
