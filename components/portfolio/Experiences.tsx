import React from 'react'
import { BriefCaseIcon, Skill } from '..'
import Link from 'next/link'
import { cn } from '@/helpers'
import { IExperience } from '@/interfaces'
import { BorderBeam } from '../magicui/border-beam'
interface Props extends React.HTMLAttributes<HTMLHtmlElement> {
  data: IExperience[]
  showAll?: boolean
}

const Experiences = ({ data, showAll = false, className, ...rest }: Props) => {
  const firstItem = data[0]
  const restItems = data.slice(1)
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
      {/* first item */}
      {firstItem && (
        <div className='relative '>
          <ExperienceItem item={firstItem} className='flex-grow col-span-2 my-6' />
          <BorderBeam />
        </div>
      )}

      <div className='experiences  gap-8 flex flex-wrap' id='experiences'>
        {/* grid grid-cols-1 md:grid-cols-2 */}
        {restItems.slice(0, 4).map((item, i) => (
          <ExperienceItem
            key={i}
            item={item}
            className={cn('', {
              'w-full md:w-[430px]': i === 0,
              'w-full basis-12/12 md:basis-5/12 md:flex-1': i === 1,
              'w-full  md:w-[470px]': i === 2,
              'w-full basis-12/12 md:basis-7/12 md:flex-1': i === 3
            })}
          />
        ))}
      </div>
      {/* columns experiences */}
      <div className='experiences gap-8 mt-6 columns-1 lg:columns-2' id='experiences'>
        {restItems.slice(5).map((item, i) => (
          <ExperienceItem key={i} item={item} className='mb-6 flex-1 w-full md:min-w-[420px]  flex-grow  break-inside-avoid' />
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
    <div className={cn('rounded-lg dark:hover:translate-y-2 experience dark:shadow-none ', className)}>
      <div className='flex flex-col  gap-2   group cursor-pointer hover:scale-105  shadow-2 hover:shadow-1 transition-all duration-300 p-6 rounded-lg bg-white dark:bg-slate-950 h-full'>
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
