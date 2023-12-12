import { cn } from '@/helpers'
import styles from './SquareLoading.module.css'
interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const SquareLoading = ({ className, ...rest }: Props) => {
  return (
    <div className={cn(styles.loader, 'w-8 h-8 ', className)} {...rest}></div>
  )
}

export default SquareLoading
