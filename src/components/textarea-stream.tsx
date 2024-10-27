'use client'
import React, { useState, useEffect } from 'react'

type Props = {
    spookyPhrases: string[]
}

export default function StreamTextArea({ spookyPhrases } : Props) {
  const [text, setText] = useState('')
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    if (currentPhraseIndex >= spookyPhrases.length) return; // Stop if we've displayed all phrases

    if (charIndex < spookyPhrases[currentPhraseIndex].length) {
      const timer = setTimeout(() => {
        setText((prev) => prev + spookyPhrases[currentPhraseIndex][charIndex])
        setCharIndex((prev) => prev + 1)
      }, 60) 
      return () => clearTimeout(timer)
    } else {
      const nextPhraseTimer = setTimeout(() => {
        setText('')
        setCharIndex(0)
        setCurrentPhraseIndex((prev) => prev + 1) // Move to the next phrase
      }, 500) 

      return () => clearTimeout(nextPhraseTimer)
    }
  }, [charIndex, currentPhraseIndex])

  return (
    <div className="w-full flex items-center justify-center p-4">
  <div className="w-full max-w-sm bg-gray-900 rounded-xl shadow-lg overflow-hidden">
    {/* Text area */}
    <div className="w-full flex items-center justify-center p-4">
      <p className="text-orange-400 text-xl font-bold text-center leading-relaxed">
        {text}
        <span className="animate-pulse">|</span>
      </p>
    </div>
  </div>
</div>

  )
}
