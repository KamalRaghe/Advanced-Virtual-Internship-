import React from 'react';

const AudioPlayer = ({ audioUrl }) => {
  if (!audioUrl) {
    return <p>No audio URL provided.</p>;
  }

  return (
    <div>
      <audio controls style={{ width: '100%' }}>
        <source src={audioUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;