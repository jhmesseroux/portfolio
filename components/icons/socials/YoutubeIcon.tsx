import { cn } from '@/helpers'
import React from 'react'
interface Props extends React.HTMLAttributes<SVGElement> {}

const YoutubeIcon = ({ className, ...rest }: Props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={cn('icon icon-tabler icon-tabler-brand-youtube', className)}
      {...rest}
      width={24}
      height={24}
      viewBox='0 0 24 24'
      strokeWidth={1}
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z' />
      <path d='M10 9l5 3l-5 3z' />
    </svg>
  )
}

export default YoutubeIcon
