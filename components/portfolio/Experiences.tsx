import React from 'react'
import { BriefCaseIcon, Skill } from '..'
import Link from 'next/link'
import { cn } from '@/helpers'
import { IExperience } from '@/interfaces'
interface Props extends React.HTMLAttributes<HTMLHtmlElement> {
  data: IExperience[]
  showAll?: boolean
}

const Experiences = ({ data, showAll = false, className, ...rest }: Props) => {
  return (
    <section className={cn('experiences-container mt-8 md:p-4', className)} {...rest}>
      <div className='flex items-center justify-between gap-3 flex-wrap px-3'>
        <div className='experiences-header flex items-center justify-center gap-2 sm:gap-4 '>
          <span className='text-lg sm:text-3xl text-brand font-extrabold'>Experiences</span>
          <BriefCaseIcon />
        </div>
        {showAll && (
          <Link href='/experiences' className='hover:text-brand text-sm'>
            All &rsaquo;
          </Link>
        )}
      </div>
      <div className='experiences  gap-8 flex flex-wrap' id='experiences'>
        {data.map((item, i) => (
          <ExperienceItem key={i} item={item} />
        ))}
      </div>
    </section>
  )
}

export default Experiences

interface IExperienceItemProps extends React.HTMLAttributes<HTMLDivElement> {
  item: IExperience
}

const ExperienceItem = ({ item, className }: IExperienceItemProps) => {
  return (
    <div className={cn('rounded-lg w-full dark:hover:translate-y-1 experience dark:shadow-none ', className)}>
      <div className='flex flex-col  gap-2   group cursor-pointer hover:scale-[1.02]  shadow-2 hover:shadow-1 transition-all duration-500 p-6 rounded-lg bg-white dark:bg-slate-950 h-full'>
        <h3 className=' flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 text-slate-700 dark:text-slate-500 group-hover:text-brand dark:group-hover:text-violet-500 duration-500 transition-colors'>
          {item.demoLink ? (
            <Link href={item.demoLink} target='_blank'>
              <span className='font-bold text-lg sm:text-2xl'>{item.title}</span>
            </Link>
          ) : (
            <span className='font-bold text-lg sm:text-2xl'>{item.title}</span>
          )}
        </h3>
        <h5 className='flex sm:items-center gap-4 flex-col sm:flex-row justify-between'>
          <div className='flex items-center gap-1 '>
            <Link href={item?.companyLink || ''} className='group-hover:underline' target='_blank'>
              <span className=''>{item.companyName}</span>
            </Link>
            {' | '}
            <span className='group-hover:text-brand'> {item.experienceType}</span>
          </div>
          <span className='text-sm text-violet-400'>{item.location}</span>
        </h5>
        <div className='date text-sm text-slate-600 dark:text-slate-400 dark:text-opacity-60 group-hover:text-brand2 '>
          <span>
            {item.startMonth} {item.startYear} - {!item.current ? item.endMonth + ' ' + item.endYear : 'Present'}
          </span>
        </div>

        <div className='list-inside' dangerouslySetInnerHTML={{ __html: item.description }} />
        <div className='skills flex  gap-[2px] flex-wrap divide-x-2s divide-slate-300 dark:divide-slate-700'>
          <span className='text-xs'>Skills : </span>
          {item.skills.map((skill, index) => (
            <Skill key={skill} skill={skill + (index === item.skills.length - 1 ? '' : ' | ')} />
          ))}
        </div>
      </div>
    </div>
  )
}
