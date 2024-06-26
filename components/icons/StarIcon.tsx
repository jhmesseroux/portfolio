import { cn } from '@/helpers'

interface Props extends React.HTMLAttributes<SVGElement> {}

const StarIcon = ({ className, ...rest }: Props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className={cn('icon icon-tabler icon-tabler-jewish-star', className)}
    width='24'
    height='24'
    viewBox='0 0 24 24'
    strokeWidth='1'
    stroke='currentColor'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
    {...rest}
  >
    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
    <path d='M12 2l3 5h6l-3 5l3 5h-6l-3 5l-3 -5h-6l3 -5l-3 -5h6z'></path>
  </svg>
)

export default StarIcon
