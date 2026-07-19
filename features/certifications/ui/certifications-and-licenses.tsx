import React from 'react'
import { CertificationIcon, ExternalLinkIcon } from '@/shared/icons'
import { IEducation } from '@/features/educations'
import Link from 'next/link'
import Image from 'next/image'

const orgLogos: Record<string, string> = {
  Anthropic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Anthropic_logo.svg/200px-Anthropic_logo.svg.png',
  Slack: 'https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg',
  Udemy: 'https://cdn.worldvectorlogo.com/logos/udemy-1.svg'
}

export const CertificationsAndLicenses = ({ data }: { data: IEducation[] }) => {
  const sorted = [...data].sort((a, b) => b.startYear - a.startYear)

  return (
    <div className='my-8 p-3 md:p-4' data-testid='certifications-section'>
      <div className='flex items-center justify-between gap-3 flex-wrap mb-6'>
        <div className='flex items-center gap-4'>
          <span className='text-3xl text-brand font-extrabold'>Certifications and Licenses</span>
          <CertificationIcon />
        </div>
        <Link
          href='https://www.linkedin.com/in/jhmesseroux/details/certifications'
          target='_blank'
          rel='noreferrer'
          className='hover:text-brand text-sm border border-slate-200 dark:border-slate-700 px-3 py-1 rounded-full hover:border-violet-400 transition-colors duration-300'
        >
          View all &rsaquo;
        </Link>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {sorted.map((cert) => (
          <div
            key={cert.id}
            data-testid={`certification-item-${cert.id}`}
            className='w-full bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-violet-200 dark:hover:border-violet-800/50 hover:shadow-2 transition-all duration-300'
          >
            <div className='p-6 flex flex-col gap-3 relative overflow-hidden'>
              <div>
                <h3 className='text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-300'>{cert.name}</h3>
                {cert.organization &&
                  (cert.organization.url ? (
                    <a
                      href={cert.organization.url}
                      target='_blank'
                      rel='noreferrer'
                      className='text-sm text-slate-600 dark:text-slate-400 hover:text-violet-500 hover:underline transition-colors duration-200 mt-1 inline-block'
                    >
                      {cert.organization.name}
                    </a>
                  ) : (
                    <span className='text-sm text-slate-600 dark:text-slate-400 mt-1 inline-block'>{cert.organization.name}</span>
                  ))}
              </div>
              <span className='text-xs text-slate-500 dark:text-slate-500'>
                Issued {cert.startMonth} {cert.startYear}
              </span>
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target='_blank'
                  rel='noreferrer'
                  data-testid={`certification-credential-${cert.id}`}
                  className='flex items-center justify-center gap-1 border border-slate-200 dark:border-slate-700 hover:border-violet-400 dark:hover:border-violet-500 hover:text-violet-500 w-fit rounded-md py-2 px-3 text-sm transition-colors duration-300'
                >
                  <span>Show Credential</span>
                  <ExternalLinkIcon className='w-4' />
                </a>
              )}
              {cert.organization?.name && orgLogos[cert.organization.name] && (
                <div className='absolute -bottom-2 -right-2 w-16 h-16 sm:w-20 sm:h-20 rounded-tl-3xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center p-3 sm:p-4'>
                  <Image
                    src={orgLogos[cert.organization.name]}
                    alt={cert.organization.name}
                    width={48}
                    height={48}
                    className='w-full h-full object-contain opacity-80'
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

