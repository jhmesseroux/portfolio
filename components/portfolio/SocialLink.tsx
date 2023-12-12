import { cn } from '@/helpers'
import React from 'react'

interface Props extends React.HTMLAttributes<HTMLAnchorElement> {
  Icon: React.FC<React.HTMLAttributes<SVGElement>>
  to: string
}

const SocialLink = ({ Icon, className, to, ...rest }: Props) => {
  return (
    <a
      href={to}
      target='_blank'
      //   title='Youtube'
      {...rest}
      className={cn(
        'link-media group w-8 h-8 hover:w-fit border  flex items-center justify-center rounded-full p-1   hover:text-white duration-500 transition-colors opacity-80 hover:opacity-100 cursor-pointer=',
        className
      )}
    >
      {<Icon />}
      {/* <span className='group-hover:flex translate-y-5 group-hover:translate-y-0 hidden '>
      Github
    </span> */}
    </a>
  )
}

export default SocialLink
