'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Ghost, Skull } from 'lucide-react'

export default function SpookyCharacterDialogue({
  imageSrc = '/placeholder.svg?height=100&width=100',
  text = 'Beware, mortal! The veil between worlds grows thin...',
  streamSpeed = 50,
  isLeft = true
}: {
  imageSrc?: string
  text?: string
  streamSpeed?: number
  isLeft?: boolean
}) {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, streamSpeed)

      return () => clearTimeout(timer)
    }
  }, [currentIndex, text, streamSpeed])

  return (
    <div className="flex items-start w-full p-6 bg-gray-900 rounded-lg shadow-lg border-2 border-orange-500">
    {isLeft && (
      <div className="flex-shrink-0 mr-6 relative">
        <div className="absolute inset-0 bg-purple-700 opacity-50 rounded-full animate-pulse"></div>
        <Image
          src={imageSrc}
          alt="Spooky character avatar"
          width={120}
          height={120}
          className="rounded-full relative z-10 border-2 border-purple-500"
        />
      </div>
    )}
    <div className="flex-grow">
      <p 
        className="text-xl font-medium text-orange-500 font-spooky animate-flicker"
        style={{ textShadow: '0 0 8px rgba(255, 165, 0, 0.7)' }}
        aria-live="polite"
      >
        {displayedText}
      </p>
    </div>
    {!isLeft && (
      <div className="flex-shrink-0 ml-6 relative">
        <div className="absolute inset-0 bg-purple-700 opacity-50 rounded-full animate-pulse"></div>
        <Image
          src={imageSrc}
          alt="Spooky character avatar"
          width={120}
          height={120}
          className="rounded-full relative z-10 border-2 border-purple-500"
        />
      </div>
    )}
    <Ghost className="text-purple-400 w-8 h-8 absolute top-4 right-4 animate-float" />
    <Skull className="text-orange-500 w-6 h-6 absolute bottom-4 right-6 animate-bounce" />
  </div>
  )
}