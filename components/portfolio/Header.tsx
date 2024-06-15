import React from 'react'
import { DownloadIcon } from '..'
import Image from 'next/image'
import OpenModalButton from './OpenModalButton'
import Link from 'next/link'
import LinkedIn from '../LinkedIn'

const Header = () => {
  return (
    <header
      style={{
        backgroundImage: 'url("/assets/images/dots-curve-bg.svg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
      className='flex bg-red-200s flex-col sm:flex-row items-center justify-center gap-8 w-full border-bs border-slate-300 dark:border-slate-700  py-6  p-4'
      id='header'
    >
      <OpenModalButton className='flex sm:flex absolute right-3 text-brand top-3' />
      <Link href='/'>
        <div className='avatar border-[0px] border-slate-100 dark:border-brand hover:opacity-80 rounded-full hover:skew-y-2 hover:skew-x-1 hover:scale-[1.05] overflow-hidden w-[220px] h-[220px] shadow transition-all duration-1000'>
          <Image src={'/assets/images/me.png'} alt='Avatar Jn. H. Messeroux' width={220} height={220} />
        </div>
      </Link>
      <div className='header-details flex flex-col items-center sm:items-start gap-2 flex-1'>
        <h2 className='text-2xl sm:text-4xl font-bold text-violet-600 dark:text-blue-500 dark:text-opacity-80'>Messeroux Jean H.</h2>
        <p className='text-base text-center sm:text-left'>
          Results-driven software engineer with over five years of experience, consistently delivering high-quality solutions. Proven
          expertise in full-stack development, passionate about leveraging innovative technologies to optimize performance and exceed
          project goals. Adept at collaborating with cross-functional teams to drive successful software implementations.
        </p>
        <div className='flex items-center flex-wrap gap-4 mt-3'>
          <a
            href='/assets/docs/cv.pdf'
            download
            className='hover:bg-violet-600 py-2 px-3.5 rounded-[4px] border border-violet-600 flex items-center gap-0.5 hover:shadow text-brand dark:bg-transparent dark:border-violet-400 dark:border-[1px] dark:hover:bg-brand hover:text-white dark:hover:border-brand duration-500 transition-colors'
          >
            <DownloadIcon />
            <span>CV</span>
          </a>
          <LinkedIn />
        </div>
      </div>
    </header>
  )
}

export default Header
