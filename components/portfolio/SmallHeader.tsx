import React from 'react'
import ThemeSwitcher from '../ThemeSwitcher'
import { cn } from '@/helpers'
import OpenModalButton from './OpenModalButton'
import Navbar from './Navbar'
import Link from 'next/link'
import Image from 'next/image'
interface Props extends React.HTMLAttributes<HTMLHtmlElement> {}
const SmallHeader = ({ className }: Props) => {
  return (
    <div className={cn('small-header sticky top-0 p-3 flex items-center justify-between bg-transparent', className)}>
      <div className='avatar flex items-center   gap-2 '>
        <Link href='/'>
          <div className='avatar border-[1px] border-slate-100 dark:border-brand  rounded-full overflow-hidden object-contain w-[50px] h-[50px] shadow'>
            <Image
              objectFit='cover'
              src={'/assets/images/me.png'}
              className=' rounded-full  dark:border-slate-700 shadow-md object-cover'
              alt='Avatar Jn. H. Messeroux '
              // fill=''
              width={100}
              height={100}
            />
          </div>
        </Link>
        <div className='flex flex-col '>
          <Link href='/'>
            <span className=''>Jean H. Messeroux</span>
          </Link>
          <span className='text-brand text-xs line-clamp-2 truncate text-ellipsis text-balance'>
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
      <OpenModalButton />
      <ThemeSwitcher className='hidden sm:flex' />
    </div>
  )
}

export default SmallHeader
