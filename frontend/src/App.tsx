// src/App.tsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SportsSection from './components/SportsSection';

const App: React.FC = () => {
  const [selectedSport, setSelectedSport] = useState('Cricket');

  return (
    <div>
      <Navbar />
      <SportsSection sport={selectedSport} />
    </div>
  );
};

export default App;

