import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down, hide the header
        setIsVisible(false);
      } else {
        // Scrolling up, show the header
        setIsVisible(true);
      }
      lastScrollY = window.scrollY; // Update last scroll position
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ ...styles.header, opacity: isVisible ? 1 : 0 }}>
      <span style={styles.headerText}>
        Made with ❤️ by{' '}
        <a
          href="https://github.com/swgtds"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.githubLink}
        >
          swgtds
        </a>
      </span>
      <a
        href="https://github.com/swgtds"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.githubIconLink}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
          alt="GitHub"
          style={styles.githubIcon}
        />
      </a>
    </div>
  );
};

const styles = {
  header: {
    width: '100%',
    position: 'fixed', // Keep the header fixed at the top
    top: 0,
    left: 0,
    textAlign: 'center',
    fontSize: '18px',
    color: '#333',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', // Center elements horizontally
    gap: '8px', // Space between text and GitHub logo
    padding: '10px 0', // Add padding for better spacing
    backgroundColor: 'transparent', // Set transparent background
    zIndex: 1000, // Ensure it appears above other elements
    boxShadow: 'none', // Remove any box shadow
    transition: 'opacity 0.3s ease', // Smooth transition for opacity change
  },
  headerText: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  githubLink: {
    color: '#000',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  githubIconLink: {},
  githubIcon: {
    width: '24px',
    height: '24px',
  },
};

export default Header;
