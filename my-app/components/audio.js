import React from 'react';
import { useEffect, useState, useRef } from 'react';

const AudioPlayer = ({ audioUrl }) => {
  if (!audioUrl) {
    return <p>No audio URL provided.</p>;
  }

  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

    useEffect(() => {
        const audioElement = audioRef.current;
         console.log(audioElement.duration); // Set the duration when metadata is loaded
    });

  return (
    <div>
      <audio controls style={{ width: '100%' }}>
        <source src={audioUrl} type="audio/mpeg" />
      </audio>
      <div>{duration}</div>
    </div>
  );
};

export default AudioPlayer;