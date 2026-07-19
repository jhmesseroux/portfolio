'use client'
import React from 'react'
import { cn } from '@/shared/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LazyMotion, domMax, m } from 'framer-motion'
import { StarIcon, BriefCaseIcon, CodeIcon, WhatsappIcon, HomeIcon } from '@/shared/icons'

interface Props extends React.HTMLAttributes<HTMLElement> {}

const tabs = [
  { href: '/', label: 'Home', icon: 'home', testId: 'menu-tab-home' },
  { href: '/projects', label: 'Projects', icon: 'star', testId: 'menu-tab-projects' },
  { href: '/mentorship', label: 'Mentorship', icon: 'mentorship', testId: 'menu-tab-mentorship' },
  { href: '/experiences', label: 'Experiences', icon: 'briefcase', testId: 'menu-tab-experiences' }
]

export const MenuTabs = ({ className }: Props) => {
  const pathname = usePathname()

  const renderIcon = (icon: string, active: boolean) => {
    const cls = cn('w-8 h-8 transition-colors duration-300 relative z-10', active ? 'text-white' : 'text-slate-600 dark:text-slate-300')
    if (icon === 'home') return <HomeIcon className={cls} />
    if (icon === 'star') return <StarIcon className={cls} />
    if (icon === 'briefcase') return <BriefCaseIcon className={cls} />
    if (icon === 'mentorship') return <CodeIcon className={cls} strokeWidth={1.5} />
    return null
  }

  return (
    <LazyMotion features={domMax} strict>
    <nav
      aria-label='Quick links'
      data-testid='menu-tabs'
      className={cn(
        'fixed bottom-0 left-0 right-0 sm:sticky sm:bottom-4 sm:left-auto sm:right-auto w-full md:w-fit md:mx-auto shadow-2 hover:shadow-1 sm:rounded-full rounded-none bg-white sm:bg-white/95 dark:bg-slate-900 sm:dark:bg-slate-800/95 z-50 px-3 py-2 flex items-center justify-center gap-2',
        'before:absolute before:bottom-full before:left-0 before:right-0 before:h-8 before:bg-gradient-to-t before:from-white dark:before:from-slate-900 before:to-transparent before:pointer-events-none sm:before:hidden',
        className
      )}
    >
      {tabs.map((tab) => {
        const active = pathname === tab.href
        return (
          <Link
            key={tab.href}
            href={tab.href}
            aria-label={tab.label}
            data-testid={tab.testId}
            className='relative flex items-center gap-2 rounded-full px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors'
          >
            {active && (
              <m.div
                layoutId='active-tab'
                className='absolute inset-0 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full shadow-sm'
                transition={{ type: 'tween', duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
            )}
            {renderIcon(tab.icon, active)}
            {active && <span className='text-sm font-medium pr-1 relative z-10 text-white'>{tab.label}</span>}
          </Link>
        )
      })}

      <Link
        href='https://wa.me/+15147027882'
        target='_blank'
        rel='noreferrer'
        aria-label='Contact on WhatsApp'
        data-testid='menu-tab-whatsapp'
        className='hidden sm:flex group items-center justify-center shrink-0 w-12 h-12 aspect-square bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 ml-1'
      >
        <WhatsappIcon className='w-6 h-6 text-white' />
      </Link>
    </nav>
    </LazyMotion>
  )
}

