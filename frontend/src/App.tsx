import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import SportsSection from './components/SportsSection';
import BorderGavaskarTrophyPage from './pages/BorderGavaskarTrophyPage';
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
        <Route path="/border-gavaskar-trophy-2024" element={<BorderGavaskarTrophyPage />}/>
        <Route path="/coming-soon" element={<StreamComingSoonPage />} />
        <Route path="/watch-video/:videoId" element={<WatchVideoPage />} />
        <Route path="/watch-video" element={<WatchVideoPage />} />
      </Routes>
    </div>
  );
};

export default App;
