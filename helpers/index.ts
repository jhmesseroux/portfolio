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

export const estimateReadingTime = (htmlContent: string, wordsPerMinute: number = 200): number => {
  // Remove HTML tags using DOMParser
  const parser = new DOMParser()
  const doc = parser.parseFromString(htmlContent, 'text/html')
  const text = doc.body.textContent || ''

  // Count words
  const words = text.trim().split(/\s+/)
  const wordCount = words.length

  // Calculate reading time and round up
  return Math.ceil(wordCount / wordsPerMinute)
}
