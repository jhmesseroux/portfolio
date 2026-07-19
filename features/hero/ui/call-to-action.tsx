import React from 'react'
import { LinkedIn } from './linkedin-link'
import { cn } from '@/shared/utils'

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export const CallToAction = ({ className, ...rest }: Props) => {
  return (
    <div className={cn('my-8 sm:p-4 ', className)} {...rest} data-testid='cta-section'>
      <div className='relative shadow-2 hover:shadow-1 dark:shadow-md flex items-start sm:items-center sm:gap-6 justify-between p-4 md:px-8 md:py-12 rounded flex-col sm:flex-row gap-8 dark:bg-slate-900/40'>
        <div className='flex flex-col gap-4'>
          <h2 className='text-4xl font-semibold dark:text-white text-gradient'>Building the Future Together</h2>
          <span className='text-lg font-normal text-slate-700 dark:text-white text-opacity-70 text-balance'>
            {
              "Whether it's a web app, mobile app, or custom software, we have the skills to make it happen. Let's discuss your project today."
            }
          </span>
        </div>
        <div className='flex items-stretch gap-4 w-full sm:w-auto'>
          <LinkedIn
            icon={false}
            className='dark:bg-black/30 flex-1 justify-center dark:text-white dark:hover:bg-black/50 dark:border-none dark:hover:text-blue-400'
            data-testid='cta-linkedin'
          />
          <a
            href='mailto:jhmcode.dev@gmail.com'
            data-testid='cta-contact'
            className='py-2 px-3.5 flex-1 flex text-center justify-center items-center group gap-2 duration-500 transition-all border border-pink-500 text-pink-500 hover:bg-brand2 hover:text-white outline-none rounded dark:border-pink-400 dark:text-pink-400 dark:hover:bg-pink-600 dark:hover:text-white dark:hover:border-pink-600 whitespace-nowrap'
          >
            <span>{"Let's talk"}</span>
            <span className='group-hover:translate-x-1 transition-transform duration-300' aria-hidden='true'>
              &rarr;
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

