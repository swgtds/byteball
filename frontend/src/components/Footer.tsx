import React from 'react';

const Footer: React.FC = () => {
  return (
    <div style={styles.footer}>
      <span style={styles.footerText}>
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
  footer: {
    position: 'absolute',
    top: 20,  // Position the footer near the top of the screen
    left: '50%',
    transform: 'translateX(-50%)', // Center the footer horizontally
    fontSize: '18px',
    color: '#333',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',  // Add space between text and GitHub logo
  },
  footerText: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  githubLink: {
    color: '#000',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  githubIconLink: {
    marginLeft: '8px',
  },
  githubIcon: {
    width: '24px',
    height: '24px',
  },
};

export default Footer;
