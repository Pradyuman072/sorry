"use client"

import { useState } from "react"

export default function SorryCard() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative z-10">
      <div
        className={`relative max-w-lg w-full transform transition-all duration-500 ${
          isHovered ? "scale-105" : "scale-100"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Card glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/50 to-red-500/50 rounded-3xl blur-xl opacity-75 animate-pulse"></div>

        {/* Main card */}
        <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl">
          {/* Card header decoration */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-red-400 rounded-full animate-bounce flex items-center justify-center">
              <span className="text-white text-xs">💕</span>
            </div>
          </div>

          {/* Floating hearts */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute text-pink-300/40 animate-float-random"
                style={{
                  left: `${10 + Math.random() * 80}%`,
                  top: `${10 + Math.random() * 80}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  fontSize: `${12 + Math.random() * 8}px`,
                }}
              >
                ❤️
              </div>
            ))}
          </div>

          {/* Sorry emoji */}
          <div className="text-center mb-6">
            <div className="text-8xl mb-4 animate-bounce-slow">🥺</div>
          </div>

          {/* Card content */}
          <div className="text-center space-y-4 relative z-10">
            <h1 className="text-4xl font-bold text-white mb-2 animate-fade-in-up">I'm Sorry, Baby</h1>
            <p className="text-lg text-white/90 leading-relaxed animate-fade-in-up delay-200">
              I know I messed up, and I can't take back what I did wrong. You mean everything to me, and I hate that I
              hurt you.
            </p>
            <p className="text-base text-white/80 animate-fade-in-up delay-400">
              I promise to do better, to listen more, and to never take your love for granted again.
            </p>
            <p className="text-sm text-pink-200/90 font-medium animate-fade-in-up delay-600">
              You deserve all the love in the world, and I want to be the one to give it to you. ❤️
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col gap-4 mt-8 animate-fade-in-up delay-800">
            <button className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold py-4 px-6 rounded-xl hover:from-pink-600 hover:to-red-600 transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center justify-center gap-2">
              <span>💝</span>I Love You So Much
              <span>💝</span>
            </button>
            <button className="w-full bg-white/10 text-white font-semibold py-3 px-6 rounded-xl hover:bg-white/20 transform hover:scale-105 transition-all duration-200 border border-white/20 flex items-center justify-center gap-2">
              <span>🌹</span>
              Let Me Make It Up To You
              <span>🌹</span>
            </button>
          </div>

          {/* Love message at bottom */}
          <div className="text-center mt-6 animate-fade-in-up delay-1000">
            <p className="text-xs text-white/60 italic">
              "You're my everything, and I'll spend every day proving it to you"
            </p>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-3 h-3 bg-pink-400/60 rounded-full animate-ping"></div>
          <div className="absolute bottom-4 left-4 w-2 h-2 bg-red-400/60 rounded-full animate-ping delay-1000"></div>
        </div>

        {/* Additional floating elements around card */}
        <div className="absolute -top-8 -left-8 w-4 h-4 bg-pink-400/60 rounded-full animate-float">
          <span className="text-xs">💖</span>
        </div>
        <div className="absolute -bottom-8 -right-8 w-6 h-6 bg-red-400/60 rounded-full animate-float delay-1000 flex items-center justify-center">
          <span className="text-sm">💕</span>
        </div>
        <div className="absolute top-1/2 -right-12 w-3 h-3 bg-pink-400/60 rounded-full animate-float delay-2000"></div>
        <div className="absolute top-1/4 -left-6 text-pink-300/60 animate-float delay-1500">🌹</div>
        <div className="absolute bottom-1/4 -right-6 text-red-300/60 animate-float delay-500">💐</div>
      </div>
    </div>
  )
}
