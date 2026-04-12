'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { cn, DOT } from '@/helpers'
import { IExperience } from '@/interfaces'
import ChevronDownIcon from '../icons/ChevronDownIcon'
import CollapsibleTags from '../global/CollapsibleTags'

const VISIBLE_ITEMS = 2

const sanitize = (html: string) => html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')

const ExperienceCard = ({ item }: { item: IExperience }) => {
  const [expanded, setExpanded] = useState(false)

  const liMatches = item.description.match(/<li[\s>]/gi)
  const liCount = liMatches ? liMatches.length : 0
  const needsCollapse = liCount > VISIBLE_ITEMS

  const collapsedHtml = needsCollapse
    ? item.description.replace(/<li[\s\S]*$/i, (match) => {
        let count = 0
        return match.replace(/<li[\s>][\s\S]*?<\/li>/gi, (li) => {
          count++
          return count <= VISIBLE_ITEMS ? li : ''
        })
      })
    : item.description

  return (
    <div
      className={cn(
        'group rounded-xl p-5 sm:p-6 transition-all duration-300 border border-opacity-5  bg-white dark:bg-slate-900',
        item.current
          ? 'border-violet-200 dark:border-violet-800/50 hover:border-violet-400 dark:hover:border-violet-600 shadow-1 hover:shadow-2'
          : 'border-slate-100 border-opacity-70 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-2s hover:shadow-1'
      )}
    >
      <div className='flex flex-col gap-1 mb-2'>
        <div className='flex items-center gap-2 flex-wrap'>
          {item.demoLink ? (
            <Link href={item.demoLink} target='_blank' rel='noreferrer'>
              <h3 className='font-bold text-lg sm:text-xl text-slate-800 dark:text-slate-300 group-hover:text-brand dark:group-hover:text-violet-400 transition-colors duration-300'>
                {item.title}
              </h3>
            </Link>
          ) : (
            <h3 className='font-bold text-lg sm:text-xl text-slate-800 dark:text-slate-300 group-hover:text-brand dark:group-hover:text-violet-400 transition-colors duration-300'>
              {item.title}
            </h3>
          )}
          {item.current && (
            <span className='text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-violet-100 text-violet-600 dark:bg-violet-900/40 dark:text-violet-400'>
              Current
            </span>
          )}
        </div>
        <div className='flex items-center gap-1.5 text-sm flex-wrap'>
          {item.companyLink ? (
            <Link
              href={item.companyLink}
              className='font-medium text-slate-600 dark:text-slate-400 hover:text-brand transition-colors'
              target='_blank'
              rel='noreferrer'
            >
              {item.companyName}
            </Link>
          ) : (
            <span className='font-medium text-slate-600 dark:text-slate-400'>{item.companyName}</span>
          )}
          <span className='text-slate-400 dark:text-slate-600'>{DOT}</span>
          <span className='text-slate-500 dark:text-slate-500'>{item.experienceType}</span>
        </div>
      </div>

      {/* Description */}
      <div className='relative'>
        <div
          className='text-sm text-slate-600 dark:text-slate-400 mt-3 leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-1 [&_li]:list-inside'
          dangerouslySetInnerHTML={{ __html: sanitize(expanded ? item.description : collapsedHtml) }}
        />
        {needsCollapse && !expanded && (
          <div className='absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white dark:from-slate-900 to-transparent pointer-events-none' />
        )}
      </div>

      {needsCollapse && (
        <button
          type='button'
          onClick={() => setExpanded(!expanded)}
          className='flex items-center gap-1 mt-2 text-xs font-medium text-violet-500 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors'
        >
          <span>{expanded ? 'Show less' : 'Show more'}</span>
          <ChevronDownIcon className={cn('w-4 h-4 transition-transform duration-300', expanded && 'rotate-180')} />
        </button>
      )}

      <CollapsibleTags tags={item.skills} visibleCount={3} className='mt-4' />
    </div>
  )
}

export default ExperienceCard
