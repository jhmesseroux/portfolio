import Link from 'next/link'
import { FadeInImage } from '@/shared/ui/fade-in-image'
import { ThemeSwitcher } from '@/features/theme/ui/theme-switcher'

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header role='banner' data-testid='privacy-header' className='bg-white/90 z-40 dark:bg-slate-950/90 py-3 sticky top-0'>
        <div className='max-w-3xl mx-auto w-full px-3 md:px-6 flex items-center justify-between'>
          <Link href='/' className='flex items-center gap-3' data-testid='privacy-header-home-link'>
            <div className='avatar-ring avatar-ring-sm rounded-full'>
              <FadeInImage
                path='/assets/images/me.webp'
                imageAndBoxClassName='aspect-square rounded-full w-[40px] h-[40px]'
                imageClassName='rounded-full'
                alt='Avatar Jn. H. Messeroux'
              />
            </div>
            <div className='flex flex-col'>
              <span className='font-medium leading-tight'>jhmesseroux</span>
              <span className='text-brand text-xs'>by Jean H. Messeroux</span>
            </div>
          </Link>
          <ThemeSwitcher />
        </div>
      </header>

      <main className='flex flex-col flex-1'>{children}</main>

      <footer data-testid='privacy-footer' className='mt-auto border-t border-slate-100 dark:border-slate-800 py-6'>
        <div className='max-w-3xl mx-auto w-full px-3 md:px-6 flex flex-col sm:flex-row items-center justify-between gap-3'>
          <span className='text-sm text-slate-500 dark:text-slate-400'>
            &copy; {new Date().getFullYear()} Jean Hilaire Messeroux. All rights reserved.
          </span>
          <Link href='/' className='text-sm text-pink-500 hover:underline' data-testid='privacy-footer-home-link'>
            &larr; Back to home
          </Link>
        </div>
      </footer>
    </>
  )
}
