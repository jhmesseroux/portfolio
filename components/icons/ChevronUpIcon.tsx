import { cn } from '@/helpers'

const ChevronUpIcon = ({ className, ...rest }: React.HTMLAttributes<SVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className={cn('icon icon-tabler-chevron-up', className)}
    width='24'
    height='24'
    viewBox='0 0 24 24'
    strokeWidth='2'
    stroke='currentColor'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
    {...rest}
  >
    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
    <path d='M6 15l6 -6l6 6'></path>
  </svg>
)

export default ChevronUpIcon
