import React from 'react';

const BorderGavaskarTrophyPage: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1>Border Gavaskar Trophy 2024</h1>
      <div style={styles.videoContainer}>
        {/* You can either directly use an iframe or render the contents */}
        <iframe
          src="/videos/border-gavaskar-trophy-2024.html"
          width="100%"
          height="600px"
          frameBorder="0"
          title="BGT 2024"
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center' as const,
  },
  videoContainer: {
    marginTop: '20px',
  },
};

export default BorderGavaskarTrophyPage;
