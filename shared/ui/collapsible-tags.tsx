'use client'
import React, { useState } from 'react'
import { cn } from '@/shared/utils'
import { ChevronLeftIcon } from '@/shared/icons'

interface CollapsibleTagsProps {
  tags: string[]
  visibleCount?: number
  className?: string
  tagClassName?: string
}

export const CollapsibleTags = ({ tags, visibleCount = 3, className, tagClassName }: CollapsibleTagsProps) => {
  const [showAll, setShowAll] = useState(false)
  const displayed = showAll ? tags : tags.slice(0, visibleCount)

  return (
    <div className={cn('flex flex-wrap gap-1.5 items-center', className)}>
      {displayed.map((tag) => (
        <span
          key={tag}
          className={cn(
            'text-xs px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-violet-100 dark:hover:bg-violet-900/30 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-500 cursor-default',
            tagClassName
          )}
        >
          {tag}
        </span>
      ))}
      {tags.length > visibleCount && (
        <button
          type='button'
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); setShowAll(!showAll) }}
          className='text-xs px-2.5 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 hover:bg-violet-200 dark:hover:bg-violet-800/40 font-medium transition-transform duration-200 hover:scale-[1.15] active:scale-95'
        >
          {showAll ? <ChevronLeftIcon className='w-4 h-4' /> : `+${tags.length - visibleCount}`}
        </button>
      )}
    </div>
  )
}

