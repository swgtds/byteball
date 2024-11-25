import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div style={styles.container}>
      <p style={styles.text}>
        Made with ❤️ by{' '}
        <a
          href="https://github.com/swgtds"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.githubLink}
        >
          swgtds
        </a>{' '}
        <a
          href="https://github.com/swgtds"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.githubLogoLink}
        >
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="GitHub Logo"
            style={styles.githubLogo}
          />
        </a>
      </p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    background: 'transparent', 
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  text: {
    color: '#000000',
    fontSize: '18px',
    fontWeight: 'bold',
    margin: 0,
    display: 'flex',
    alignItems: 'center',
  },
  githubLink: {
    color: '#000000',
    textDecoration: 'none',
    fontSize: '18px',
  },
  githubLogoLink: {
    marginLeft: '8px',
  },
  githubLogo: {
    width: '20px',
    height: '20px',
  },
};

export default Navbar;
