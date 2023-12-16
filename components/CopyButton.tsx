'use client'
import { copyToClipboard } from '@/helpers'
import React, { useState } from 'react'
import { CopyIcon } from '.'

const CopyButton = () => {
  const [showText, setShowText] = useState(false)
  return (
    <button
      onClick={() => {
        copyToClipboard('jhmcode.dev@gmail.com')
        setShowText(true)
        setTimeout(() => setShowText(false), 2000)
      }}
      disabled={showText}
      className='p-2 hover:text-brand2   border hover:border-brand2 dark:hover:border-brand2 duration-300 transition-colors border-slate-300 dark:border-slate-700'
      type='button'
    >
      {showText ? 'Copied' : <CopyIcon />}
    </button>
  )
}

export default CopyButton
