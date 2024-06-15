import React from 'react'
import EducationIcon from '../icons/EducationIcon'
import { IEducation } from '@/interfaces'

const Educations = ({ data }: { data: IEducation[] }) => {
  return (
    <div className='educations my-8 p-4 sm:p-12 bg-gradient-to-b from-white via-gray-100 to-white   dark:from-slate-950  dark:via-gray-950 rounded-md'>
      <div className='projects-header flex items-center  gap-4'>
        <span className='text-lg sm:text-3xl text-brand font-extrabold'>Educations</span>
        <EducationIcon />
      </div>
      <div className='educations-content grid grid-cols-1 md:grid-cols-2 gap-12 mt-6'>
        {data
          .sort((a, b) => b.startYear - a.startYear)
          .map((education, index) => (
            <div
              key={index}
              className='w-full bg-white dark:bg-slate-900  hover:border-l-8 rounded-[4px] hover:shadow  border-slate-300 dark:border-slate-700 hover:border-brand dark:hover:border-brand flex-grow'
            >
              <div className='education p-8 flex flex-col gap-3 h-full  hover:skew-y-1  duration-700 transition-transform cursor-pointer  group hover:scale-105 '>
                <div className='education-title'>
                  <h3 className='education-name text-2xl sm:text-3xl font-semibold group-hover:text-brand'>{education.name}</h3>
                </div>
                <div className='education-name flex items-center gap-4'>
                  <h3 className='education-name text-lg'>{education.degree}</h3>
                </div>
                <div className='flex items-center gap-4 justify-between'>
                  <div className='education-date flex items-center gap-3 group-hover:text-brand2 text-sm'>
                    <span className='education-date'>{education.startMonth + ' ' + education.startYear}</span>
                    <span>-</span>
                    {education.current ? (
                      <span className='education-date'>Present</span>
                    ) : (
                      <span className='education-date'>{education.endMonth + ' ' + education.endYear}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Educations
