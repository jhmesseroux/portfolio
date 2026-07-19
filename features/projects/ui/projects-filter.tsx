'use client'
import React, { useMemo, useState } from 'react'
import { IProject } from '../types'
import { Projects } from './projects'
import { cn } from '@/shared/utils'

const levels = ['All', 'Advanced', 'Intermediate', 'Beginner'] as const

export const ProjectsFilter = ({ data }: { data: IProject[] }) => {
  const [filter, setFilter] = useState<string>('All')
  const filtered = useMemo(() => (filter === 'All' ? data : data.filter((p) => p.level === filter)), [data, filter])

  const counts = useMemo(() => {
    const byLevel: Record<string, number> = { All: data.length }
    for (const level of levels) {
      if (level !== 'All') byLevel[level] = data.filter((p) => p.level === level).length
    }
    return byLevel
  }, [data])

  const applyFilter = (level: string) => {
    setFilter(level)
    const el = document.getElementById('projects')
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 140
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <Projects
      data={filtered}
      headerRight={
        <>
          {/* Mobile: select */}
          <select
            value={filter}
            onChange={(e) => applyFilter(e.target.value)}
            className='sm:hidden text-sm px-3 py-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 outline-none focus:border-violet-400'
          >
            {levels.map((level) => (
              <option key={level} value={level}>
                {level} ({counts[level]})
              </option>
            ))}
          </select>

          {/* Desktop: pills */}
          <div className='hidden sm:flex items-center gap-2 flex-wrap'>
            {levels.map((level) => (
              <button
                key={level}
                type='button'
                onClick={() => applyFilter(level)}
                className={cn(
                  'text-xs px-3 py-1 rounded-full border transition-colors duration-200',
                  filter === level
                    ? 'bg-violet-500 text-white border-violet-500'
                    : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-violet-400 hover:text-violet-500'
                )}
              >
                {level} <span className={cn('ml-0.5', filter === level ? 'text-white/70' : 'text-slate-400 dark:text-slate-500')}>({counts[level]})</span>
              </button>
            ))}
          </div>
        </>
      }
    />
  )
}

