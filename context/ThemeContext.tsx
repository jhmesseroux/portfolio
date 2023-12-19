'use client'
import { SquareLoading } from '@/components'
import React, { createContext, useEffect, useLayoutEffect, useState } from 'react'
interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export interface ThemeContextProps {
  theme: 'dark' | 'light' | null
  toggleTheme: (theme: 'dark' | 'light') => void
}
export const ThemeContext = createContext({} as ThemeContextProps)

const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<'dark' | 'light' | null>(null)

  useLayoutEffect(() => {
    console.log('object')
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
      setTheme('dark')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
      setTheme('light')
    }
    return () => {}
  }, [])

  const toggleTheme = (theme: 'dark' | 'light') => {
    setTheme(theme)
    if (theme === 'dark') {
      localStorage.theme = 'dark'
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    } else {
      localStorage.theme = 'light'
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
    }
  }

  if (!theme)
    return (
      <div className='w-full h-screen flex items-center text-center flex-col gap-4 justify-center'>
        <SquareLoading />
        <div className=' '>
          <span className=''>System engineer | Javascript and PHP Fullstack developer</span>
        </div>
      </div>
    )

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
