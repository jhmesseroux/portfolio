'use client'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import LinkedInIcon from '../icons/socials/LinkedinIcon'
import LinkIcon from '../icons/LinkIcon'
import { IReview } from '@/interfaces'
import StarIcon from '../icons/StarIcon'
import Image from 'next/image'
import InstagramIcon from '../icons/socials/InstagramIcon'
import ChevronDownIcon from '../icons/ChevronDownIcon'
import ChevronLeftIcon from '../icons/ChevronLeftIcon'
import ChevronRightIcon from '../icons/ChevronRightIcon'
import { cn } from '@/helpers'

const MAX_REVIEW_LENGTH = 200
const AUTO_SCROLL_SPEED = 0.4

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

const Recommendations = ({ data }: { data: IReview[] }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const autoScrollRef = useRef<number | null>(null)
  const isPausedRef = useRef(false)
  const [mobileIndex, setMobileIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [mobilePaused, setMobilePaused] = useState(false)
  const elapsedRef = useRef(0)
  const dragState = useRef({ isDown: false, hasMoved: false, startX: 0, scrollLeft: 0 })
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([])

  const clearTimeouts = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout)
    timeoutsRef.current = []
  }, [])

  const addTimeout = useCallback((fn: () => void, ms: number) => {
    const id = setTimeout(fn, ms)
    timeoutsRef.current.push(id)
    return id
  }, [])

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // Cleanup all timeouts on unmount
  useEffect(() => clearTimeouts, [clearTimeouts])

  // Reset elapsed when index changes
  useEffect(() => {
    elapsedRef.current = 0
  }, [mobileIndex])

  // Mobile auto-advance with pause support
  useEffect(() => {
    if (!isMobile || data.length <= 1 || mobilePaused) return
    const startTime = Date.now()
    const remaining = Math.max(100, 10000 - elapsedRef.current)

    const timeout = setTimeout(() => {
      setMobileIndex((prev) => (prev >= data.length - 1 ? 0 : prev + 1))
    }, remaining)

    return () => {
      elapsedRef.current += Date.now() - startTime
      clearTimeout(timeout)
    }
  }, [isMobile, data.length, mobileIndex, mobilePaused])

  const halfWidthRef = useRef(0)

  const measureHalf = useCallback(() => {
    const el = containerRef.current
    if (!el) return
    const children = el.querySelectorAll('[data-testid^="review-item-"]')
    const originalCount = data.length
    let width = 0
    for (let i = 0; i < originalCount && i < children.length; i++) {
      width += (children[i] as HTMLElement).offsetWidth + 24
    }
    halfWidthRef.current = width
  }, [data.length])

  const loopScroll = useCallback(() => {
    const el = containerRef.current
    if (!el || halfWidthRef.current === 0) return
    const half = halfWidthRef.current
    if (el.scrollLeft >= half) {
      el.scrollLeft -= half
    } else if (el.scrollLeft <= 0) {
      el.scrollLeft += half
    }
  }, [])

  // Measure half width (debounced resize)
  useEffect(() => {
    if (isMobile) return
    measureHalf()
    let resizeTimer: ReturnType<typeof setTimeout>
    const onResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(measureHalf, 200)
    }
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
      clearTimeout(resizeTimer)
    }
  }, [isMobile, measureHalf])

  // Auto-scroll (desktop only)
  useEffect(() => {
    if (isMobile) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const tick = () => {
      const el = containerRef.current
      if (el && !isPausedRef.current) {
        el.scrollLeft += AUTO_SCROLL_SPEED
        loopScroll()
      }
      autoScrollRef.current = requestAnimationFrame(tick)
    }

    autoScrollRef.current = requestAnimationFrame(tick)
    return () => {
      if (autoScrollRef.current) cancelAnimationFrame(autoScrollRef.current)
    }
  }, [loopScroll, isMobile])

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    const el = containerRef.current
    if (!el) return
    isPausedRef.current = true
    dragState.current = { isDown: true, hasMoved: false, startX: e.clientX, scrollLeft: el.scrollLeft }
  }, [])

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragState.current.isDown) return
    const diff = Math.abs(e.clientX - dragState.current.startX)
    if (diff < 5) return
    dragState.current.hasMoved = true
    if (containerRef.current) containerRef.current.style.cursor = 'grabbing'
    const el = containerRef.current
    if (!el) return
    el.scrollLeft = dragState.current.scrollLeft - (e.clientX - dragState.current.startX)
    loopScroll()
  }, [loopScroll])

  const onPointerUp = useCallback(() => {
    dragState.current.isDown = false
    if (containerRef.current) containerRef.current.style.cursor = 'grab'
    addTimeout(() => {
      isPausedRef.current = false
    }, 2000)
  }, [addTimeout])

  const desktopScrollBy = useCallback((direction: 'left' | 'right') => {
    const el = containerRef.current
    if (!el) return
    isPausedRef.current = true
    const amount = direction === 'right' ? 350 : -350
    el.scrollBy({ left: amount, behavior: 'smooth' })
    addTimeout(() => {
      loopScroll()
      isPausedRef.current = false
    }, 800)
  }, [loopScroll, addTimeout])

  const mobileNav = useCallback((direction: 'left' | 'right') => {
    setMobilePaused(false)
    setMobileIndex((prev) => {
      if (direction === 'right') return prev >= data.length - 1 ? 0 : prev + 1
      return prev <= 0 ? data.length - 1 : prev - 1
    })
  }, [data.length])

  const onMouseEnter = useCallback(() => { isPausedRef.current = true }, [])
  const onMouseLeave = useCallback(() => { if (!dragState.current.isDown) isPausedRef.current = false }, [])

  const handleDotClick = useCallback((i: number) => {
    setMobilePaused(false)
    setMobileIndex(i)
  }, [])

  const onClickCapture = useCallback((e: React.MouseEvent) => {
    if (dragState.current.hasMoved) e.stopPropagation()
  }, [])

  const handleMobileNavLeft = useCallback(() => mobileNav('left'), [mobileNav])
  const handleMobileNavRight = useCallback(() => mobileNav('right'), [mobileNav])
  const handleDesktopLeft = useCallback(() => desktopScrollBy('left'), [desktopScrollBy])
  const handleDesktopRight = useCallback(() => desktopScrollBy('right'), [desktopScrollBy])

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

export default Recommendations

interface ReviewCardProps {
  review: IReview
  // eslint-disable-next-line no-unused-vars
  onExpandChange?: (v: boolean) => void
}

const ReviewCard = React.memo(({ review, onExpandChange }: ReviewCardProps) => {
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
