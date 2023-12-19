import React from 'react'
import { BriefCaseIcon, Skill } from '..'
import Link from 'next/link'
import { cn } from '@/helpers'
import { Iexperience } from '@/interfaces'
interface Props extends React.HTMLAttributes<HTMLHtmlElement> {
  data: Iexperience[]
  showAll?: boolean
}

const Experiences = ({ data, showAll = false, className, ...rest }: Props) => {
  return (
    <section className={cn('experiences-container mt-8 p-4', className)} {...rest}>
      <div className='flex items-center justify-between gap-3 flex-wrap'>
        <div className='experiences-header flex items-center gap-2 sm:gap-8'>
          <span className='text-lg sm:text-3xl text-brand font-extrabold'>Experiences</span>
          <BriefCaseIcon />
        </div>
        {showAll && (
          <Link href='/experiences' className='hover:text-brand text-sm'>
            All &rsaquo;
          </Link>
        )}
      </div>
      <div className='experiences flex flex-col gap-6 my-6 divide-y-[1px]s divide-slate-300 dark:divide-slate-700' id='experiences'>
        {data.map((item) => (
          <div key={item.title} className='animatedBorder rounded-lg' data-border='thin' data-blur='thin'>
            <div className='flex flex-col gap-2  experience group cursor-pointer hover:shadow p-4 rounded-lg bg-slate-50 dark:bg-slate-950 '>
              <h3 className=' flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 text-slate-700 dark:text-slate-500 group-hover:text-brand dark:group-hover:text-violet-500 duration-500 transition-colors'>
                {item.demoLink ? (
                  <Link href={item.demoLink} target='_blank'>
                    <span className='font-bold text-lg sm:text-2xl'>{item.title}</span>
                  </Link>
                ) : (
                  <span className='font-bold text-lg sm:text-2xl'>{item.title}</span>
                )}
                <span>{item.location ?? ''}</span>
              </h3>
              <h5 className='sm:text-lg text-base'>
                {item.companyName ? item.companyName + '|' : ''} <span className=''> {item.experienceType}</span>
              </h5>
              <div className='date text-sm text-slate-600 dark:text-slate-400 dark:text-opacity-60 '>
                <span>
                  {item.startMonth} {item.startYear} - {!item.current ? item.endMonth + ' ' + item.endYear : 'Present'}
                </span>
              </div>

              <div className='px-2' dangerouslySetInnerHTML={{ __html: item.description }} />
              <div className='skills flex  gap-[2px] flex-wrap divide-x-2s divide-slate-300 dark:divide-slate-700'>
                <span className='text-xs'>Skills : </span>
                {item.skills.map((skill, index) => (
                  <Skill key={skill} skill={skill + (index === item.skills.length - 1 ? '' : ' | ')} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experiences
