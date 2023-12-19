import { cn } from '@/helpers'
import React from 'react'
interface Props extends React.HTMLAttributes<SVGElement> {}

const CssIcon = ({ className, ...rest }: Props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={cn('icon icon-tabler icon-tabler-brand-css3', className)}
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
      <path d='M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z' />
      <path d='M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5' />
    </svg>
  )
}

export default CssIcon
