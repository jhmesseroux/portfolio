'use client'
import React from 'react'
import { CloseIcon } from '..'
import { useSidebar } from '@/context/SidebarContext'
interface Props extends React.HTMLAttributes<HTMLButtonElement> {}

const CloseModalSideBar = ({ className, children, ...rest }: Props) => {
  const { close } = useSidebar()
  return (
    <button className={className} aria-label='Close menu' data-testid='close-menu-button' onClick={close} {...rest}>
      {children ?? <CloseIcon />}
    </button>
  )
}

export default CloseModalSideBar
