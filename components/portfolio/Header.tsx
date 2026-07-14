import React from 'react'
import { DownloadIcon } from '..'
import Link from 'next/link'
import LinkedIn from '../LinkedIn'
import DownloadApp from '@/app/(main)/dooke/download/DownloadApp'
import ToggleFocus from '../global/ToggleFocus'
import HeroAvatar from './HeroAvatar'

const Header = () => {
  return (
    <section
      className='flex relative flex-col sm:flex-row items-center justify-center gap-8 w-full py-10 p-4'
      id='header'
      aria-label='Introduction'
      data-testid='hero-section'
    >
      <div
        aria-hidden='true'
        className='absolute inset-0 opacity-30 pointer-events-none'
        style={{
          backgroundImage: 'url("/assets/images/dots-curve-bg.svg")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      />
      <div className='flex flex-col lg:flex-row gap-6 items-center lg:items-start max-w-5xl w-full'>
        <div className='flex flex-col sm:flex-row gap-6 items-center sm:items-start flex-1'>
          <HeroAvatar />
          <div className='header-details flex flex-col items-center sm:items-start gap-3 flex-1'>
            <div className='text-center sm:text-left'>
              <h1
                className='text-2xl sm:text-4xl font-bold text-violet-600 dark:text-blue-500 dark:text-opacity-80'
                data-testid='hero-name'
              >
                Jean H. Messeroux
              </h1>
              <Link
                href='#GodsWord'
                className='text-sm text-pink-500 font-normal hover:underline mt-1 inline-block'
                data-testid='hero-bible-link'
              >
                {'John 3:16 '}
                <span className='animate-bounce inline-block' aria-hidden='true'>
                  &darr;
                </span>
              </Link>
            </div>
            <p className='text-lg sm:text-xl text-center sm:text-left text-balance leading-relaxed' data-testid='hero-description'>
              {'Senior Full Stack Developer at '}
              <Link className='text-pink-500 dark:text-pink-500 hover:underline' href='https://emcitv.com' target='_blank' rel='noreferrer'>
                EMCI TV
              </Link>
              {' | Co-Founder and CTO at '}
              <Link className='text-pink-500 dark:text-pink-500 hover:underline' href='https://dooke.app' target='_blank' rel='noreferrer'>
                Dooke
              </Link>
              {
                '. Software Engineer with 7+ years of experience in full-stack development, delivering high-quality solutions and driving successful collaborations.'
              }
            </p>
            <div className='flex items-center justify-center sm:justify-start flex-wrap gap-3 mt-2' data-testid='hero-actions'>
              <ToggleFocus
                side='top'
                className='border hover:shadow text-brand border-violet-600 hover:bg-violet-600 py-2 px-3.5 hover:text-white duration-500 transition-colors rounded-md cursor-pointer'
                trigger={
                  <div className='flex items-center gap-1' data-testid='hero-cv-trigger'>
                    <DownloadIcon />
                    <span>Resume/CV</span>
                  </div>
                }
              >
                <div className='bg-white dark:bg-slate-800 p-2 flex flex-col gap-y-2 shadow-1 rounded-md w-full min-w-[170px]'>
                  <a
                    href='/assets/docs/cv-French.pdf'
                    download
                    data-testid='hero-cv-french'
                    className='hover:bg-violet-600 py-2 px-3.5 rounded-md border border-violet-600 flex items-center gap-1 hover:shadow text-brand dark:bg-transparent dark:border-violet-400 dark:border-[1px] dark:hover:bg-brand hover:text-white dark:hover:border-brand duration-500 transition-colors'
                  >
                    <DownloadIcon />
                    <span>French</span>
                  </a>
                  <a
                    href='/assets/docs/cv-English.pdf'
                    download
                    data-testid='hero-cv-english'
                    className='hover:bg-pink-600 py-2 px-3.5 rounded-md border border-pink-600 flex items-center gap-1 hover:shadow text-pink-600 dark:bg-transparent dark:border-pink-400 dark:border-[1px] dark:hover:bg-brand hover:text-white dark:hover:border-brand duration-500 transition-colors'
                  >
                    <DownloadIcon />
                    <span>English</span>
                  </a>
                </div>
              </ToggleFocus>
              <LinkedIn />
              <a
                href='mailto:jhmcode.dev@gmail.com'
                data-testid='hero-contact'
                className='py-2 px-3.5 flex text-center justify-center items-center group gap-2 duration-500 transition-all border border-slate-300 dark:border-slate-600 hover:border-violet-500 dark:hover:border-violet-400 text-gray-900 dark:text-white hover:bg-violet-100 dark:hover:bg-slate-800 rounded-md'
              >
                <span>{"Let's talk"}</span>
                <span className='group-hover:translate-x-1 transition-transform duration-300' aria-hidden='true'>
                  &rarr;
                </span>
              </a>
            </div>
          </div>
        </div>
        <div
          className='relative w-full lg:max-w-[250px] bg-white dark:bg-slate-800 shadow-1 dark:shadow p-4 rounded-xl flex-col items-center justify-center hidden sm:flex'
          data-testid='hero-dooke-card'
        >
          <div className='text-balance text-center'>Download DooBible for free today</div>
          <DownloadApp className='flex-col sm:flex-col w-full' />
        </div>
      </div>
    </section>
  )
}

export default Header
