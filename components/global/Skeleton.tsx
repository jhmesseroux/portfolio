import { cn } from '@/helpers'
import React from 'react'

const Skeleton = ({ className, ...rest }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn('h-2 bg-gray-300 rounded-full dark:bg-slate-700 animate-pulse', className)} {...rest} />
}

export default Skeleton
