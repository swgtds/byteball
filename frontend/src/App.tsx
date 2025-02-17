import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import SportsSection from './components/SportsSection';
import LiveStreamPage from './pages/LiveStreamPage';
import StreamComingSoonPage from './pages/StreamComingSoonPage';
import Header from './components/Header';
import WatchVideoPage from './pages/WatchVideoPage';
import RedirectBanner from './components/RedirectBanner'; // Import RedirectBanner

const NotFoundPage: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404</h1>
      <p style={styles.message}>Page Not Found</p>
    </div>
  );
};

const App: React.FC = () => {
  const [selectedSport, setSelectedSport] = useState('Cricket');

  return (
    <div>
      <RedirectBanner /> {/* Ensure this is included */}
      <Header />
      <Routes>
        <Route path="/" element={<SportsSection sport={selectedSport} />} />
        <Route path="/live-streams" element={<LiveStreamPage />} />
        <Route path="/coming-soon" element={<StreamComingSoonPage />} />
        <Route path="/watch-video/:videoId" element={<WatchVideoPage />} />
        <Route path="/watch-video" element={<WatchVideoPage />} />
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
};

export default App;
