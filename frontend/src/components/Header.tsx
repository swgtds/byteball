import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        
        setIsVisible(false);
      } else {
        
        setIsVisible(true);
      }
      lastScrollY = window.scrollY; 
    };

    window.addEventListener('scroll', handleScroll);

    
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
    position: 'fixed', 
    top: 0,
    left: 0,
    textAlign: 'center',
    fontSize: '18px',
    color: '#333',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', 
    gap: '8px', 
    padding: '10px 0', 
    backgroundColor: 'transparent', 
    zIndex: 1000, 
    boxShadow: 'none', 
    transition: 'opacity 0.3s ease', 
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
