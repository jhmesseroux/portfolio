import React from 'react'
import LinkedIn from '../LinkedIn'
import { BorderBeam } from '../magicui/border-beam'
import { cn } from '@/helpers'

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const CallToAction = ({ className, ...rest }: Props) => {
  return (
    <div className={cn('my-8 sm:p-4 ', className)} {...rest}>
      <div className='relative  shadow-2 hover:shadow-1 dark:shadow-md flex items-start sm:items-center sm:gap-6 justify-between p-4 md:px-8 md:py-12 rounded flex-col  sm:flex-row gap-8'>
        <div className='flex flex-col gap-4 '>
          <h2 className='text-4xl font-semibold dark:text-white text-gradient'>Building the Future Together</h2>
          <span className='text-lg font-normal text-slate-700 dark:text-white text-opacity-70 text-balance '>
            {`Whether it's a web app, mobile app, or custom software, we have the skills to make it happen. Let's discuss your project  today.`}
          </span>
        </div>
        <div className='flex items-center gap-4 w-full  sm:w-auto'>
          <LinkedIn
            icon={false}
            className='dark:bg-black/30 animate-pulse flex-1  dark:text-white dark:hover:bg-black/50 dark:border-none dark:hover:text-blue-400'
          />
          <a
            href='mailto:jhmcode.dev@gmail.com'
            className='py-2 px-3.5 flex-1 flex w-full sm:w-[125px] text-center justify-center items-center group gap-2 duration-700 transition-all  bg-brand2 dark:bg-slate-800 text-white hover:bg-pink-600  outline-none rounded dark:hover:bg-slate-900 dark:hover:text-white'
          >
            <span>Mail me</span>
            <span className='group-hover:opacity-90 transition-all animate-pulse  duration-1000 opacity-10'>&rarr;</span>
          </a>
          <BorderBeam />
          {/* <ShineBorder shineColor={['red', 'blue', 'yellow']} /> */}
        </div>
      </div>
    </div>
  )
}

export default CallToAction
