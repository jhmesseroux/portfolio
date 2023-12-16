'use client'
import React from 'react'

const GoToTop = () => {
  return (
    <button
      className='w-8 h-8 rounded-full shadow fixed bottom-4 flex items-center justify-center right-2 text-brand text-center hover:bg-black/10 border-black/20 duration-300 transition-colors'
      onClick={() => window.scrollTo(0, 0)}
    >
      <div>&uarr;</div>
    </button>
  )
}

export default GoToTop
