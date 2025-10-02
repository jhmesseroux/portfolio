import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
interface Props extends React.HTMLAttributes<HTMLDivElement> {
  path: string | null | undefined
  width?: number
  height?: number
  text: string
}

const Avatar = ({ path, width = 40, height = 40, text, className }: Props) => {
  if (!!path)
    return (
      <Image
        src={path}
        alt={text}
        width={width}
        height={height}
        priority
        className={cn('rounded-full min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] dark:bg-dark1 shadow object-cover', className)}
      />
    )
  return (
    <div
      style={{ width: width, height: height }}
      className={cn(
        'rounded-full shadow-1  flex items-center justify-center border border-slate-200 dark:border-none  dark:bg-dark1 object-cover',
        className
      )}
    >
      <span>{text?.charAt(0).toUpperCase() + (text?.split(' ').length > 1 ? text.split(' ')[1][0] : '')}</span>
    </div>
  )
}

export default Avatar
