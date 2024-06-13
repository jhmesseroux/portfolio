import { cn } from '@/helpers'
import React from 'react'
interface Props extends React.HTMLAttributes<SVGElement> {}

const CodeIcon = ({ className, ...rest }: Props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
      className={cn('icon icon-tabler icons-tabler-outline icon-tabler-code', className)}
      {...rest}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M7 8l-4 4l4 4' />
      <path d='M17 8l4 4l-4 4' />
      <path d='M14 4l-4 16' />
    </svg>
  )
}

export default CodeIcon
