// import { Inter } from 'next/font/google'
import Header from '@/components/portfolio/Header'

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className='flex flex-col '>{children}</main>
    </>
  )
}
