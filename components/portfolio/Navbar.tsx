import { cn } from '@/helpers'
import Link from 'next/link'
import React from 'react'
import CloseModalSideBar from './CloseModalButton'

interface Props extends React.HTMLAttributes<HTMLElement> {
  ulClassName?: string
  hiddenOnClick?: boolean
}
const items = [
  // {
  //   name: 'Blog',
  //   link: '/blog',
  // },
  {
    name: 'Projects',
    link: '/projects',
  },
  {
    name: 'Experiences',
    link: '/experiences',
  },
  {
    name: 'Skills',
    link: '/skills',
  },
]

const Navbar = ({ className, ulClassName, hiddenOnClick = false, ...rest }: Props) => {
  return (
    <nav className={cn('mt-6 p-4', className)} {...rest}>
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
    </nav>
  )
}

export default Navbar
