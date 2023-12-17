'use client'
import React from 'react'
import { CloseIcon } from '..'
interface Props extends React.HTMLAttributes<HTMLButtonElement> {}

const CloseModalSideBar = ({ className, children, ...rest }: Props) => {
  return (
    <button className={className} {...rest} onClick={() => document.querySelector('.mobile-sidebar')?.classList.remove('active')}>
      {children ?? <CloseIcon />}
    </button>
  )
}

export default CloseModalSideBar
