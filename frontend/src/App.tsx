import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import SportsSection from './components/SportsSection';
import LiveStreamPage from './pages/LiveStreamPage';
import StreamComingSoonPage from './pages/StreamComingSoonPage';
import Header from './components/Header';
import WatchVideoPage from './pages/WatchVideoPage';
const App: React.FC = () => {
  const [selectedSport, setSelectedSport] = useState('Cricket');

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<SportsSection sport={selectedSport} />} />
        <Route path="/live-streams" element={<LiveStreamPage />}/>
        <Route path="/coming-soon" element={<StreamComingSoonPage />} />
        <Route path="/watch-video/:videoId" element={<WatchVideoPage />} />
        <Route path="/watch-video" element={<WatchVideoPage />} />
      </Routes>
    </div>
  );
};

export default App;
