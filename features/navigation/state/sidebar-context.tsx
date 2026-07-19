'use client'
import React, { createContext, useCallback, useContext, useState } from 'react'

interface SidebarContextProps {
  isOpen: boolean
  open: () => void
  close: () => void
}

const SidebarContext = createContext<SidebarContextProps>({
  isOpen: false,
  open: () => {},
  close: () => {}
})

export const useSidebar = () => useContext(SidebarContext)

export const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])

  return <SidebarContext.Provider value={{ isOpen, open, close }}>{children}</SidebarContext.Provider>
}

