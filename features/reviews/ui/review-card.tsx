'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { LinkedInIcon, LinkIcon, InstagramIcon, ChevronDownIcon } from '@/shared/icons'
import { cn } from '@/shared/utils'
import { IReview } from '../types'

const MAX_REVIEW_LENGTH = 200

interface ReviewCardProps {
  review: IReview
  // eslint-disable-next-line no-unused-vars
  onExpandChange?: (v: boolean) => void
}

export const ReviewCard = React.memo(({ review, onExpandChange }: ReviewCardProps) => {
  const [expanded, setExpanded] = useState(false)
  const needsCollapse = review.review.length > MAX_REVIEW_LENGTH

  const toggleExpand = () => {
    const next = !expanded
    setExpanded(next)
    onExpandChange?.(next)
  }

  return (
    <div
      data-testid={`review-item-${review.id}`}
      className='group/card w-full sm:w-[380px] shrink-0 bg-white dark:bg-slate-900 shadow-1 p-5 relative rounded-xl border border-slate-100 dark:border-slate-800 hover:border-violet-200 dark:hover:border-violet-800/50 transition-all duration-300 flex flex-col'
    >
      <div className='absolute -top-5 left-4 w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center shadow-sm'>
        <span className='text-white text-xl'>&#10077;</span>
      </div>
      <div className='pt-2 pb-3 flex-1'>
        <div className='relative'>
          <p className='text-slate-700 dark:text-slate-400 text-base leading-relaxed'>
            {needsCollapse && !expanded ? review.review.slice(0, MAX_REVIEW_LENGTH) + '...' : review.review}
          </p>
          {needsCollapse && !expanded && (
            <div className='absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white dark:from-slate-900 to-transparent pointer-events-none' />
          )}
        </div>
        {needsCollapse && (
          <button
            type='button'
            onClick={toggleExpand}
            className='flex items-center gap-1 text-xs font-medium text-violet-500 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 mt-1 transition-colors'
          >
            <span>{expanded ? 'Show less' : 'Read more'}</span>
            <ChevronDownIcon className={cn('w-3.5 h-3.5 transition-transform duration-300', expanded && 'rotate-180')} />
          </button>
        )}
      </div>
      <hr className='dark:border-slate-800 border-slate-100' />
      <div className='flex items-center justify-between mt-3 gap-3'>
        <div className='flex items-center gap-2 min-w-0'>
          <div className='w-10 h-10 rounded-full overflow-hidden shrink-0 border-2 border-violet-200 dark:border-violet-800 group-hover/card:scale-110 group-hover/card:border-violet-400 dark:group-hover/card:border-violet-600 transition-all duration-300'>
            {review.author.image ? (
              <Image
                src={review.author.image}
                alt={review.author.name}
                width={40}
                height={40}
                className='w-full h-full rounded-full object-cover'
              />
            ) : (
              <div className='w-full h-full rounded-full flex items-center justify-center text-sm font-medium text-brand dark:text-slate-300 bg-violet-100 dark:bg-violet-600/20'>
                {review.author.name?.[0] ?? ''}
                {review.author.name?.split(' ')?.[1]?.[0] ?? ''}
              </div>
            )}
          </div>
          <div className='flex flex-col min-w-0'>
            <span className='font-medium text-sm dark:text-slate-300 truncate'>{review.author.name}</span>
            <span className='text-xs text-slate-500 dark:text-slate-500 truncate'>{review.author.position}</span>
          </div>
        </div>
        <div className='flex items-center gap-1.5 shrink-0'>
          {review.author.linkedIn && (
            <a
              href={review.author.linkedIn}
              target='_blank'
              rel='noreferrer'
              className='text-blue-500 dark:text-blue-400 w-8 h-8 rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:scale-110 transition-all duration-300'
            >
              <LinkedInIcon className='w-4' />
            </a>
          )}
          {review.author.instagram && (
            <a
              href={review.author.instagram}
              target='_blank'
              rel='noreferrer'
              className='text-pink-500 dark:text-pink-400 w-8 h-8 rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-700 hover:border-pink-400 dark:hover:border-pink-500 hover:bg-pink-50 dark:hover:bg-pink-900/20 hover:scale-110 transition-all duration-300'
            >
              <InstagramIcon className='w-4' />
            </a>
          )}
          {review.author.website && (
            <a
              href={review.author.website}
              target='_blank'
              rel='noreferrer'
              className='text-violet-500 dark:text-violet-400 w-8 h-8 rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-700 hover:border-violet-400 dark:hover:border-violet-500 hover:bg-violet-50 dark:hover:bg-violet-900/20 hover:scale-110 transition-all duration-300'
            >
              <LinkIcon className='w-4' />
            </a>
          )}
        </div>
      </div>
    </div>
  )
})

ReviewCard.displayName = 'ReviewCard'
