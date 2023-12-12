import { cn } from '@/helpers'

interface Props extends React.HTMLAttributes<SVGElement> {}

const MenuIcon = ({ className, ...rest }: Props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={cn(
        'icon icon-tabler icon-tabler-menu-deep cursor-pointer',
        className
      )}
      {...rest}
      width='24'
      height='24'
      viewBox='0 0 24 24'
      strokeWidth='1'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M4 6h16'></path>
      <path d='M7 12h13'></path>
      <path d='M10 18h10'></path>
    </svg>
  )
}

export default MenuIcon
