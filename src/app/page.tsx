'use client';

import React from "react";
import './LandingPage.css'; 

const LandingPage: React.FC = () => {
  const handleStart = () => {
    console.log('Game Started!');
  };

  return (
    <div className="landing-page">
      <div className="overlay">
        <h1 className="game-title">Halloween Escape Room</h1>
        <button className="start-button" onClick={handleStart}>
          Start Game
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
