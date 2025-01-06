'use client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import DownloadApp from './DownloadApp'
import { BorderBeam } from '@/components/magicui/border-beam'

const DownloadPage = () => {
  const router = useRouter()

  useEffect(() => {
    // @ts-ignore - userAgent is not defined in the navigator type
    const userAgent = navigator.userAgent || navigator.vendor || window.opera

    // Redirect to Apple App Store for iOS
    // @ts-ignore - userAgent is not defined in the navigator type
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      router.replace(process.env.NEXT_PUBLIC_DOOKE_IOS_APP_URL!)
    }
    // Redirect to Google Play Store for Android
    else if (/android/i.test(userAgent)) {
      router.replace(process.env.NEXT_PUBLIC_DOOKE_ANDROID_APP_URL!)
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
