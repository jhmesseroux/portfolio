'use client'
import { cn } from '@/shared/utils'
import { MoonIcon, SunIcon } from '@/shared/icons'
import { useContext } from 'react'
import { ThemeContext } from '../state/theme-context'

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export const ThemeSwitcher = ({ className, ...rest }: Props) => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <div
      {...rest}
      className={cn('flex items-center gap-2 rounded-full mx-1', className)}
    >
      {theme === 'dark' ? (
        <button type='button' aria-label='Switch to light mode' data-testid='theme-switch-light' onClick={() => toggleTheme('light')} className='hover:text-sky-300'>
          <MoonIcon />
        </button>
      ) : (
        <button type='button' aria-label='Switch to dark mode' data-testid='theme-switch-dark' onClick={() => toggleTheme('dark')} className='hover:text-sky-300'>
          <SunIcon />
        </button>
      )}
    </div>
  )
}

