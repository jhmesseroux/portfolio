import React from 'react'
import { DownloadIcon } from '..'
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
      className='flex bg-red-200s relative flex-col sm:flex-row items-center justify-center gap-8 w-full border-bs border-slate-300 dark:border-slate-700  py-6  p-4'
      id='header'
    >
      {/* <Link href='/'>
        <div className='avatar border-[0px] border-slate-100 dark:border-brand hover:opacity-80 rounded-full hover:skew-y-2 hover:skew-x-1 hover:scale-[1.05] overflow-hidden w-[220px] h-[220px] shadow transition-all duration-1000'>
          <Image src={'/assets/images/me.png'} alt='Avatar Jn. H. Messeroux' width={220} height={220} />
        </div>
      </Link> */}
      <div className='flex flex-col lg:flex-row gap-6 items-start'>
        <div className='header-details flex flex-col items-center sm:items-start gap-2 flex-1'>
          <h2 className='text-2xl sm:text-4xl font-bold text-violet-600 dark:text-blue-500 dark:text-opacity-80'>
            <span>Messeroux Jean H. {'    '}</span>

            <Link href={'#GodsWord'} className='text-sm text-pink-500 font-normal hover:underline'>
              <span>
                {'    '} John 3:16 <div className='animate-bounce inline-block'>&darr;</div>
              </span>
            </Link>
          </h2>
          <p className='text-base text-center sm:text-left bg-red-300d text-balance'>
            Co-Founder and CTO at{' '}
            <Link className='text-pink-500 dark:text-pink-500 hover:underline' href={'https://dooke.app'} target='_blank'>
              Dooke
            </Link>
            , Software Engineer with 5+ years of experience in full-stack development. I excel in delivering high-quality solutions,
            leveraging innovative technologies, and driving successful collaborations.
          </p>
          <div className='flex items-center justify-center flex-wrap gap-4 mt-3'>
            <a
              href='/assets/docs/cv.pdf'
              download
              className='hover:bg-violet-600 py-2 px-3.5 rounded-[4px] border border-violet-600 flex items-center gap-0.5 hover:shadow text-brand dark:bg-transparent dark:border-violet-400 dark:border-[1px] dark:hover:bg-brand hover:text-white dark:hover:border-brand duration-500 transition-colors flex-1'
            >
              <DownloadIcon />
              <span>Resume/CV</span>
            </a>
            <LinkedIn className='flex-1' />
            <a
              href='mailto:jhmcode.dev@gmail.com'
              className='py-2 px-3.5 flex  text-center justify-center items-center group gap-2 duration-700 transition-all  bg-slate-50 dark:bg-slate-800 text-gray-900 hover:bg-violet-100  dark:text-white outline-none rounded dark:hover:bg-slate-900 dark:hover:text-white flex-1'
            >
              <span>{`Let's talk`}</span>
              <span className='group-hover:opacity-90 transition-all animate-pulse dark:text-white text-slate-600  duration-1000 opacity-10'>
                &rarr;
              </span>
            </a>
          </div>
        </div>
        <div className='relative download-dooke-links w-full lg:max-w-[250px] bg-white dark:bg-slate-800 shadow-1 dark:shadow p-4 rounded-xl  flex-col items-center justify-center hidden sm:flex'>
          <div className='text-balance text-center'>Download Dooke for free today</div>
          <DownloadApp className='flex-col sm:flex-col w-full' />
        </div>
      </div>
    </header>
  )
}

export default Header
