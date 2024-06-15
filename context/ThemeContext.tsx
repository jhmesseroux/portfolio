'use client'
import { SquareLoading } from '@/components'
import { cn } from '@/helpers'
import React, { createContext, useLayoutEffect, useState } from 'react'
interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export interface ThemeContextProps {
  theme: 'dark' | 'light' | null
  // eslint-disable-next-line no-unused-vars
  toggleTheme: (theme: 'dark' | 'light') => void
}
export const ThemeContext = createContext({} as ThemeContextProps)

const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<'dark' | 'light' | null>('light')

  useLayoutEffect(() => {
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
      <section className=' h-screen  w-screen grid place-items-center'>
        <div
          style={{ maxWidth: 500, maxHeight: 400 }}
          className={cn('p-6 shadow-sm rounded-md flex items-center text-center flex-col gap-4 justify-center')}
        >
          <SquareLoading />
          <div className='p-6' style={{ backgroundColor: theme === 'dark' ? '#1a202c' : 'white' }}>
            Software Engineer | Fullstack developer | Typescript, Nodejs | React.js,Next.js | React Native | Chrome Extension
          </div>
        </div>
      </section>
    )

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
