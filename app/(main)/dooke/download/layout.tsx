import { buildMeta } from '@/shared/utils/seo'

export const metadata = buildMeta({
  title: 'Download Dooke App | Jean H. Messeroux',
  description: 'Download the Dooke Bible app on iOS and Android. A modern way to read scripture, available on all major platforms.',
  path: '/dooke/download'
})

export default function DownloadLayout({ children }: { children: React.ReactNode }) {
  return children
}
