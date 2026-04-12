'use client'
import Link from 'next/link'
import React from 'react'
import { GithubIcon, ExternalLinkIcon } from '..'
import { IProject } from '@/interfaces'
import { cn, DOT } from '@/helpers'
import CollapsibleTags from '../global/CollapsibleTags'
import CollapsibleText from '../global/CollapsibleText'
import { AnimatePresence, motion } from 'framer-motion'
import SocialLink from './SocialLink'
import CodeIcon from '../icons/coding/CodeIcon'
import FadeInImage from '../global/FadeInImage'

interface Props extends React.HTMLAttributes<HTMLHtmlElement> {
  data: IProject[]
  showAll?: boolean
  headerRight?: React.ReactNode
}
const Projects = ({ data, showAll = false, headerRight, className, ...rest }: Props) => {
  const levelColor = (level: string) => {
    switch (level) {
      case 'Advanced':
        return 'text-red-500 dark:text-red-400'
      case 'Intermediate':
        return 'text-yellow-500 dark:text-yellow-300'
      case 'Beginner':
        return 'text-green-500 dark:text-green-400'
      default:
        return 'text-green-500 dark:text-green-400'
    }
  }

  return (
    <section {...rest} className={cn('p-3 md:p-4', className)} data-testid='projects-section'>
      <div className={cn(
        'flex items-center justify-between gap-3 flex-wrap mb-6 px-3 md:px-0',
        showAll && 'sticky top-[70px] z-30 bg-white/95 dark:bg-slate-950/95 backdrop-blur-sm py-3 md:static md:bg-transparent md:dark:bg-transparent md:backdrop-blur-none md:py-0'
      )}>
        <div className='projects-header flex items-center justify-center gap-2 md:gap-4'>
          <span className='text-3xl text-brand font-extrabold'>Projects</span>
          <CodeIcon />
        </div>
        {showAll && (
          <Link
            href='/projects'
            data-testid='projects-view-all'
            className='hover:text-brand text-sm border border-slate-200 dark:border-slate-700 px-3 py-1 rounded-full hover:border-violet-400 transition-colors duration-300'
          >
            View all &rsaquo;
          </Link>
        )}
        {headerRight}
      </div>
      <AnimatePresence mode='popLayout'>
      <div className={cn('projects grid grid-cols-1 md:grid-cols-2 gap-6', !showAll && 'lg:grid-cols-3')} id='projects'>
        {data.map((item) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
          <Link
            href={item.demoLink || item.gitFront || item.gitBack || '#'}
            target='_blank'
            rel='noreferrer'
            data-testid={`project-item-${item.id}`}
            className='project w-full flex flex-col rounded-md group cursor-pointer dark:border-slate-800 shadow-1 hover:-scale-1 transition-all duration-300 p-3 bg-white dark:bg-slate-900 hover:shadow-2'
          >
            <div className='overflow-hidden rounded-md relative'>
              <FadeInImage alt={item.title} path={item.photo} className='group-hover:scale-105 transition-transform duration-500' />
              <div className='hidden md:flex absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center gap-3 p-4 pt-10'>
                {item.demoLink && (
                  <a
                    href={item.demoLink}
                    target='_blank'
                    rel='noreferrer'
                    data-testid={`project-demo-${item.id}`}
                    className='flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white bg-gradient-to-r from-violet-500 to-pink-500 hover:from-violet-600 hover:to-pink-600 shadow-lg hover:scale-105 active:scale-95 transition-all duration-300'
                  >
                    <span>Live demo</span>
                    <ExternalLinkIcon className='w-3.5' />
                  </a>
                )}
                {item.gitBack && (
                  <a
                    href={item.gitBack}
                    target='_blank'
                    rel='noreferrer'
                    className='flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium text-white border border-white/30 hover:bg-white/20 hover:scale-105 active:scale-95 transition-all duration-300'
                  >
                    <GithubIcon className='w-4' />
                    <span>API</span>
                  </a>
                )}
                {item.gitFront && (
                  <a
                    href={item.gitFront}
                    target='_blank'
                    rel='noreferrer'
                    className='flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium text-white border border-white/30 hover:bg-white/20 hover:scale-105 active:scale-95 transition-all duration-300'
                  >
                    <GithubIcon className='w-4' />
                    <span>Web</span>
                  </a>
                )}
              </div>
            </div>
            <div className='details-project flex flex-col gap-1 flex-1 pt-3 pb-2'>
              <h3 className='font-bold text-lg md:text-xl text-slate-700 dark:text-slate-300 group-hover:text-brand dark:group-hover:text-violet-400 duration-300 transition-colors'>
                {item.title}
              </h3>
              <div className='flex items-center gap-1.5 text-sm flex-wrap'>
                <span className='text-slate-500 dark:text-slate-400'>
                  {item.startMonth} {item.startYear}
                  {item.current ? ' - Present' : item.endMonth && item.endYear ? ` - ${item.endMonth} ${item.endYear}` : ''}
                </span>
                <span className='text-slate-300 dark:text-slate-600'>{DOT}</span>
                <span className={levelColor(item.level) + ' text-sm'}>{item.level}</span>
              </div>
              <CollapsibleText html={item.description} maxLength={150} />
              <CollapsibleTags tags={item.skills} visibleCount={5} className='mt-3' />
              <div className='project-actions mt-auto pt-4 flex items-center gap-3 md:hidden'>
                {item.demoLink && (
                  <a
                    href={item.demoLink}
                    target='_blank'
                    rel='noreferrer'
                    data-testid={`project-demo-${item.id}`}
                    className='relative flex items-center justify-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r from-violet-500 to-pink-500 hover:from-violet-600 hover:to-pink-600 shadow-sm hover:shadow-md hover:shadow-violet-500/25 transition-all duration-300 hover:scale-[1.02] active:scale-95 flex-1'
                  >
                    <span>Live demo</span>
                    <ExternalLinkIcon className='w-3.5' />
                  </a>
                )}

                {item.gitBack && (
                  <SocialLink
                    Icon={GithubIcon}
                    className='border-slate-400 dark:border-slate-600 hover:border-brand hover:bg-slate-800 hover:text-white flex-1 !w-auto justify-center !rounded-full py-2'
                    title='Github API'
                    to={item.gitBack}
                  />
                )}
                {item.gitFront && (
                  <SocialLink
                    Icon={GithubIcon}
                    className='border-slate-400 dark:border-slate-600 hover:border-brand hover:bg-slate-800 hover:text-white flex-1 !w-auto justify-center !rounded-full py-2'
                    title='Github WEB'
                    to={item.gitFront}
                  />
                )}
              </div>
            </div>
          </Link>
          </motion.div>
        ))}
      </div>
      </AnimatePresence>
    </section>
  )
}

export default Projects
