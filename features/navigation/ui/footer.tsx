import React from 'react'
import { Medias } from '@/features/hero/ui/medias'

export const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage: 'url(/assets/images/dots-curve-bg.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      className='p-6 mb-14 sm:mb-12 flex flex-col gap-6 items-center justify-start sm:justify-center mt-auto relative'
      data-testid='footer'
    >
      <Medias />

      <div
        id='GodsWord'
        className='relative bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-2xl w-full sm:max-w-[460px] m-8'
        data-testid='footer-verse'
      >
        <div className='absolute -top-4 left-6 px-3 py-1 bg-gradient-to-r from-violet-500 to-pink-500 text-white text-xs font-semibold rounded-full shadow-sm'>
          John 3:16
        </div>
        <p className='mt-2 text-slate-700 dark:text-slate-400 text-base leading-relaxed italic'>
          {'"For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life."'}
        </p>
        <span className='text-xs text-slate-400 dark:text-slate-500 mt-3 block text-right'>— NIV</span>
      </div>
    </footer>
  )
}

