import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page not found | Jean H. Messeroux',
  description: 'The page you are looking for does not exist.'
}

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center text-center px-6 py-20 min-h-[60vh]' data-testid='not-found-page'>
      <span className='text-7xl sm:text-8xl font-extrabold bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent'>404</span>
      <h1 className='text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-200 mt-4'>Page not found</h1>
      <p className='text-base text-slate-600 dark:text-slate-400 mt-2 max-w-md'>
        Looks like the page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className='flex items-center gap-3 mt-6 flex-wrap justify-center'>
        <Link
          href='/'
          className='px-5 py-2.5 rounded-full text-sm font-medium text-white bg-gradient-to-r from-violet-500 to-pink-500 hover:from-violet-600 hover:to-pink-600 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-300'
        >
          Back to home
        </Link>
        <Link
          href='/projects'
          className='px-5 py-2.5 rounded-full text-sm font-medium border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-violet-400 hover:text-violet-500 transition-colors duration-300'
        >
          See projects
        </Link>
      </div>
    </div>
  )
}
