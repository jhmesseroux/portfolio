'use client'
import { AppleIcon, GooglePlayIcon } from '@/shared/icons'
import { cn, openDownloadLink } from '@/shared/utils'

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export const DownloadApp = ({ className }: Props) => {
  return (
    <div className={cn('flex flex-col sm:flex-row items-center justify-between gap-4 p-4 relative rounded-xl ', className)}>
      <button
        onClick={() => openDownloadLink('android')}
        className='donation-button flex-auto rounded-md  duration-700 transition-all hover:skew-y-1 hover:skew-x-1 shadow-1 dark:shadow  bg-pink-700 py-[0.5rem]  text-white font-bold text-base flex  gap-1 items-center justify-center px-3 w-full'
      >
        <div className='flex items-center gap-x-1'>
          <GooglePlayIcon />
          <span>Google play</span>
        </div>      </button>
      <button
        onClick={() => openDownloadLink('ios')}
        className='donation-button flex-auto rounded-md bg-blue-500 duration-700 transition-all hover:skew-y-1 hover:skew-x-1  shadow-1 dark:shadow py-[0.5rem]  text-white font-bold text-base flex  gap-x-2 items-center justify-center px-3 w-full '
      >
        <div className='flex items-center gap-x-1'>
          <AppleIcon />
          <span>App Store</span>
        </div>      </button>
    </div>
  )
}

