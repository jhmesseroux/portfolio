'use client'
import React from 'react'
import { CloseIcon } from '..'
interface Props extends React.HTMLAttributes<HTMLButtonElement> {}

const CloseModalSideBar = ({ className, ...rest }: Props) => {
  return (
    <button
      className={className}
      {...rest}
      onClick={() =>
        document.querySelector('.mobile-sidebar')?.classList.remove('active')
      }
    >
      <CloseIcon />
    </button>
  )
}

export default CloseModalSideBar
