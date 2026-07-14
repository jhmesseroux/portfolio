import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Leave a Review',
  description: 'Share your experience.',
  robots: { index: false, follow: false }
}

export default function ReviewLayout({ children }: { children: React.ReactNode }) {
  return children
}
