import type { Metadata } from 'next'

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.jhme.dev'
const SITE_NAME = 'Jean H. Messeroux Portfolio'
const AUTHOR = 'Jean Hilaire Messeroux'
const TWITTER_HANDLE = '@jhmesseroux'
const OG_IMAGE = '/assets/images/me.png'

interface BuildMetaArgs {
  title: string
  description: string
  path?: string
  /** Pass `true` for the root layout — adds metadataBase, keywords, robots, authors */
  isRoot?: boolean
}

export const buildMeta = ({ title, description, path = '/', isRoot = false }: BuildMetaArgs): Metadata => {
  const base: Metadata = {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: path,
      title,
      description,
      siteName: SITE_NAME,
      images: [{ url: OG_IMAGE, width: 800, height: 800, alt: AUTHOR }]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [OG_IMAGE],
      creator: TWITTER_HANDLE
    }
  }

  if (!isRoot) return base

  return {
    ...base,
    metadataBase: new URL(SITE_URL),
    authors: [{ name: AUTHOR }],
    creator: AUTHOR,
    keywords: [
      'Jean Messeroux',
      'Full Stack Developer',
      'Software Engineer',
      'React',
      'Next.js',
      'Node.js',
      'TypeScript',
      'Portfolio'
    ],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    }
  }
}
