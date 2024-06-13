import { cn } from '@/helpers'
import Link from 'next/link'
import React from 'react'
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
  return (
    <nav className={cn('mt-6 p-4 flex items-center gap-2', className)} {...rest}>
      <ul className={cn('flex gap-4 flex-col', ulClassName)}>
        {items.map((item, index) => (
          <li key={index} className='hover:text-brand duration-300 transition-colors'>
            {hiddenOnClick ? (
              <CloseModalSideBar>
                <Link href={item.link}>{item.name}</Link>
              </CloseModalSideBar>
            ) : (
              <Link href={item.link}>{item.name}</Link>
            )}
          </li>
        ))}
      </ul>
      <a
        href='https://www.linkedin.com/in/jhmesseroux/'
        target='_blank'
        className='hover:bg-blue-600 py-2 px-3.5 flex items-center text-blue-600  gap-1 rounded-[4px] hover:shadow border-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:border-brand duration-500 transition-colors'
      >
        <span>LinkedIn</span>
        <ExternalLinkIcon />
      </a>
    </nav>
  )
}

export default Navbar
