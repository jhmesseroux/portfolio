import React from 'react'
import { EducationIcon } from '@/shared/icons'
import { IEducation } from '../types'
import { DOT } from '@/shared/utils'
import Link from 'next/link'

export const Educations = ({ data }: { data: IEducation[] }) => {
  const sorted = [...data].sort((a, b) => b.startYear - a.startYear)

  return (
    <div
      className='educations my-8 p-3 sm:p-6 md:p-12 bg-gradient-to-b from-white via-gray-100 to-white dark:from-slate-950 dark:via-gray-900 rounded-md'
      data-testid='educations-section'
    >
      <div className='flex items-center justify-between gap-3 flex-wrap mb-6'>
        <div className='flex items-center gap-4'>
          <span className='text-3xl text-brand font-extrabold'>Educations</span>
          <EducationIcon />
        </div>
        <Link
          href='https://www.linkedin.com/in/jhmesseroux/details/education/'
          target='_blank'
          rel='noreferrer'
          className='hover:text-brand text-sm border border-slate-200 dark:border-slate-700 px-3 py-1 rounded-full hover:border-violet-400 transition-colors duration-300'
        >
          View all &rsaquo;
        </Link>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {sorted.map((education) => (
          <div
            key={education.id}
            data-testid={`education-item-${education.id}`}
            className='w-full bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-violet-200 dark:hover:border-violet-800/50 hover:shadow-2 transition-all duration-300'
          >
            <div className='p-6 flex flex-col gap-2'>
              <h3 className='text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-300 hover:text-brand transition-colors duration-300'>
                {education.name}
              </h3>
              {education.degree && <span className='text-sm text-slate-600 dark:text-slate-400'>{education.degree}</span>}
              <div className='flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-500'>
                <span>
                  {education.startMonth} {education.startYear}
                </span>
                <span>-</span>
                <span>
                  {education.current
                    ? 'Present'
                    : education.endMonth && education.endYear
                      ? `${education.endMonth} ${education.endYear}`
                      : ''}
                </span>
                {education.location && (
                  <>
                    <span className='text-slate-300 dark:text-slate-600'>{DOT}</span>
                    <span>{education.location}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

