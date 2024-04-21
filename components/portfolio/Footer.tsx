import React from 'react'
import { CopyButton } from '..'
import Medias from './Medias'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage: 'url(/assets/images/square.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className='p-6 mb-6  flex flex-col gap-6 items-center justify-start sm:justify-center mt-auto'
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
      <div className='version flex items-center gap-3 flex-wrap justify-center'>
        <Link target='_blank' className='text-xs hover:text-brand hover:underline' href={'https://previous.jhmesseroux.com'}>
          <span>Previous Versions</span>
        </Link>
        <span></span>
      </div>
    </footer>
  )
}

export default Footer
