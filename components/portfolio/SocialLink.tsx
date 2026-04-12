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
      rel='noreferrer'
      {...rest}
      className={cn(
        'link-media group w-8 h-8 border flex items-center justify-center rounded-full p-1 hover:text-white duration-500 transition-all opacity-80 hover:opacity-100 hover:scale-110 cursor-pointer',
        className
      )}
    >
      <Icon />
    </a>
  )
}

export default SocialLink
