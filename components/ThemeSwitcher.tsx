'use client'
import { cn } from '@/helpers'
import { MoonIcon, SunIcon } from '.'
import { useContext } from 'react'
import { ThemeContext } from '@/context/ThemeContext'

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const ThemeSwitcher = ({ className, ...rest }: Props) => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <div
      {...rest}
      className={cn(
        'flex items-center gap-2 rounded-full mx-1 hover:text-sky-300',
        className
      )}
    >
      {theme === 'dark' ? (
        <MoonIcon className='' onClick={() => toggleTheme('light')} />
      ) : (
        <SunIcon className='' onClick={() => toggleTheme('dark')} />
      )}
    </div>
  )
}

export default ThemeSwitcher
