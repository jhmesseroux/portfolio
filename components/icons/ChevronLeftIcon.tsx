import { cn } from '@/helpers'

const ChevronLeftIcon = ({ className, ...rest }: React.HTMLAttributes<SVGElement>) => {
  return (
    <svg
      className={cn('icon icon-tabler icon-tabler-chevron-left', className)}
      {...rest}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      strokeWidth='2'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M15 6l-6 6l6 6'></path>
    </svg>
  )
}

export default ChevronLeftIcon
