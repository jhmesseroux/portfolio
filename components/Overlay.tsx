'use client'
import { cn } from '@/helpers'
import React from 'react'
interface Props extends React.HTMLAttributes<HTMLDivElement> {
  elementClass: string
}

const Overlay = ({ className, elementClass, ...rest }: Props) => {
  const closeSideBar = () =>
    document.querySelector('.' + elementClass)?.classList.remove('active')

  return (
    <div
      {...rest}
      onClick={closeSideBar}
      className={cn(
        'overlay absolute left-0  top-0 bg-black/40  h-full z-10  w-full backdrop-blur-[1px]',
        className
      )}
    />
  )
}

export default Overlay
