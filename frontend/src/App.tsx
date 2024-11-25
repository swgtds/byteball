// src/App.tsx
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';  // Use Routes and Route for routing
import Navbar from './components/Navbar';
import SportsSection from './components/SportsSection';
import BorderGavaskarTrophyPage from './pages/BorderGavaskarTrophyPage'; // Your page component

const App: React.FC = () => {
  const [selectedSport, setSelectedSport] = useState('Cricket');

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<SportsSection sport={selectedSport} />} />
        <Route path="/border-gavaskar-trophy-2024" element={<BorderGavaskarTrophyPage />} />
        {/* Other routes can be added here */}
      </Routes>
    </div>
  );
};

export default App;
