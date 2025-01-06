import React from 'react'
import { CopyButton } from '..'
import Medias from './Medias'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage: 'url(/assets/images/dots-curve-bg.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      className='p-6 mb-12 flex flex-col gap-6 items-center justify-start sm:justify-center mt-auto relative'
    >
      <Medias />

      <div className='contact-form '>
        <fieldset className='flex items-center flex-col sm:flex-row gap-6'>
          <div className='flex items-center'>
            <CopyButton />
            <input
              type='email'
              value='jhmcode.dev@gmail.com'
              placeholder='jhmcode.dev@gmail.com'
              title='jhmcode.dev@gmail.com'
              readOnly
              disabled
              className='bg-transparent border border-l-0 border-slate-300 dark:border-slate-700 p-2   truncate w-full sm:w-[200px]'
            />
          </div>
          <a
            href='mailto:jhmcode.dev@gmail.com'
            className='p-2 flex w-full sm:w-[125px] text-center justify-center items-center group gap-2 duration-500 transition-all border border-l-0 border-slate-300 dark:border-slate-700 bg-brand text-white hover:bg-violet-600 sm:hover:w-[130px]'
          >
            <span>Contact us</span>
            <span className='group-hover:opacity-90 transition-all group-hover:w-fit w-0 duration-1000 opacity-10'>&rarr;</span>
          </a>
        </fieldset>
      </div>
      <div className='version flex items-center gap-1.5 flex-wrap justify-center'>
        <strong>Location : </strong>
        <span className='text-brand'>Montreal,Canada</span>
      </div>
      <div className='relative w-full  items-center flex justify-center mt-6'>
        <div className='lg:absolute lg:right-8 lg:bottom-0 download-dooke-links w-full sm:w-[170px] self-end shadow-1 dark:shadow p-4 rounded-xl flex flex-col items-center justify-center'>
          <div className='text-balance text-center'>Download Dooke for free today</div>
          <Image src={'/assets/images/dookeapp.png'} alt='Dooke App' className='mt-4' width={150} height={150} />
        </div>
      </div>
      <div
        id='GodsWord'
        className='flex flex-col bg-white shadow-1 p-4 rounded-xl w-full sm:max-w-[420px] dark:bg-gray-900 dark:shadow m-8'
      >
        <span className='font-bold'>John 3:16 NIV</span>
        <div className='text-balance'>
          For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.
        </div>
      </div>
    </footer>
  )
}

export default Footer
