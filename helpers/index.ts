import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
export const copyToClipboard = async (text: string) => await navigator.clipboard.writeText(text)
