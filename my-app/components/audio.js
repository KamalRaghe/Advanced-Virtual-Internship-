import React, { useEffect, useRef } from 'react';

const AudioPlayer = ({audioUrl, show}) => {

    const audioRef = useRef(null);

    const loadAudio = () => {
        if (audioUrl && audioRef.current) {
            audioRef.current.src = audioUrl;
            audioRef.current.load();
            audioRef.current.play();
        } else {
            alert("Please enter a valid audio URL.");
        }
    };

    return (
        <div className="audio-player-container">
            <h2>Simple Audio Player</h2>
            <input
                type="text"
                placeholder="Enter audio link here"
                value={audioUrl}
                onChange={(e) => setAudioUrl(e.target.value)}
            />
            <button onClick={loadAudio}>Play Audio</button>
            <audio ref={audioRef} controls>
                Your browser does not support the audio element.
            </audio>

            <style jsx>{`
                .audio-player-container {
                    background-color: navy;
                    color: white;
                    padding: 20px;
                    border-radius: 8px;
                    max-width: 400px;
                    margin: 0 auto;
                    text-align: center;
                    font-family: Arial, sans-serif;
                }

                input[type="text"] {
                    width: 80%;
                    padding: 8px;
                    border-radius: 4px;
                    border: none;
                    margin-top: 10px;
                }

                button {
                    padding: 8px 12px;
                    border-radius: 4px;
                    border: none;
                    background-color: white;
                    color: navy;
                    font-weight: bold;
                    cursor: pointer;
                    margin-top: 10px;
                }

                button:hover {
                    background-color: #e0e0e0;
                }

                audio {
                    width: 100%;
                    margin-top: 15px;
                }
            `}</style>
        </div>
    );
};

export default AudioPlayer;