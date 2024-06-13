'use client'
import React from 'react'

const GoToTop = () => {
  return (
    <button
      className='w-8 h-8 rounded-full shadow-2xl !fixed bottom-12 flex items-center justify-center right-6 text-brand text-center hover:bg-black/10  duration-300 transition-colors animatedBorder hover:text-white border-brand2'
      onClick={() => window.scrollTo(0, 0)}
    >
      <div>&uarr;</div>
    </button>
  )
}

export default GoToTop
