'use client'
import React from 'react'
import { MenuIcon } from '..'
import { cn } from '@/helpers'
interface Props extends React.HTMLAttributes<HTMLElement> {}

const OpenModalButton = ({ className, ...rest }: Props) => {
  return (
    <button
      className={cn('flex sm:hidden', className)}
      {...rest}
      onClick={() =>
        document.querySelector('.mobile-sidebar')?.classList.add('active')
      }
    >
      <MenuIcon />
    </button>
  )
}

export default OpenModalButton
