'use client'
import React, { useState } from 'react'
import { cn } from '@/shared/utils'
import { ChevronDownIcon } from '@/shared/icons'

interface CollapsibleTextProps {
  html: string
  maxLength?: number
  className?: string
}

const sanitize = (html: string) => html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')

export const CollapsibleText = ({ html, maxLength = 180, className }: CollapsibleTextProps) => {
  const [expanded, setExpanded] = useState(false)
  const plainText = html.replace(/<[^>]*>/g, '')
  const needsCollapse = plainText.length > maxLength

  return (
    <div>
      <div className='relative'>
        <div
          className={cn(
            'text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed',
            !expanded && needsCollapse && 'line-clamp-2',
            className
          )}
          dangerouslySetInnerHTML={{ __html: sanitize(html) }}
        />
        {needsCollapse && !expanded && (
          <div className='absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white dark:from-slate-900 to-transparent pointer-events-none' />
        )}
      </div>
      {needsCollapse && (
        <button
          type='button'
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); setExpanded(!expanded) }}
          className='flex items-center gap-1 mt-1 text-xs font-medium text-violet-500 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors'
        >
          <span>{expanded ? 'Show less' : 'Show more'}</span>
          <ChevronDownIcon className={cn('w-3.5 h-3.5 transition-transform duration-300', expanded && 'rotate-180')} />
        </button>
      )}
    </div>
  )
}

