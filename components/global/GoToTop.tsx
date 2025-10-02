'use client'
import React, { useState, useEffect } from 'react'

const GoToTop = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      setScrollProgress(scrollPercent)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const circumference = 2 * Math.PI * 20 // radius = 20
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference

  return (
    <button
      style={{ backgroundColor: 'rgb(37 99 235 / 62%)', zIndex: 9999 }}
      type='button'
      className='w-12 h-12 rounded-full shadow fixed bottom-6 flex items-center justify-center right-4 text-white text-center duration-700 transition-colors shadow-brand hover:text-white cursor-pointer hover:bg-gradient-to-r from-brand to-pink-400 hover:border-none group'
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      {/* Progress Circle */}
      <svg className='absolute inset-0 w-full h-full -rotate-90' viewBox='0 0 44 44'>
        {/* Background circle */}
        <circle cx='22' cy='22' r='20' stroke='rgba(255,255,255,0.2)' strokeWidth='2' fill='none' />
        {/* Progress circle */}
        <circle
          cx='22'
          cy='22'
          r='20'
          stroke='white'
          strokeWidth='2'
          fill='none'
          strokeDasharray={circumference || 0}
          strokeDashoffset={strokeDashoffset || 0}
          className='transition-all duration-300 ease-out'
          strokeLinecap='round'
        />
      </svg>

      {/* Arrow icon */}
      <div className='group-hover:-translate-y-1 duration-700 transition-transform relative z-10'>&uarr;</div>
    </button>
  )
}

export default GoToTop
