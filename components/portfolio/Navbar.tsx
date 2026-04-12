'use client'
import { cn } from '@/helpers'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import CloseModalSideBar from './CloseModalButton'
import ExternalLinkIcon from '../icons/ExternalLinkIcon'

interface Props extends React.HTMLAttributes<HTMLElement> {
  ulClassName?: string
  hiddenOnClick?: boolean
}
const items = [
  {
    name: 'Recommendations',
    link: '/#recommendations'
  },
  {
    name: 'Projects',
    link: '/projects'
  },
  {
    name: 'Experiences',
    link: '/experiences'
  },
  {
    name: 'Skills',
    link: '/skills'
  }
]

const Navbar = ({ className, ulClassName, hiddenOnClick = false, ...rest }: Props) => {
  const pathname = usePathname()

  const isActive = (link: string) => {
    if (link === '/#recommendations') return pathname === '/'
    return pathname === link || pathname.startsWith(link + '/')
  }

  return (
    <nav className={cn('mt-6 p-4 flex sm:items-center gap-2 flex-col sm:flex-row items-start', className)} {...rest}>
      <ul className={cn('flex gap-4 flex-col', ulClassName)}>
        {items.map((item) => (
          <li
            key={item.name}
            className={cn(
              'duration-300 transition-colors',
              isActive(item.link) ? 'text-brand font-medium' : 'hover:text-brand'
            )}
          >
            {hiddenOnClick ? (
              <CloseModalSideBar>
                <Link href={item.link} data-testid={`nav-link-${item.name.toLowerCase()}`}>{item.name}</Link>
              </CloseModalSideBar>
            ) : (
              <Link href={item.link} data-testid={`nav-link-${item.name.toLowerCase()}`}>{item.name}</Link>
            )}
          </li>
        ))}
      </ul>
      <a
        href='https://www.linkedin.com/in/jhmesseroux/'
        target='_blank'
        rel='noreferrer'
        className={cn(
          'py-2 sm:px-3.5 items-center text-blue-600 gap-1 rounded-[4px] sm:hover:shadow border-blue-500 sm:dark:hover:bg-blue-500 hover:text-indigo-700 sm:hover:text-white dark:hover:border-brand duration-500 transition-colors sm:ml-4',
          hiddenOnClick
            ? 'flex hover:text-indigo-700'
            : 'hidden lg:flex hover:bg-transparent dark:hover:bg-transparent sm:hover:bg-blue-600'
        )}
      >
        <span data-testid='nav-link-linkedin'>LinkedIn</span>
        <ExternalLinkIcon />
      </a>
    </nav>
  )
}

export default Navbar
