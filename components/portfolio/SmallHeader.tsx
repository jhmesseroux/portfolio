import Image from 'next/image'
import React from 'react'
import ThemeSwitcher from '../ThemeSwitcher'
import { cn } from '@/helpers'
import OpenModalButton from './OpenModalButton'
import Navbar from './Navbar'
import Link from 'next/link'
interface Props extends React.HTMLAttributes<HTMLHtmlElement> {}
const SmallHeader = ({ className }: Props) => {
  return (
    <div
      className={cn(
        'small-header sticky top-0 p-3 flex items-center justify-between',
        className
      )}
    >
      <div className='avatar flex items-center   gap-2 '>
        <Link href='/'>
          <Image
            src={'/assets/images/avatar.png'}
            className=' rounded-full border-[1px] border-slate-100 dark:border-slate-700 shadow-md '
            alt='Avatar Jn. H. Messeroux '
            width={50}
            height={50}
          />
        </Link>
        <div className='flex flex-col '>
          <Link href='/'>
            <span className=''>Jean H. Messeroux</span>
          </Link>
          <span className='text-brand text-xs'>System Engineer</span>
        </div>
      </div>
      <Navbar ulClassName='flex-row ' className='hidden sm:flex mt-0' />
      <OpenModalButton />
      <ThemeSwitcher className='hidden sm:flex' />
    </div>
  )
}

export default SmallHeader
