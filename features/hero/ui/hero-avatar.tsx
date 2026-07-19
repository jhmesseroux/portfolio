'use client'
import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import { FadeInImage } from '@/shared/ui/fade-in-image'

export const HeroAvatar = () => {
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const inner = innerRef.current
    if (!inner) return

    let ticking = false
    const handleScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const progress = Math.max(0, Math.min(1, 1 - window.scrollY / 200))
        inner.style.opacity = `${progress}`
        inner.style.transform = `scale(${0.6 + progress * 0.4})`
        ticking = false
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className='shrink-0' id='hero-avatar'>
      <div ref={innerRef} className='will-change-transform'>
        <Link href='/' data-testid='hero-avatar-link' className='block'>
          <div className='avatar-ring rounded-full'>
            <FadeInImage
              path='/assets/images/me.png'
              imageAndBoxClassName='aspect-square rounded-full w-[140px] h-[140px] sm:w-[160px] sm:h-[160px]'
              imageClassName='rounded-full'
              alt='Jean Hilaire Messeroux'
            />
          </div>
        </Link>
      </div>
    </div>
  )
}

