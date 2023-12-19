import { cn } from '@/helpers'
import React from 'react'
interface Props extends React.HTMLAttributes<SVGElement> {}

const EducationIcon = ({ className, ...rest }: Props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={cn('icon icon-tabler icon-tabler-school', className)}
      width={24}
      height={24}
      viewBox='0 0 24 24'
      strokeWidth={1}
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...rest}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M22 9l-10 -4l-10 4l10 4l10 -4v6' />
      <path d='M6 10.6v5.4a6 3 0 0 0 12 0v-5.4' />
    </svg>
  )
}

export default EducationIcon
