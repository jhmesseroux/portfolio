import SmallHeader from '@/components/portfolio/SmallHeader'
import Footer from '@/components/portfolio/Footer'
import MobileSideBar from '@/components/portfolio/MobileSideBar'
import MenuTabs from '@/components/portfolio/MenuTabs'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SmallHeader />
      {children}
      <Footer />
      <MenuTabs />
      <MobileSideBar />
    </>
  )
}
