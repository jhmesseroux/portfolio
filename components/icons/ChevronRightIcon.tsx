import { cn } from '@/helpers'

const ChevronRightIcon = ({ className, ...rest }: React.HTMLAttributes<SVGElement>) => {
  return (
    <svg
      className={cn('icon icon-tabler icon-tabler-chevron-right', className)}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...rest}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M9 6l6 6l-6 6'></path>
    </svg>
  )
}

export default ChevronRightIcon
