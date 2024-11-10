import React, { useEffect, useRef } from 'react';

const AudioPlayer = ({ audioUrl, show }) => {
  const audioRef = useRef(null);


  const handleSkipBack = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(audioRef.current.currentTime - 10, 0);
    }
  };

  const handleSkipForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(
        audioRef.current.currentTime + 10,
        audioRef.current.duration
      );
    }
  };


  useEffect(()=>{
    console.log(Math.floor((audioRef.current.duration)/60))
    console.log(Math.floor((audioRef.current.duration)%60))
  })


  return (
    <div style={{ display: show , alignItems: 'center', gap: '10px' }}>
      <audio ref={audioRef} controls style={{ width: '100%'}}>
        <source src={audioUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <button onClick={handleSkipBack}>⏪ 10s</button>
      <button onClick={handleSkipForward}>10s ⏩</button>
    </div>
  );
};

export default AudioPlayer;