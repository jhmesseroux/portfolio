'use client'
import React from 'react'
import { MenuIcon } from '@/shared/icons'
import { cn } from '@/shared/utils'
import { useSidebar } from '../state/sidebar-context'
interface Props extends React.HTMLAttributes<HTMLElement> {}

export const OpenModalButton = ({ className, ...rest }: Props) => {
  const { open, isOpen } = useSidebar()
  return (
    <button
      className={cn('flex md:hidden', className)}
      aria-label='Open menu'
      data-testid='open-menu-button'
      aria-expanded={isOpen}
      onClick={open}
      {...rest}
    >
      <MenuIcon />
    </button>
  )
}

