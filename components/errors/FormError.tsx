import { cn } from '@/helpers'
import React from 'react'

export interface ErrorBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string
  border?: boolean
}
const FormError = ({ className, text, border = false, ...rest }: ErrorBoxProps) => {
  return (
    <div className={cn('my-2 w-full p-1.5 text-center', className, border && 'border-dashed border-[1px] border-red-200')} {...rest}>
      <span className={`text-red-500 dark:text-red-300 `}>{text}</span>
    </div>
  )
}

export default FormError
