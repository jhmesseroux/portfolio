'use client'
import React, { useState, useRef, useEffect } from 'react'
import ChevronDownIcon from '../icons/ChevronDownIcon'
import { cn } from '@/lib/utils'

type Position = 'top' | 'bottom' | 'left' | 'right'

interface Props extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'> {
  trigger: string | React.ReactNode | React.ReactNode[] | React.ReactElement
  contentClassName?: string
  subContentClassName?: string
  icon?: React.ReactNode
  showIcon?: boolean
  onHover?: boolean
  side?: Position
  disabled?: boolean
  pointerClassName?: string
  pointerBorderColor?: string
  offset?: number
  callback?: () => void
}

const ToggleFocus = ({
  trigger,
  callback,
  contentClassName,
  icon,
  onHover = false,
  className,
  showIcon = true,
  disabled = false,
  side = 'bottom',
  offset = 8,
  children,
  pointerClassName,
  subContentClassName,
  pointerBorderColor = 'rgba(0,0,0,0.1)',
  ...rest
}: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [position, setPosition] = useState<Position>(side)
  const triggerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const updatePosition = () => {
    if (!triggerRef.current || !contentRef.current) return

    const triggerRect = triggerRef.current.getBoundingClientRect()
    const contentRect = contentRef.current.getBoundingClientRect()
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight

    const spaceAbove = triggerRect.top
    const spaceBelow = viewportHeight - triggerRect.bottom
    const spaceLeft = triggerRect.left
    const spaceRight = viewportWidth - triggerRect.right

    const spaces = {
      top: spaceAbove,
      bottom: spaceBelow,
      left: spaceLeft,
      right: spaceRight
    }

    const validPositions = Object.entries(spaces)
      .filter(([pos, space]) => {
        const dimension = pos === 'left' || pos === 'right' ? contentRect.width : contentRect.height
        return space >= dimension + offset
      })
      .map(([pos]) => pos as Position)

    if (validPositions.includes(side)) {
      setPosition(side)
    } else if (validPositions.length > 0) {
      setPosition(validPositions[0])
    }
  }

  useEffect(() => {
    if (isOpen) {
      updatePosition()
      window.addEventListener('scroll', updatePosition)
      window.addEventListener('resize', updatePosition)

      return () => {
        window.removeEventListener('scroll', updatePosition)
        window.removeEventListener('resize', updatePosition)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, side])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node) &&
        contentRef.current &&
        !contentRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
        // exec callback if provided
        if (callback) callback()
      }
    }

    if (!onHover && isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onHover, callback])

  const getContentStyles = (): React.CSSProperties => {
    const baseStyles: React.CSSProperties = {
      position: 'absolute',
      zIndex: 50
    }

    switch (position) {
      case 'top':
        return {
          ...baseStyles,
          bottom: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
          marginBottom: offset
        }
      case 'bottom':
        return {
          ...baseStyles,
          top: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
          marginTop: offset
        }
      case 'left':
        return {
          ...baseStyles,
          right: '100%',
          top: '50%',
          transform: 'translateY(-50%)',
          marginRight: offset
        }
      case 'right':
        return {
          ...baseStyles,
          left: '100%',
          top: '50%',
          transform: 'translateY(-50%)',
          marginLeft: offset
        }
      default:
        return baseStyles
    }
  }

  const getPointerStyles = (): React.CSSProperties => {
    const baseStyles: React.CSSProperties = {
      position: 'absolute',
      width: '12px',
      height: '12px',
      // backgroundColor: 'white',
      transform: 'rotate(45deg)',
      zIndex: 49
    }

    switch (position) {
      case 'top':
        return {
          ...baseStyles,
          bottom: '-6px',
          left: 'calc(50% - 6px)',
          borderRight: `1px solid ${pointerBorderColor}`,
          borderBottom: `1px solid ${pointerBorderColor}`
        }
      case 'bottom':
        return {
          ...baseStyles,
          top: '-6px',
          left: 'calc(50% - 6px)',
          borderLeft: `1px solid ${pointerBorderColor}`,
          borderTop: `1px solid ${pointerBorderColor}`
        }
      case 'left':
        return {
          ...baseStyles,
          right: '-6px',
          top: 'calc(50% - 6px)',
          borderTop: `1px solid ${pointerBorderColor}`,
          borderRight: `1px solid ${pointerBorderColor}`
        }
      case 'right':
        return {
          ...baseStyles,
          left: '-6px',
          top: 'calc(50% - 6px)',
          borderBottom: `1px solid ${pointerBorderColor}`,
          borderLeft: `1px solid ${pointerBorderColor}`
        }
      default:
        return baseStyles
    }
  }

  const getSafeAreaStyles = (): React.CSSProperties => {
    const baseStyles: React.CSSProperties = {
      position: 'absolute',
      zIndex: 48,
      backgroundColor: 'transparent'
    }

    switch (position) {
      case 'top':
        return {
          ...baseStyles,
          bottom: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100px',
          height: `${offset + 6}px` // Include pointer height
        }
      case 'bottom':
        return {
          ...baseStyles,
          top: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100px',
          height: `${offset + 6}px`
        }
      case 'left':
        return {
          ...baseStyles,
          right: '100%',
          top: '50%',
          transform: 'translateY(-50%)',
          height: '100px',
          width: `${offset + 6}px`
        }
      case 'right':
        return {
          ...baseStyles,
          left: '100%',
          top: '50%',
          transform: 'translateY(-50%)',
          height: '100px',
          width: `${offset + 6}px`
        }
      default:
        return baseStyles
    }
  }

  return (
    <div
      ref={triggerRef}
      className={`relative inline-block ${className || ''}`}
      onMouseEnter={() => onHover && setIsOpen(true)}
      onMouseLeave={() => onHover && setIsOpen(false)}
      {...rest}
    >
      <button disabled={disabled} type='button' className='flex items-center gap-1 w-full' onClick={() => !onHover && setIsOpen(!isOpen)}>
        {trigger}
        {showIcon && (icon || <ChevronDownIcon className='w-4 h-4' />)}
      </button>

      {isOpen && (
        <>
          {/* Safe area for mouse movement */}
          <div style={getSafeAreaStyles()} onMouseEnter={() => onHover && setIsOpen(true)} />

          <div
            ref={contentRef}
            style={getContentStyles()}
            className={`bg-white dark:bg-gray-800 rounded-md shadow-lg ${contentClassName || ''}`}
            onMouseEnter={() => onHover && setIsOpen(true)}
            onMouseLeave={() => onHover && setIsOpen(false)}
          >
            <div className={cn('dark:bg-gray-800 bg-white ', pointerClassName)} style={getPointerStyles()} />
            <div className={cn('w-full  max-h-[350px] overflow-y-auto ', subContentClassName)}>{children}</div>
          </div>
        </>
      )}
    </div>
  )
}

export default ToggleFocus
