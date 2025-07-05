"use client"

export default function Preloader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 animate-shimmer"></div>
      </div>

      {/* Main loader container */}
      <div className="relative z-10 flex flex-col items-center space-y-8">
        {/* Spinning rings */}
        <div className="relative">
          <div className="w-32 h-32 border-4 border-white/20 rounded-full animate-spin-slow"></div>
          <div className="absolute inset-2 w-28 h-28 border-4 border-white/40 rounded-full animate-spin-reverse"></div>
          <div className="absolute inset-4 w-24 h-24 border-4 border-white/60 rounded-full animate-spin"></div>
          <div className="absolute inset-6 w-20 h-20 border-4 border-white/80 rounded-full animate-spin-slow"></div>

          {/* Center pulsing dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 bg-white rounded-full animate-pulse-scale"></div>
          </div>
        </div>

        {/* Loading text */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-2 animate-fade-in-up">Loading</h2>
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-100"></div>
            <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-200"></div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-white to-purple-200 rounded-full animate-progress"></div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-white/30 rounded-full animate-float-random"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Corner decorations */}
      <div className="absolute top-4 left-4 w-16 h-16 border-l-4 border-t-4 border-white/40 animate-pulse"></div>
      <div className="absolute top-4 right-4 w-16 h-16 border-r-4 border-t-4 border-white/40 animate-pulse delay-500"></div>
      <div className="absolute bottom-4 left-4 w-16 h-16 border-l-4 border-b-4 border-white/40 animate-pulse delay-1000"></div>
      <div className="absolute bottom-4 right-4 w-16 h-16 border-r-4 border-b-4 border-white/40 animate-pulse delay-1500"></div>
    </div>
  )
}
