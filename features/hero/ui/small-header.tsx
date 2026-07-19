'use client'
import React, { useEffect, useState } from 'react'
import { ThemeSwitcher } from '@/features/theme/ui/theme-switcher'
import { cn } from '@/shared/utils'
import { OpenModalButton } from '@/features/navigation/ui/open-modal-button'
import { Navbar } from '@/features/navigation/ui/navbar'
import Link from 'next/link'
import { FadeInImage } from '@/shared/ui/fade-in-image'
import { m, AnimatePresence, LayoutGroup, LazyMotion, domMax } from 'framer-motion'

interface Props extends React.HTMLAttributes<HTMLElement> {}
export const SmallHeader = ({ className }: Props) => {
  const [showAvatar, setShowAvatar] = useState(false)

  useEffect(() => {
    const heroAvatar = document.getElementById('hero-avatar')
    if (!heroAvatar) {
      setShowAvatar(true)
      return
    }

    let ticking = false
    const handleScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        setShowAvatar(window.scrollY > 150)
        ticking = false
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      role='banner'
      data-testid='small-header'
      className={cn(
        'bg-white/90 z-40 dark:bg-slate-800/90 px-6 py-3 flex items-center justify-between sticky top-0',
        className
      )}
    >
      <LazyMotion features={domMax} strict>
      <LayoutGroup>
        <m.div layout className='flex items-center gap-2' data-testid='small-header-avatar'>
          <AnimatePresence>
            {showAvatar && (
              <m.div
                key='header-avatar'
                layout
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                style={{ transformOrigin: 'left center' }}
                className='shrink-0'
              >
                <Link href='/' data-testid='small-header-home-link' className='block'>
                  <div className='avatar-ring avatar-ring-sm rounded-full'>
                    <FadeInImage
                      path='/assets/images/me.png'
                      imageAndBoxClassName='aspect-square rounded-full w-[50px] h-[50px]'
                      imageClassName='rounded-full'
                      alt='Avatar Jn. H. Messeroux'
                    />
                  </div>
                </Link>
              </m.div>
            )}
          </AnimatePresence>
          <m.div layout transition={{ duration: 0.4, ease: 'easeInOut' }} className='flex flex-col'>
            <Link href='/'>
              <span className='truncate max-w-[170px] md:max-w-full'>Jean H. Messeroux</span>
            </Link>
            <span className='text-brand text-xs truncate max-w-[140px] sm:max-w-full block'>
              <span className='sm:hidden'>Software Engineer</span>
              <span className='hidden sm:inline'>
                Senior Full Stack Developer at{' '}
                <Link
                  className='text-pink-500 dark:text-pink-500 hover:underline'
                  href='https://emcitv.com'
                  target='_blank'
                  rel='noreferrer'
                >
                  EMCI TV
                </Link>
              </span>
            </span>
          </m.div>
        </m.div>
      </LayoutGroup>
      </LazyMotion>
      <Navbar aria-label='Main navigation' ulClassName='flex-row' className='hidden md:flex mt-0' data-testid='small-header-nav' />
      <div className='flex items-center justify-center gap-x-2'>
        <ThemeSwitcher />
        <OpenModalButton />
      </div>
    </header>
  )
}

