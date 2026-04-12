import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Account Deletion Request',
  description: 'Request account deletion.',
  robots: { index: false, follow: false }
}

export default function DeletionLayout({ children }: { children: React.ReactNode }) {
  return children
}
