import React from 'react'
import EducationIcon from '../icons/EducationIcon'
import { IEducation } from '@/interfaces'

const Educations = ({ data }: { data: IEducation[] }) => {
  return (
    <div className='educations my-8 p-4'>
      <div className='projects-header flex items-center  gap-4'>
        <span className='text-lg sm:text-3xl text-brand font-extrabold'>Educations</span>
        <EducationIcon />
      </div>
      <div className='educations-content flex  gap-8 mt-6 flex-wrap'>
        {data
          .sort((a, b) => a.startYear - b.startYear)
          .map((education, index) => (
            <div
              key={index}
              className='w-full bg-white dark:bg-slate-900 md:w-[350px] hover:border-l-8 rounded-[4px] hover:shadow  border-slate-300 dark:border-slate-700 hover:border-brand dark:hover:border-brand flex-grow'
            >
              <div className='education p-8 flex flex-col gap-3 h-full  hover:skew-y-1  duration-700 transition-transform cursor-pointer  group hover:scale-105 '>
                <div className='education-title'>
                  <h3 className='education-name text-2xl sm:text-3xl font-semibold group-hover:text-brand'>{education.degree}</h3>
                </div>
                <div className='education-name'>
                  <h3 className='education-name text-lg'>{education.name}</h3>
                </div>
                <div className='education-date flex items-center gap-3 group-hover:text-brand2 text-sm'>
                  <span className='education-date'>{education.startMonth + '-' + education.startYear}</span>
                  <span className='education-date'>{education.endMonth + '-' + education.endYear}</span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Educations
