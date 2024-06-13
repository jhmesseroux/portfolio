import React from 'react'
import ExternalLinkIcon from './icons/ExternalLinkIcon'
import { cn } from '@/helpers'
import { LinkedInIcon } from './../components'

type Props = {
  className?: string
  text?: boolean
  externalLink?: boolean
  icon?: boolean
}

const LinkedIn = ({ externalLink = true, icon = true, text = true, className }: Props) => {
  return (
    <a
      href='https://www.linkedin.com/in/jhmesseroux/'
      target='_blank'
      className={cn(
        'hover:bg-blue-600 py-2 px-3.5 flex items-center text-blue-600  gap-1 rounded-[4px] hover:shadow border-blue-500  border  dark:bg-transparent dark:border-sky-300 dark:border-[1px] dark:hover:bg-blue-500 hover:text-white dark:hover:border-brand duration-500 transition-colors group',
        className
      )}
    >
      {icon && <LinkedInIcon className='text-blue-700 rounded-none w-6 group-hover:text-white' />}
      {text && <span>LinkedIn</span>}
      {externalLink && <ExternalLinkIcon />}
    </a>
  )
}

export default LinkedIn
