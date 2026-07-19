'use client'
import { useCallback, useEffect, useRef, useState } from 'react'

const AUTO_SCROLL_SPEED = 0.4

export const useRecommendationsCarousel = (itemCount: number) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const autoScrollRef = useRef<number | null>(null)
  const isPausedRef = useRef(false)
  const [mobileIndex, setMobileIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [mobilePaused, setMobilePaused] = useState(false)
  const elapsedRef = useRef(0)
  const dragState = useRef({ isDown: false, hasMoved: false, startX: 0, scrollLeft: 0 })
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([])

  const clearTimeouts = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout)
    timeoutsRef.current = []
  }, [])

  const addTimeout = useCallback((fn: () => void, ms: number) => {
    const id = setTimeout(fn, ms)
    timeoutsRef.current.push(id)
    return id
  }, [])

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // Cleanup all timeouts on unmount
  useEffect(() => clearTimeouts, [clearTimeouts])

  // Reset elapsed when index changes
  useEffect(() => {
    elapsedRef.current = 0
  }, [mobileIndex])

  // Mobile auto-advance with pause support
  useEffect(() => {
    if (!isMobile || itemCount <= 1 || mobilePaused) return
    const startTime = Date.now()
    const remaining = Math.max(100, 10000 - elapsedRef.current)

    const timeout = setTimeout(() => {
      setMobileIndex((prev) => (prev >= itemCount - 1 ? 0 : prev + 1))
    }, remaining)

    return () => {
      elapsedRef.current += Date.now() - startTime
      clearTimeout(timeout)
    }
  }, [isMobile, itemCount, mobileIndex, mobilePaused])

  const halfWidthRef = useRef(0)

  const measureHalf = useCallback(() => {
    const el = containerRef.current
    if (!el) return
    const children = el.querySelectorAll('[data-testid^="review-item-"]')
    let width = 0
    for (let i = 0; i < itemCount && i < children.length; i++) {
      width += (children[i] as HTMLElement).offsetWidth + 24
    }
    halfWidthRef.current = width
  }, [itemCount])

  const loopScroll = useCallback(() => {
    const el = containerRef.current
    if (!el || halfWidthRef.current === 0) return
    const half = halfWidthRef.current
    if (el.scrollLeft >= half) {
      el.scrollLeft -= half
    } else if (el.scrollLeft <= 0) {
      el.scrollLeft += half
    }
  }, [])

  // Measure half width (debounced resize)
  useEffect(() => {
    if (isMobile) return
    measureHalf()
    let resizeTimer: ReturnType<typeof setTimeout>
    const onResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(measureHalf, 200)
    }
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
      clearTimeout(resizeTimer)
    }
  }, [isMobile, measureHalf])

  // Auto-scroll (desktop only)
  useEffect(() => {
    if (isMobile) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const tick = () => {
      const el = containerRef.current
      if (el && !isPausedRef.current) {
        el.scrollLeft += AUTO_SCROLL_SPEED
        loopScroll()
      }
      autoScrollRef.current = requestAnimationFrame(tick)
    }

    autoScrollRef.current = requestAnimationFrame(tick)
    return () => {
      if (autoScrollRef.current) cancelAnimationFrame(autoScrollRef.current)
    }
  }, [loopScroll, isMobile])

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    const el = containerRef.current
    if (!el) return
    isPausedRef.current = true
    dragState.current = { isDown: true, hasMoved: false, startX: e.clientX, scrollLeft: el.scrollLeft }
  }, [])

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!dragState.current.isDown) return
      const diff = Math.abs(e.clientX - dragState.current.startX)
      if (diff < 5) return
      dragState.current.hasMoved = true
      if (containerRef.current) containerRef.current.style.cursor = 'grabbing'
      const el = containerRef.current
      if (!el) return
      el.scrollLeft = dragState.current.scrollLeft - (e.clientX - dragState.current.startX)
      loopScroll()
    },
    [loopScroll]
  )

  const onPointerUp = useCallback(() => {
    dragState.current.isDown = false
    if (containerRef.current) containerRef.current.style.cursor = 'grab'
    addTimeout(() => {
      isPausedRef.current = false
    }, 2000)
  }, [addTimeout])

  const desktopScrollBy = useCallback(
    (direction: 'left' | 'right') => {
      const el = containerRef.current
      if (!el) return
      isPausedRef.current = true
      const amount = direction === 'right' ? 350 : -350
      el.scrollBy({ left: amount, behavior: 'smooth' })
      addTimeout(() => {
        loopScroll()
        isPausedRef.current = false
      }, 800)
    },
    [loopScroll, addTimeout]
  )

  const mobileNav = useCallback(
    (direction: 'left' | 'right') => {
      setMobilePaused(false)
      setMobileIndex((prev) => {
        if (direction === 'right') return prev >= itemCount - 1 ? 0 : prev + 1
        return prev <= 0 ? itemCount - 1 : prev - 1
      })
    },
    [itemCount]
  )

  const onMouseEnter = useCallback(() => {
    isPausedRef.current = true
  }, [])
  const onMouseLeave = useCallback(() => {
    if (!dragState.current.isDown) isPausedRef.current = false
  }, [])

  const handleDotClick = useCallback((i: number) => {
    setMobilePaused(false)
    setMobileIndex(i)
  }, [])

  const onClickCapture = useCallback((e: React.MouseEvent) => {
    if (dragState.current.hasMoved) e.stopPropagation()
  }, [])

  const handleMobileNavLeft = useCallback(() => mobileNav('left'), [mobileNav])
  const handleMobileNavRight = useCallback(() => mobileNav('right'), [mobileNav])
  const handleDesktopLeft = useCallback(() => desktopScrollBy('left'), [desktopScrollBy])
  const handleDesktopRight = useCallback(() => desktopScrollBy('right'), [desktopScrollBy])

  return {
    containerRef,
    mobileIndex,
    mobilePaused,
    setMobilePaused,
    handleDotClick,
    handleMobileNavLeft,
    handleMobileNavRight,
    handleDesktopLeft,
    handleDesktopRight,
    onPointerDown,
    onPointerMove,
    onPointerUp,
    onMouseEnter,
    onMouseLeave,
    onClickCapture
  }
}
