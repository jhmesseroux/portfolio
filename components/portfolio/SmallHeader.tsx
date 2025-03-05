import React from 'react'
import ThemeSwitcher from '../ThemeSwitcher'
import { cn } from '@/helpers'
import OpenModalButton from './OpenModalButton'
import Navbar from './Navbar'
import Link from 'next/link'
import FadeInImage from '../global/FadeInImage'
interface Props extends React.HTMLAttributes<HTMLHtmlElement> {}
const SmallHeader = ({ className }: Props) => {
  return (
    <div
      className={cn('shadow-2 hover:shadow-1 bg-white/90 z-30 dark:bg-slate-800/90   p-3  flex items-center justify-between ', className)}
    >
      <div className='avatar flex items-center   gap-2 '>
        <Link href='/'>
          <FadeInImage
            path={'/assets/images/me.png'}
            imageAndBoxClassName='aspect-square rounded-full w-[50px] h-[50px]'
            imageClassName='border-[1px] border-red-300 '
            alt='Avatar Jn. H. Messeroux '
          />
        </Link>
        <div className='flex flex-col '>
          <Link href='/'>
            <span className='line-clamp-1 truncate text-ellipsis text-balance max-w-[170px] md:max-w-full'>Jean H. Messeroux</span>
          </Link>
          <span className='text-brand text-xs line-clamp-1 truncate text-ellipsis text-balance max-w-[170px] md:max-w-full'>
            Co-Founder, CTO at{' '}
            <Link className='text-pink-500 dark:text-pink-500 hover:underline' href={'https://dooke.app'} target='_blank'>
              Dooke
            </Link>
            {' | '}
            System Engineer
          </span>
        </div>
      </div>
      <Navbar ulClassName='flex-row ' className='hidden sm:flex mt-0' />
      <div className='flex items-center justify-center gap-x-2'>
        <ThemeSwitcher />
        <OpenModalButton />
      </div>
    </div>
  )
}

export default SmallHeader
