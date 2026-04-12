'use client'
import { SquareLoading } from '@/components'
import React, { createContext, useLayoutEffect, useState } from 'react'
interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export interface ThemeContextProps {
  theme: 'dark' | 'light' | null
  // eslint-disable-next-line no-unused-vars
  toggleTheme: (theme: 'dark' | 'light') => void
}
export const ThemeContext = createContext({} as ThemeContextProps)

const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<'dark' | 'light' | null>(null)

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
      <section className='fixed inset-0 flex items-center justify-center bg-white dark:bg-slate-950'>
        <div className='p-6 flex items-center text-center flex-col gap-4'>
          <SquareLoading />
          <div className='p-6 text-slate-600 dark:text-slate-400'>
            Software engineer | Senior Full stack developer | JavaScript/Typescript | Vibe coder | IA Expert
          </div>
        </div>
      </section>
    )

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
