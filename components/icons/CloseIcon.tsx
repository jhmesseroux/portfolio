import { cn } from '@/helpers'
import React from 'react'
interface Props extends React.HTMLAttributes<SVGElement> {}

const CloseIcon = (props: Props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={cn(
        'icon icon-tabler icon-tabler-x cursor-pointer',
        props.className
      )}
      width='24'
      height='24'
      viewBox='0 0 24 24'
      strokeWidth='1'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M18 6l-12 12'></path>
      <path d='M6 6l12 12'></path>
    </svg>
  )
}

export default CloseIcon
