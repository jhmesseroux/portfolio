import Link from 'next/link'
import React from 'react'
import { Skill, GithubIcon, ExternalLinkIcon } from '..'
import { IProject } from '@/interfaces'
import { cn } from '@/helpers'
import SocialLink from './SocialLink'
import CodeIcon from '../icons/coding/CodeIcon'
import FadeInImage from '../global/FadeInImage'
interface Props extends React.HTMLAttributes<HTMLHtmlElement> {
  data: IProject[]
  showAll?: boolean
}
const Projects = ({ data, showAll = false, className, ...rest }: Props) => {
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
    <section {...rest} className={cn('mt-8 p-4 ', className)}>
      <div className='flex items-center justify-between gap-3 flex-wrap'>
        <div className='projects-header flex items-center justify-center gap-2 md:gap-4'>
          <span className='text-lg md:text-3xl text-brand font-extrabold'>Projects</span>
          <CodeIcon />
        </div>
        {showAll && (
          <Link href='/projects' className='hover:text-brand text-sm'>
            All &rsaquo;
          </Link>
        )}
      </div>
      <div className='projects flex flex-col gap-6 my-6' id='projects'>
        {data.map((item) => (
          <div
            key={item.title}
            className='project   w-full flex flex-col rounded-xl   group cursor-pointer overflow-hidden shadow-2 hover:shadow-1'
          >
            <FadeInImage alt={item.title} path={item.photo} />
            <div className='details-project  flex flex-col gap-1 flex-1 px-4 pt-2 pb-6'>
              <h3 className='font-bold text-lg md:text-2xl text-slate-700 dark:text-slate-400 group-hover:text-brand duration-500 transition-colors'>
                {item.title}
              </h3>
              <div className='flex items-center  gap-2'>
                <span className='date text-sm text-slate-600 dark:text-slate-400 '>
                  {item.startMonth} {item.startYear} - {!item.current ? item.endMonth + ' ' + item.endYear : 'Present'}
                </span>
                <span>|</span>
                <span className={levelColor(item.level) + ' text-sm'}>{item.level}</span>
              </div>
              <div dangerouslySetInnerHTML={{ __html: item.description }} />
              <div className='skills flex  gap-[2px] flex-wrap'>
                <span className='text-xs'>Skills : </span>
                {item.skills.map((skill, index) => (
                  <Skill key={skill} skill={skill + (item.skills.length !== index + 1 ? ' | ' : '')} />
                ))}
              </div>
              <div className='project-actions mt-3 flex items-center gap-6 flex-wrap'>
                {item.demoLink && (
                  <a
                    href={item.demoLink}
                    target='_blank'
                    className='hover:border-none border-brand border-[1px] text-brand flex items-center w-fit gap-1 hover:text-white duration-300 transition-colors px-2.5 py-1.5 rounded-[4px] shadow animatedBorder'
                  >
                    {/* <LinkIcon /> */}
                    <span>See the demo</span>
                    <ExternalLinkIcon className='w-4' />
                  </a>
                )}

                {item.gitBack && (
                  <SocialLink
                    Icon={GithubIcon}
                    className='border-slate-500 hover:border-brand hover:bg-slate-800 animatedBorder'
                    title='Github API'
                    to={item.gitBack}
                  />
                )}
                {item.gitFront && (
                  <SocialLink
                    Icon={GithubIcon}
                    className='border-slate-500 hover:border-brand hover:bg-slate-800 animatedBorder'
                    title='Github WEB'
                    to={item.gitFront}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
