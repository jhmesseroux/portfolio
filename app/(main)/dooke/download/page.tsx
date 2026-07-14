'use client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import DownloadApp from './DownloadApp'
import { BorderBeam } from '@/components/magicui/border-beam'

const DownloadPage = () => {
  const router = useRouter()

  useEffect(() => {
    const userAgent = navigator.userAgent || ''

    const iosUrl = process.env.NEXT_PUBLIC_DOOKE_IOS_APP_URL
    const androidUrl = process.env.NEXT_PUBLIC_DOOKE_ANDROID_APP_URL

    if (/iPad|iPhone|iPod/.test(userAgent) && iosUrl) {
      router.replace(iosUrl)
    } else if (/android/i.test(userAgent) && androidUrl) {
      router.replace(androidUrl)
    }
  }, [router])

  return (
    <div className='flex flex-col items-center justify-center my-8 p-6'>
      <div className='bg-white dark:bg-slate-800 shadow-1 dark:shadow relative p-4 rounded-xl  w-full sm:w-[400px]'>
        <p className='text-balance text-center mb-6'>If you are not redirected automatically, please choose your platform</p>
        <DownloadApp />
        <BorderBeam />
      </div>
    </div>
  )
}

export default DownloadPage
