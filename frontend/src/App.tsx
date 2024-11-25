// src/App.tsx
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SportsSection from './components/SportsSection';
import BorderGavaskarTrophyPage from './pages/BorderGavaskarTrophyPage'; // Your page component
import StreamComingSoonPage from './pages/StreamComingSoonPage';  // The new page

const App: React.FC = () => {
  const [selectedSport, setSelectedSport] = useState('Cricket');

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<SportsSection sport={selectedSport} />} />
        <Route path="/border-gavaskar-trophy-2024" element={<BorderGavaskarTrophyPage />} />
        <Route path="/coming-soon" element={<StreamComingSoonPage />} />
        {/* Other routes can be added here */}
      </Routes>
    </div>
  );
};

export default App;
