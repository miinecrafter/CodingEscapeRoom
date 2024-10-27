"use client"
import { LoginButton } from "@/components/login-button";
import NavBar from "@/components/navbar";
import './LandingPage.css';
import Link from "next/link";
import BackgroundAudio from "@/components/sound";

export default function Home() {
  const handleStart = () => {
    console.log('Game Started!');
  };
  return (

    <div className="relative min-h-screen flex flex-col">
      <NavBar />
      <div className="landing-page">
        <div className="overlay">
          <h1 className="game-title">Debug Your Fate 🎃</h1>
          <Link href='/dashboard'>
          <button className="start-button" >
            Get Started
          </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
}
