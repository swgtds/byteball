import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import SportsSection from './components/SportsSection';
import BorderGavaskarTrophyPage from './pages/BorderGavaskarTrophyPage';
import StreamComingSoonPage from './pages/StreamComingSoonPage';
import LoadingScreen from './components/LoadingScreen';  // Import the loading screen component
import Footer from './components/Footer'; // Import the Footer component

const App: React.FC = () => {
  const [selectedSport, setSelectedSport] = useState('Cricket');
  const [loading, setLoading] = useState(true);

  // Hide the loading screen after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 3 seconds
    }, 3000);  // Match this with the duration of your loading screen

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  return (
    <div>
      {loading && <LoadingScreen />} {/* Show LoadingScreen while loading is true */}
      
      {!loading && (
        <>
          <Routes>
            <Route path="/" element={<SportsSection sport={selectedSport} />} />
            <Route
              path="/border-gavaskar-trophy-2024"
              element={<BorderGavaskarTrophyPage />}
            />
            <Route path="/coming-soon" element={<StreamComingSoonPage />} />
          </Routes>

          {/* Footer will be shown after the main content */}
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
