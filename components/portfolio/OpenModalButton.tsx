'use client'
import React from 'react'
import { MenuIcon } from '..'
import { cn } from '@/helpers'
import { useSidebar } from '@/context/SidebarContext'
interface Props extends React.HTMLAttributes<HTMLElement> {}

const OpenModalButton = ({ className, ...rest }: Props) => {
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

export default OpenModalButton
