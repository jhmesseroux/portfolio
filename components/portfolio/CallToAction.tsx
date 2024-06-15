import React from 'react'
import LinkedIn from '../LinkedIn'

const CallToAction = () => {
  return (
    <div className='my-8 p-4'>
      <div className='bg-gradient dark:bg-red-300 flex items-start sm:items-center sm:gap-6 justify-between px-8 py-12 rounded-md flex-col  sm:flex-row gap-12'>
        <div className='flex flex-col gap-2 '>
          <h2 className='text-4xl font-semibold dark:text-white'>Building the Future Together</h2>
          <span className='text-lg font-normal text-slate-700 dark:text-white text-opacity-70 text-balance '>
            {`Whether it's a web app, mobile app, or custom software, we have the skills to make it happen. Let's discuss your project  today.`}
          </span>
        </div>
        <div className='flex items-center gap-4'>
          <LinkedIn
            icon={false}
            className='dark:bg-black/30 dark:text-white dark:hover:bg-black/50 dark:border-none dark:hover:text-blue-400'
          />
          <a
            href='mailto:jhmcode.dev@gmail.com'
            className='py-2 px-3.5 flex w-full sm:w-[125px] text-center justify-center items-center group gap-2 duration-700 transition-all  bg-brand2 dark:bg-slate-800 text-white hover:bg-violet-600  outline-none rounded dark:hover:bg-slate-900 dark:hover:text-white'
          >
            <span>Mail me</span>
            <span className='group-hover:opacity-90 transition-all  duration-1000 opacity-10'>&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default CallToAction
