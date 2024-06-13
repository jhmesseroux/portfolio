import React from 'react'
import CertificationIcon from '../icons/CertificationIcon'
import { IEducation } from '@/interfaces'
import ExternalLinkIcon from '../icons/ExternalLinkIcon'

const CertificationsAndLicenses = ({ data }: { data: IEducation[] }) => {
  return (
    <div className='certifications-and-licenses my-8 p-4 '>
      <div className='certifications-header flex items-center gap-4'>
        <span className='text-lg sm:text-3xl text-brand font-extrabold'>Certifications and Licenses</span>
        <CertificationIcon />
      </div>
      <div className='certifications-content flex  gap-8 mt-6 flex-wrap'>
        {data
          .sort((a, b) => a.startYear - b.startYear)
          .map((education, index) => (
            <div
              className='certification-item rounded-lg w-full md:w-[350px]  animatedBorder flex-grow'
              data-border='thin'
              data-blur='none'
              key={index}
            >
              <div className='rounded-lg border-[1px] bg-white  dark:bg-slate-950 p-6 flex flex-col gap-3 border-slate-300 dark:border-sky-700 dark:border-opacity-25   duration-700 transition-all cursor-pointer hover:border-none group h-full '>
                <div>
                  <h3 className='certifications-name text-2xl sm:text-3xl font-semibold '>{education.name}</h3>
                  <a
                    href={education.organization?.url}
                    target='_blank'
                    className='hover:text-sky-500 hover:underline duration-700 transition-color'
                  >
                    <h3 className='certifications-org-name text-base mt-1'> {education.organization?.name}</h3>
                  </a>
                </div>
                <div className='education-date flex items-start justify-start flex-1 gap-3 '>
                  <span className='education-date text-slate-700 dark:text-slate-400 text-sm text-opacity-90 dark:text-opacity-80'>
                    Issued {education.startMonth + '-' + education.startYear}
                  </span>
                  {/* <span className='education-date'>{education.endMonth + '-' + education.endYear}</span> */}
                </div>
                <a
                  href={education.credentialUrl!}
                  target='_blank'
                  className='group-hover:text-sky-500 hover:underline flex items-center justify-center hover:border-sky-500  dark:hover:border-sky-600  border border-slate-300 dark:border-slate-900 w-fit rounded-[4px] py-2 px-3 gap-1 duration-700 transition-color '
                >
                  <h3 className='education-credential-url text-sm'> Show Credential</h3>
                  <ExternalLinkIcon />
                </a>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default CertificationsAndLicenses
