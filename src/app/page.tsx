"use client";

import Link from "next/link";
import React, { useEffect, useRef } from "react";
import "./LandingPage.css"; // Ensure your CSS file is correct

export default function Home() {
  const audioRef = useRef<HTMLAudioElement | null>(null); // Reference to the audio element

  // Attempt to play audio when the page loads
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5; // Set volume to 50%

      // Try to play the audio on page load
      audioRef.current
        .play()
        .then(() => console.log("Audio started"))
        .catch((error) =>
          console.log("Autoplay blocked by the browser:", error)
        );
    }
  }, []); // Run only once on mount

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Optional: NavBar */}
      {/* <NavBar /> */}

      {/* Landing Page with Background Sound */}
      <div className="landing-page">
        <audio ref={audioRef} loop>
          <source src="/sounds/halloween.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>

        <div className="overlay">
          <h1 className="game-title">Halloween Escape Room</h1>

          {/* Link to Dashboard with Start Game Button */}
          <Link href="/dashboard">
            <button className="start-button">
              Start Game
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
