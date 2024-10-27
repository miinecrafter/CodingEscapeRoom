"use client";
import { LoginButton } from "@/components/login-button";
import NavBar from "@/components/navbar";
import Link from "next/link";
import React, { useEffect, useRef } from "react"; // Import hooks for audio control
import "./LandingPage.css"; // Adjust your styling as needed
import { Button } from "@/components/ui/button";

export default function Home() {


  return (
    <div className="relative min-h-screen flex flex-col">
      <NavBar />

      <div className="landing-page">

        <div className="overlay">
          <h1 className="game-title">Debug Your Fate 🎃</h1>

          {/* Link to Dashboard with Start Game Button */}
          <Link href="/dashboard">
            <Button style={{ padding: '20px 40px', fontSize: '1.5rem', borderRadius: '8px' }} className="start-button">
              Start Game
            </Button>
          </Link>

        </div>
      </div>
    </div>
  );
}
