'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Navbar } from './navbar'
import { CloseModalButton } from './close-modal-button'
import { Medias } from '@/features/hero/ui/medias'
import Link from 'next/link'
import { useSidebar } from '../state/sidebar-context'

export const MobileSideBar = () => {
  const { isOpen, close } = useSidebar()
  const sidebarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close()
        return
      }
      if (e.key === 'Tab' && sidebarRef.current) {
        const focusable = sidebarRef.current.querySelectorAll<HTMLElement>(
          'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
        )
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last?.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first?.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, close])

  if (!isOpen) return null

  return (
    <div className='fixed inset-0 z-[60]' role='dialog' aria-modal='true' aria-label='Navigation menu' data-testid='mobile-sidebar' ref={sidebarRef}>
      <div className='absolute inset-0 bg-black/40 backdrop-blur-[1px]' onClick={close} aria-hidden='true' />
      <div className='mobile-sidebar-container flex justify-between flex-col z-20 relative w-[70%] sm:w-[50%] lg:w-[350px] h-full bg-slate-50 dark:bg-slate-900 overflow-y-auto overflow-x-hidden'>
        <CloseModalButton className='absolute right-3 top-3 cursor-pointer hover:text-red-400' />
        <div>
          <div className='avatar flex items-center gap-2 border-b border-slate-300 dark:border-slate-700 p-3'>
            <div className='avatar-ring avatar-ring-sm rounded-full shrink-0'>
              <Image
                src={'/assets/images/me.png'}
                className='rounded-full overflow-hidden w-[50px] h-[50px] object-cover'
                alt='Avatar Jn. H. Messeroux'
                width={50}
                height={50}
              />
            </div>
            <div className='flex flex-col flex-1'>
              <span>Jean H. Messeroux</span>
              <span className='text-brand text-xs line-clamp-2'>
                Software Engineer | Senior Full Stack Developer at{' '}
                <Link className='text-pink-500 dark:text-pink-500 hover:underline' href='https://emcitv.com' target='_blank' rel='noreferrer'>
                  EMCI TV
                </Link>
              </span>
            </div>
          </div>

          <Navbar hiddenOnClick aria-label='Mobile navigation' />
        </div>
        <div className='p-4 flex items-center justify-center gap-6 flex-col w-full'>
          <Medias />
        </div>
      </div>
    </div>
  )
}

