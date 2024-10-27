"use client";
import { LoginButton } from "@/components/login-button";
import NavBar from "@/components/navbar";
import Link from "next/link";
<<<<<<< HEAD
import BackgroundAudio from "@/components/sound";
=======
import React, { useEffect, useRef } from "react"; // Import hooks for audio control
import "./LandingPage.css"; // Adjust your styling as needed
>>>>>>> 7260f203914d811a1957364d93c980d793518865

export default function Home() {
  const audioRef = useRef<HTMLAudioElement | null>(null); // Reference to the audio element

  // Function to handle Start Game button click
  const handleStart = () => {
    console.log("Game Started!");
    if (audioRef.current) {
      audioRef.current.play(); // Play the background sound on button click
    }
  };

  // Attempt to autoplay sound when the component mounts
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5; // Set volume
      audioRef.current.play().catch((error) =>
        console.log("Autoplay blocked:", error) // Handle autoplay restrictions
      );
    }
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col">
<<<<<<< HEAD
      <NavBar />
=======
      {/* Optional: NavBar */}
      {/* <NavBar /> */}
      
      {/* Landing Page with Background Sound */}
>>>>>>> 7260f203914d811a1957364d93c980d793518865
      <div className="landing-page">
        <audio ref={audioRef} loop>
          <source src="/sounds/halloween.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>

        <div className="overlay">
<<<<<<< HEAD
          <h1 className="game-title">Debug Your Fate 🎃</h1>
          <Link href='/dashboard'>
          <button className="start-button" >
            Get Started
          </button>
=======
          <h1 className="game-title">Halloween Escape Room</h1>

          {/* Link to Dashboard with Start Game Button */}
          <Link href="/dashboard">
            <button className="start-button" onClick={handleStart}>
              Start Game
            </button>
>>>>>>> 7260f203914d811a1957364d93c980d793518865
          </Link>
        </div>
      </div>
    </div>
  );
}
