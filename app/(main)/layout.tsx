import { SmallHeader } from '@/features/hero/ui/small-header'
import { Footer } from '@/features/navigation/ui/footer'
import { MenuTabs } from '@/features/navigation/ui/menu-tabs'
import { MobileSideBar } from '@/features/navigation/ui/mobile-sidebar'

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
