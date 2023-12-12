import React from 'react'
import { DownloadIcon, LinkIcon } from '..'
import Image from 'next/image'
import OpenModalButton from './OpenModalButton'
import Link from 'next/link'

const Header = () => {
  return (
    <header
      style={{
        backgroundImage: 'url(/assets/images/square.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className='flex bg-red-200s flex-col sm:flex-row items-center justify-center gap-8 w-full border-bs border-slate-300 dark:border-slate-700  py-6  p-4'
      id='header'
    >
      <OpenModalButton className='flex sm:flex absolute right-3 text-brand top-3' />
      <Link href='/'>
        <div className='avatar border-[1px] border-slate-100 dark:border-brand  rounded-full overflow-hidden shadow'>
          <Image
            src={'/assets/images/avatar.png'}
            alt='Avatar Jn. H. Messeroux'
            width={220}
            height={220}
          />
        </div>
      </Link>
      <div className='header-details flex flex-col items-center sm:items-start gap-2 flex-1'>
        <h2 className='text-2xl sm:text-4xl font-bold text-violet-600 dark:text-blue-500 dark:text-opacity-80 '>
          Messeroux Jean H.
        </h2>
        <p className='text-base text-center sm:text-left'>
          Results-driven software engineer with over five years of experience,
          consistently delivering high-quality solutions. Proven expertise in
          full-stack development, passionate about leveraging innovative
          technologies to optimize performance and exceed project goals. Adept
          at collaborating with cross-functional teams to drive successful
          software implementations.
        </p>
        <div className='header-btns flex items-center flex-wrap gap-4 mt-3'>
          <a
            href='https://res.cloudinary.com/draxircbk/image/upload/v1700929952/ivana_centro/budgets/budget_2_1700929948842.png'
            download
            className='bg-violet-600 py-1.5 px-2.5 rounded-full flex items-center gap-0.5 shadow text-white dark:text-slate-400 dark:bg-transparent dark:border-violet-300 dark:border-[1px] dark:hover:bg-brand dark:hover:text-white dark:hover:border-brand duration-500 transition-colors'
          >
            <DownloadIcon />
            <span>Resume</span>
          </a>
          <a
            href='https://www.linkedin.com/in/jhmesseroux/'
            target='_blank'
            className='bg-blue-600 py-1.5 px-2.5 flex items-center gap-0.5 rounded-full shadow text-white dark:text-slate-400 dark:bg-transparent dark:border-sky-300 dark:border-[1px] dark:hover:bg-blue-500 dark:hover:text-white dark:hover:border-brand duration-500 transition-colors'
          >
            <LinkIcon />
            <span>Linkedin</span>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
