import React from 'react'
import Image from 'next/image'
import ThemeSwitcher from '../ThemeSwitcher'
import { Overlay } from '..'
import Navbar from './Navbar'
import CloseModalSideBar from './CloseModalButton'
import Medias from './Medias'
import Link from 'next/link'

const MobileSideBar = () => {
  return (
    <div className='mobile-sidebar fixed left-0 w-screen top-0 h-screen overflow-y-hidden overflow-x-hidden  z-30'>
      <Overlay elementClass='mobile-sidebar' />
      <div className='modile-sidebar-container flex justify-between flex-col z-20 relative  w-[70%] sm:w-[50%] lg:w-[350px] h-full  bg-slate-50 dark:bg-slate-900  overflow-y-auto overflow-x-hidden'>
        <CloseModalSideBar className='absolute right-3 top-3 cursor-pointer  hover:text-red-400' />
        <div className=''>
          <div className='avatar flex items-center   gap-2 border-b border-slate-300 dark:border-slate-700 p-3'>
            <Image
              src={'/assets/images/me.png'}
              className=' rounded-full border-[1px] overflow-hidden w-[50px] h-[50px] object-cover border-red-400 shadow-md '
              alt='Avatar Jn. H. Messeroux '
              width={50}
              height={50}
            />
            <div className='flex flex-col flex-1 '>
              <span className=''>Jean H. Messeroux</span>
              <span className='text-brand text-xs line-clamp-2 truncate text-ellipsis text-balance'>
                {' '}
                Co-Founder, CTO at{' '}
                <Link className='text-pink-500 dark:text-pink-500 hover:underline' href={'https://dooke.app'} target='_blank'>
                  Dooke
                </Link>
                {' | '}
                System Engineer
              </span>
            </div>
          </div>

          <Navbar hiddenOnClick />
        </div>
        <div className='p-4 flex items-center justify-center gap-6 flex-col w-full'>
          <Medias />
          <div className='theme-container flex items-center '>
            <span>Theme</span>
            <ThemeSwitcher className='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileSideBar
