import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import './globals.css'
import SmallHeader from '@/components/portfolio/SmallHeader'
import Footer from '@/components/portfolio/Footer'
import MobileSideBar from '@/components/portfolio/MobileSideBar'
import ThemeContext from '@/context/ThemeContext'
import MenuTabs from '@/components/portfolio/MenuTabs'
import GoToTop from '@/components/global/GoToTop'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio | Jean Hilaire Messeroux',
  description: 'Results-driven software engineer with over five years of experience, consistently delivering high-quality solutions.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='shortcut icon'
          href='https://res.cloudinary.com/draxircbk/image/upload/v1669246932/jhmesseroux/JHM2022-01_e89izz.png'
          type='image/x-icon'
        />
      </head>
      <body className='bg-white max-w-6xl relative m-auto min-h-screen flex flex-col  justify-between dark:bg-slate-950 text-slate-700 dark:text-slate-400'>
        <ThemeContext>
          {/* <ThemeSwitcher className='absolute right-12  top-3' /> */}
          <SmallHeader />
          {/* <Header /> */}
          {children}
          <Footer />
          <MenuTabs />
          <MobileSideBar />
          <GoToTop />
        </ThemeContext>
      </body>
    </html>
  )
}
