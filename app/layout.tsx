import './globals.css'
import { ThemeProvider } from '@/features/theme/state/theme-context'
import { SidebarProvider } from '@/features/navigation/state/sidebar-context'
import { GoToTop } from '@/shared/ui/go-to-top'
import { buildMeta, SITE_URL } from '@/shared/utils/seo'

export const metadata = buildMeta({
  title: 'Jean H. Messeroux | Senior Full Stack Developer',
  description:
    'Results-driven software engineer with 7+ years of experience. Senior Full Stack Developer at EMCI TV, Co-Founder & CTO at Dooke. Specializing in React, Next.js, Node.js, and TypeScript.',
  path: '/',
  isRoot: true
})

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jean Hilaire Messeroux',
  url: SITE_URL,
  image: `${SITE_URL}/assets/images/me.png`,
  jobTitle: 'Senior Full Stack Developer',
  worksFor: { '@type': 'Organization', name: 'EMCI TV', url: 'https://emcitv.com' },
  email: 'mailto:jhmcode.dev@gmail.com',
  sameAs: [
    'https://www.linkedin.com/in/jhmesseroux/',
    'https://github.com/jhmesseroux',
    'https://www.youtube.com/@jhmesseroux',
    'https://www.instagram.com/jhmesseroux/',
    'https://t.me/jhmesseroux',
    'https://x.com/jhmesseroux'
  ],
  knowsAbout: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'React Native', 'Full Stack Development']
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className='bg-white max-w-6xl relative m-auto min-h-screen flex flex-col justify-between dark:bg-slate-950 text-slate-700 dark:text-slate-400'>
        <ThemeProvider>
          <SidebarProvider>
            {children}
            <GoToTop />
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
