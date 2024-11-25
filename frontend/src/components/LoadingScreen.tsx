import React, { useEffect } from 'react';

const LoadingScreen: React.FC = () => {
  useEffect(() => {
    // Set a timeout to hide the loading screen after 3 seconds
    const timer = setTimeout(() => {
      const loadingElement = document.getElementById('loading-screen');
      if (loadingElement) {
        loadingElement.style.opacity = '0';
        loadingElement.style.transition = 'opacity 1s ease';
      }
    }, 2000); // Adjust the time to match the animation duration

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <div id="loading-screen" style={styles.loadingScreen}>
      <div style={styles.spinner}></div>
      <p>Loading...</p>
    </div>
  );
};

const styles = {
  loadingScreen: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    zIndex: 1000,
    opacity: 1,
    transition: 'opacity 1s ease', // Ensure smooth fade-out
  },
  spinner: {
    border: '5px solid #f3f3f3', 
    borderTop: '5px solid #3498db',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    animation: 'spin 1s linear infinite',
  },
};

// Keyframes for the spinner animation
const keyframes = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export default LoadingScreen;
