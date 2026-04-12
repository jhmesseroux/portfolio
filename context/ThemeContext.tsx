'use client'
import React, { createContext, useEffect, useState } from 'react'
interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export interface ThemeContextProps {
  theme: 'dark' | 'light'
  // eslint-disable-next-line no-unused-vars
  toggleTheme: (theme: 'dark' | 'light') => void
}
export const ThemeContext = createContext({} as ThemeContextProps)

const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<'dark' | 'light'>('light')

  useEffect(() => {
    try {
      const stored = localStorage.theme
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      const next: 'dark' | 'light' = stored === 'dark' || (!stored && prefersDark) ? 'dark' : 'light'
      document.documentElement.classList.toggle('dark', next === 'dark')
      document.documentElement.classList.toggle('light', next === 'light')
      setTheme(next)
    } catch {
      // localStorage may be blocked
    }
  }, [])

  const toggleTheme = (next: 'dark' | 'light') => {
    setTheme(next)
    try {
      localStorage.theme = next
    } catch {}
    document.documentElement.classList.toggle('dark', next === 'dark')
    document.documentElement.classList.toggle('light', next === 'light')
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
