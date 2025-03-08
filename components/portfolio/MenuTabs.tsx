import React from 'react'
import { cn } from '@/helpers'
import Link from 'next/link'
import StarIcon from '../icons/StarIcon'
import BriefCaseIcon from '../icons/BriefCaseIcon'
import FadeInImage from '../global/FadeInImage'
import WhatsappIcon from '../icons/WhatsappIcon'
interface Props extends React.HTMLAttributes<HTMLHtmlElement> {}
const MenuTabs = ({ className }: Props) => {
  return (
    <div
      className={cn(
        'menu-tabs-animation sticky bottom-0 sm:bottom-4 w-full md:w-fit  md:mx-auto shadow-2 gap-x-4 hover:shadow-1 sm:rounded-md rounded-none  bg-white/95 z-30 dark:bg-slate-800/95 p-3  flex items-center justify-between ',
        className
      )}
    >
      <div className='avatar flex items-center   gap-2 '>
        <Link data-tooltip='Home' href='/' className='tooltip top'>
          <FadeInImage
            path={'/assets/images/me.png'}
            imageAndBoxClassName='aspect-square rounded-full w-[48px] h-[48px]'
            imageClassName='border-[1px] border-red-300 '
            alt='Avatar Jn. H. Messeroux '
          />
        </Link>
      </div>

      <div className='flex items-center justify-center  gap-x-4 '>
        <Link href='/projects' data-tooltip='Projects' className='group tooltip top'>
          <button
            type='button'
            className='w-12 h-12 rounded-full flex items-center object-cover justify-center dark:bg-slate-900 bg-white overflow-hidden hover:bg-gray-100 dark:hover:bg-slate-700 duration-300 transition-colors border border-slate-50 dark:border-none'
          >
            <StarIcon className='group-hover:scale-125 duration-300 transition-all' />
          </button>
        </Link>

        <Link href='/mentorship' data-tooltip='Mentorship & Development' className='group tooltip top'>
          <button
            type='button'
            className='w-12 h-12 rounded-full flex items-center object-cover justify-center dark:bg-slate-900 bg-white overflow-hidden hover:bg-gray-100 dark:hover:bg-slate-700 duration-300 transition-colors border border-slate-50 dark:border-none'
          >
            <FadeInImage
              path='/assets/images/mentorship.webp'
              imageAndBoxClassName='aspect-square w-16 h-16 overflow-hidden'
              className='group-hover:scale-110 duration-300 transition-all'
            />
          </button>
        </Link>

        <Link href='/experiences' data-tooltip='Experiences' className='group tooltip top'>
          <button
            type='button'
            className='w-12 h-12 rounded-full flex items-center object-cover justify-center dark:bg-slate-900 bg-white overflow-hidden hover:bg-gray-100 dark:hover:bg-slate-700 duration-300 transition-colors border border-slate-50 dark:border-none'
          >
            <BriefCaseIcon className='group-hover:scale-125 duration-300 transition-all' />
          </button>
        </Link>
      </div>

      <div className='flex items-center justify-center gap-x-2'>
        <Link href={'https://wa.me/+15147027882'} data-tooltip='Whatsapp me' className='group tooltip top'>
          <button
            type='button'
            className='w-12 h-12 bgd-gradient rounded-full flex items-center object-cover justify-center overflow-hidden duration-300 transition-colors'
          >
            <WhatsappIcon className='group-hover:scale-125 duration-300 transition-all text-white font-bold' />
          </button>
        </Link>
      </div>
    </div>
  )
}

export default MenuTabs
