"use client"
import { LoginButton } from "@/components/login-button";
import NavBar from "@/components/navbar";
import './LandingPage.css';
import Link from "next/link";

export default function Home() {
  const handleStart = () => {
    console.log('Game Started!');
  };
  return (

    <div className="relative min-h-screen flex flex-col">
      {/* <NavBar /> */}
      <div className="landing-page">
        <div className="overlay">
          <h1 className="game-title">Halloween Escape Room</h1>
          <Link href='/dashboard'>
          <button className="start-button" >
            Start Game
          </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
}
