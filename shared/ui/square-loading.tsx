import { cn } from '@/shared/utils'
import styles from './square-loading.module.css'
interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export const SquareLoading = ({ className, ...rest }: Props) => {
  return (
    <div className={cn(styles.loader, 'w-8 h-8 ', className)} {...rest}></div>
  )
}

