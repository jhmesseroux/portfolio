'use client'
import React from 'react'
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from '@/shared/icons'
import { cn } from '@/shared/utils'
import { IReview } from '../types'
import { useRecommendationsCarousel } from '../logic/use-recommendations-carousel.hook'
import { ReviewCard } from './review-card'

const scrollerMask = {
  maskImage: 'linear-gradient(90deg, transparent, white 5%, white 95%, transparent)',
  WebkitMaskImage: 'linear-gradient(90deg, transparent, white 5%, white 95%, transparent)'
} as const

const ArrowButton = ({ direction, onClick }: { direction: 'left' | 'right'; onClick: () => void }) => (
  <button
    type='button'
    aria-label={`Scroll ${direction}`}
    onClick={onClick}
    className={cn(
      'absolute top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/80 dark:bg-slate-800/80 shadow-md border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-violet-100 dark:hover:bg-violet-900/30 hover:border-violet-400 hover:scale-110 active:scale-95 transition-all duration-300',
      'w-10 h-10 opacity-60 hover:opacity-100 sm:hover:opacity-100',
      direction === 'left' ? 'left-1 sm:left-0' : 'right-1 sm:right-0',
      'sm:opacity-0 sm:group-hover/scroller:opacity-100'
    )}
  >
    {direction === 'left'
      ? <ChevronLeftIcon className='w-5 h-5 text-slate-600 dark:text-slate-300' />
      : <ChevronRightIcon className='w-5 h-5 text-slate-600 dark:text-slate-300' />
    }
  </button>
)

export const Recommendations = ({ data }: { data: IReview[] }) => {
  const {
    containerRef,
    mobileIndex,
    mobilePaused,
    setMobilePaused,
    handleDotClick,
    handleMobileNavLeft,
    handleMobileNavRight,
    handleDesktopLeft,
    handleDesktopRight,
    onPointerDown,
    onPointerMove,
    onPointerUp,
    onMouseEnter,
    onMouseLeave,
    onClickCapture
  } = useRecommendationsCarousel(data.length)

  return (
    <div className='my-20 p-3 md:p-4' id='recommendations' data-testid='recommendations-section'>
      <div className='flex items-center justify-between gap-3 flex-wrap mb-6'>
        <div className='flex items-center justify-center gap-2 sm:gap-4'>
          <span className='text-3xl text-brand font-extrabold'>Recommendations</span>
          <StarIcon className='w-8 text-4xl' />
        </div>
        <a
          href='https://www.linkedin.com/in/jhmesseroux/details/recommendations'
          target='_blank'
          rel='noreferrer'
          className='hover:text-brand text-sm border border-slate-200 dark:border-slate-700 px-3 py-1 rounded-full hover:border-violet-400 transition-colors duration-300'
        >
          View all on LinkedIn &rsaquo;
        </a>
      </div>

      {/* Mobile: single card carousel */}
      <div className='sm:hidden relative'>
        <div className='px-2 py-6 relative'>
          <ArrowButton direction='left' onClick={handleMobileNavLeft} />
          <ArrowButton direction='right' onClick={handleMobileNavRight} />
          <ReviewCard key={data[mobileIndex].id} review={data[mobileIndex]} onExpandChange={setMobilePaused} />
        </div>
        <div className='flex justify-center gap-1.5 mt-2 items-center'>
          {data.map((_, i) => (
            <button
              key={i}
              type='button'
              onClick={() => handleDotClick(i)}
              className={cn(
                'h-2.5 rounded-full transition-all duration-300 relative overflow-hidden',
                i === mobileIndex ? 'w-10 bg-slate-200 dark:bg-slate-700' : 'w-2.5 bg-slate-300 dark:bg-slate-600'
              )}
              aria-label={`Go to recommendation ${i + 1}`}
            >
              {i === mobileIndex && (
                <span
                  key={mobileIndex}
                  className='absolute inset-0 bg-violet-500 rounded-full origin-left'
                  style={{ animation: 'progress-fill 10s linear forwards', animationPlayState: mobilePaused ? 'paused' : 'running' }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop: infinite scroller */}
      <div className='hidden sm:block relative group/scroller'>
        <ArrowButton direction='left' onClick={handleDesktopLeft} />
        <ArrowButton direction='right' onClick={handleDesktopRight} />
        <div
          ref={containerRef}
          className='flex gap-6 items-start py-6 px-10 overflow-hidden select-none cursor-grab'
          style={scrollerMask}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onClickCapture={onClickCapture}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {data.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
          {data.map((review) => (
            <ReviewCard key={`dup-${review.id}`} review={review} />
          ))}
        </div>
      </div>
    </div>
  )
}
