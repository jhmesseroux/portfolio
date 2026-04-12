import React from 'react'
import { BriefCaseIcon } from '..'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/helpers'
import { IExperience } from '@/interfaces'
import ExperienceCard from './ExperienceCard'

interface Props extends React.HTMLAttributes<HTMLHtmlElement> {
  data: IExperience[]
  showAll?: boolean
}

const Experiences = ({ data, showAll = false, className, ...rest }: Props) => {
  return (
    <section className={cn('experiences-container p-3 md:p-4', className)} {...rest} data-testid='experiences-section'>
      <div
        className={cn(
          'flex items-center justify-between gap-3 flex-wrap mb-10 px-4 md:px-3',
          showAll &&
            'sticky top-[70px] z-30 bg-white/95 dark:bg-slate-950/95 backdrop-blur-sm py-3 md:static md:bg-transparent md:dark:bg-transparent md:backdrop-blur-none md:py-0'
        )}
      >
        <div className='experiences-header flex items-center justify-center gap-2 sm:gap-4'>
          <span className='text-3xl text-brand font-extrabold'>Experiences</span>
          <BriefCaseIcon />
        </div>
        {showAll && (
          <Link
            href='/experiences'
            data-testid='experiences-view-all'
            className='hover:text-brand text-sm border border-slate-200 dark:border-slate-700 px-3 py-1 rounded-full hover:border-violet-400 transition-colors duration-300'
          >
            View all &rsaquo;
          </Link>
        )}
      </div>

      <div className='relative md:px-4 z-0' id='experiences'>
        <div className='absolute left-[35px] md:left-1/2 md:-translate-x-[1px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-violet-500 via-pink-400 to-violet-300 dark:from-violet-600 dark:via-pink-500 dark:to-violet-400 opacity-40' />

        <div className='flex flex-col gap-16'>
          {data.map((item, index) => (
            <ExperienceItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experiences

interface IExperienceItemProps extends React.HTMLAttributes<HTMLDivElement> {
  item: IExperience
  index: number
}

const customLogos: Record<string, string> = {
  'dooke.app': 'https://res.cloudinary.com/draxircbk/image/upload/q_auto/f_auto/v1775968545/jhmesseroux/Portfolio/company-logos/www.dooke.app_uzspfs.png',
  'talonmba.com': 'https://res.cloudinary.com/draxircbk/image/upload/q_auto/f_auto/v1775968607/jhmesseroux/Portfolio/company-logos/logo_iolaf1.svg',
  'avalian.com': 'https://res.cloudinary.com/draxircbk/image/upload/q_auto/f_auto/v1775969258/jhmesseroux/Portfolio/company-logos/logo-avalian-footer-vertical_jvnbhi.png',
  'www.avalian.com': 'https://res.cloudinary.com/draxircbk/image/upload/q_auto/f_auto/v1775969258/jhmesseroux/Portfolio/company-logos/logo-avalian-footer-vertical_jvnbhi.png',
  'linkedin.com/company/tribal-consulting.': 'https://res.cloudinary.com/draxircbk/image/upload/q_auto/f_auto/v1775968924/jhmesseroux/Portfolio/company-logos/tribal_consulting_logo_ztgbiu.jpg',
  'instagram.com/novaatechnology': 'https://res.cloudinary.com/draxircbk/image/upload/q_auto/f_auto/v1775969182/jhmesseroux/Portfolio/company-logos/440500329_925671585971021_5794090147350569022_n_ezizpd.jpg'
}

const getCompanyLogo = (companyLink: string | null | undefined) => {
  if (!companyLink) return '/assets/images/me.png'
  try {
    const url = new URL(companyLink)
    const host = url.hostname.replace(/^www\./, '')
    const pathParts = url.pathname.split('/').filter(Boolean)
    // Try host + path matches (most specific first)
    for (let i = pathParts.length; i > 0; i--) {
      const key = `${host}/${pathParts.slice(0, i).join('/')}`
      if (customLogos[key]) return customLogos[key]
    }
    if (customLogos[host]) return customLogos[host]
    if (customLogos[url.hostname]) return customLogos[url.hostname]
    return `https://www.google.com/s2/favicons?domain=${url.hostname}&sz=128`
  } catch {
    return '/assets/images/me.png'
  }
}

const ExperienceItem = ({ item, className, index }: IExperienceItemProps) => {
  const isCardRight = index % 2 === 0
  const logoUrl = getCompanyLogo(item.companyLink)

  return (
    <div className={cn('relative', className)} data-testid={`experience-item-${item.id}`}>
      {/* ── Org logo on the timeline ── */}
      <div className='absolute left-[15px] md:left-1/2 md:-translate-x-1/2 top-0 z-[5]'>
        <div className={cn('avatar-ring avatar-ring-sm rounded-full cursor-pointer', !item.current && 'avatar-ring-muted')}>
          <div className='w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden bg-white dark:bg-slate-900'>
            <Image
              src={logoUrl}
              alt={item.companyName}
              width={48}
              height={48}
              className='w-full h-full object-cover'
              unoptimized
            />
          </div>
        </div>
      </div>

      {/* ── Mobile layout (single column, card right) ── */}
      <div className='md:hidden ml-16'>
        <DatePill item={item} className='mb-2' />
        <ExperienceCard item={item} />
      </div>

      {/* ── Desktop layout (alternating) ── */}
      <div className='hidden md:grid md:grid-cols-[1fr_60px_1fr] md:items-start'>
        {isCardRight ? (
          <>
            <div className='flex justify-end items-start pt-2 pr-4'>
              <DatePill item={item} />
            </div>
            <div />
            <div className='pl-4'>
              <ExperienceCard item={item} />
            </div>
          </>
        ) : (
          <>
            <div className='pr-4'>
              <ExperienceCard item={item} />
            </div>
            <div />
            <div className='flex justify-start items-start pt-2 pl-4'>
              <DatePill item={item} />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

const DatePill = ({ item, className }: { item: IExperience; className?: string }) => {
  return (
    <div className={cn('flex flex-col', className)}>
      <span
        className={cn(
          'inline-block text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap w-fit',
          item.current
            ? 'bg-gradient-to-r from-violet-500 to-pink-500 text-white shadow-sm'
            : 'bg-violet-100 dark:bg-violet-900/50 text-violet-600 dark:text-violet-400'
        )}
      >
        {item.startMonth} {item.startYear} - {!item.current ? item.endMonth + ' ' + item.endYear : 'Present'}
      </span>
      <span className='text-xs text-slate-400 dark:text-slate-500 mt-1 px-1'>{item.location}</span>
    </div>
  )
}
