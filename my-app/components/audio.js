import React, { useEffect, useRef } from 'react';

const AudioPlayer = ({audioUrl, show}) => {
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
   if(audioRef.current.duration){
      window.localStorage.setItem('minute',Math.floor((audioRef.current.duration)/60))
      window.localStorage.setItem('second',Math.floor((audioRef.current.duration)%60))
    }
    console.log(audioRef.current.duration)
  })


  return (
    <div style={{display:'flex',alignItems: 'center', gap: '10px'}}>
      <audio ref={audioRef} controls style={{display:show ,width: '100%'}}>
        <source src={audioUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <button style={{display:show, border:"1px solid black",width:"100px"}}onClick={handleSkipBack}>⏪ 10s</button>
      <button style={{display:show}} onClick={handleSkipForward}>10s ⏩</button>
      
    </div>
  );
};

export default AudioPlayer;

