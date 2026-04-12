'use client'
import { copyToClipboard } from '@/helpers'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { CopyIcon } from '.'

const CopyButton = () => {
  const [showText, setShowText] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current) }
  }, [])

  const handleCopy = useCallback(() => {
    copyToClipboard('jhmcode.dev@gmail.com')
    setShowText(true)
    timeoutRef.current = setTimeout(() => setShowText(false), 2000)
  }, [])

  return (
    <button
      onClick={handleCopy}
      disabled={showText}
      className='p-2 hover:text-brand2 border hover:border-brand2 dark:hover:border-brand2 duration-300 transition-colors border-slate-300 dark:border-slate-700'
      type='button'
      data-testid='copy-email-button'
      aria-label={showText ? 'Email copied' : 'Copy email'}
    >
      {showText ? 'Copied' : <CopyIcon />}
    </button>
  )
}

export default CopyButton
