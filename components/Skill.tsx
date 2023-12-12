import { cn } from '@/helpers'
import React from 'react'
interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  skill: string
}
// border border-brand hover:bg-brand
const Skill = ({ skill, className, ...rest }: Props) => {
  return (
    <span
      {...rest}
      className={cn(
        'skill  duration-150 transition-colors to-slate-700 dark:to-slate-400 cursor-pointer borders hover:text-brand text-xs',
        className
      )}
    >
      {skill}
    </span>
  )
}

export default Skill
