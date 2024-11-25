// src/components/Navbar.tsx
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
        <h1 style={styles.logoText}>ByteBall</h1>
      </div>
      <ul style={styles.navLinks}>
        {/* Only the relevant navigation items will be here */}
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    background: 'linear-gradient(to right, #ff9a8b, #ffb67c)', // Lighter gradient for navbar
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  logoContainer: {
    flex: 1,
  },
  logoText: {
    color: '#000000', 
    fontSize: '24px',
    fontWeight: 'bold',
    margin: 0,
  },
  navLinks: {
    display: 'flex',
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  },
  navItem: {
    marginLeft: '20px',
  },
  navLink: {
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '18px',
    padding: '10px 15px',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  },
  navLinkHover: {
    backgroundColor: 'rgba(0, 188, 212, 0.8)',
  },
};

export default Navbar;
