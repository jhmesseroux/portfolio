'use client'
import React from 'react'
import { CloseIcon } from '@/shared/icons'
import { useSidebar } from '../state/sidebar-context'
interface Props extends React.HTMLAttributes<HTMLButtonElement> {}

export const CloseModalButton = ({ className, children, ...rest }: Props) => {
  const { close } = useSidebar()
  return (
    <button className={className} aria-label='Close menu' data-testid='close-menu-button' onClick={close} {...rest}>
      {children ?? <CloseIcon />}
    </button>
  )
}

