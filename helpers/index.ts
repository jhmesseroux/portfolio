import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
export const copyToClipboard = async (text: string) => await navigator.clipboard.writeText(text)

export const openDownloadLink = (type: 'ios' | 'android') => {
  if (type === 'ios') {
    window.open(process.env.NEXT_PUBLIC_DOOKE_IOS_APP_URL)
  } else {
    window.open(process.env.NEXT_PUBLIC_DOOKE_ANDROID_APP_URL)
  }
}
