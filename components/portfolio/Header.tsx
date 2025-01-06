import React from 'react'
import { DownloadIcon } from '..'
import Image from 'next/image'
import OpenModalButton from './OpenModalButton'
import Link from 'next/link'
import LinkedIn from '../LinkedIn'
import DownloadApp from '@/app/dooke/download/DownloadApp'

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
      <div className='flex flex-col lg:flex-row gap-6 items-start'>
        <div className='header-details flex flex-col items-center sm:items-start gap-2 flex-1'>
          <h2 className='text-2xl sm:text-4xl font-bold text-violet-600 dark:text-blue-500 dark:text-opacity-80'>Messeroux Jean H.</h2>
          <p className='text-base text-center sm:text-left bg-red-300d text-balance'>
            Co-Founder and CTO at{' '}
            <Link className='text-pink-500 dark:text-pink-500 hover:underline' href={'https://dooke.app'} target='_blank'>
              Dooke
            </Link>
            , Software Engineer with 5+ years of experience in full-stack development. I excel in delivering high-quality solutions,
            leveraging innovative technologies, and driving successful collaborations.
          </p>
          <div className='flex items-center flex-wrap gap-4 mt-3'>
            <a
              href='/assets/docs/cv.pdf'
              download
              className='hover:bg-violet-600 py-2 px-3.5 rounded-[4px] border border-violet-600 flex items-center gap-0.5 hover:shadow text-brand dark:bg-transparent dark:border-violet-400 dark:border-[1px] dark:hover:bg-brand hover:text-white dark:hover:border-brand duration-500 transition-colors'
            >
              <DownloadIcon />
              <span>Resume/CV</span>
            </a>
            <LinkedIn />
          </div>
        </div>
        <div className='relative download-dooke-links w-full lg:max-w-[250px] bg-white dark:bg-slate-800 shadow-1 dark:shadow p-4 rounded-xl flex flex-col items-center justify-center'>
          <div className='text-balance text-center'>Download Dooke for free today</div>
          <DownloadApp className='flex-col sm:flex-col w-full' />
          {/* <Image src={'/assets/images/dookeapp.png'} alt='Dooke App' width={150} height={150} /> */}
          {/* <BorderBeam /> */}
        </div>
      </div>
    </header>
  )
}

export default Header
