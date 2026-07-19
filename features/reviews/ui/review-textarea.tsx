'use client'
import React, { useState } from 'react'
import { Input } from '@/shared/ui/input'
import { MIN_REVIEW, MAX_REVIEW } from '../logic/use-review-form.hook'
import type { FormStrings } from '../utils/translations.util'

interface Props {
  disabled: boolean
  hasError?: string
  t: FormStrings
}

/**
 * Owns the review text state so typing only re-renders this component,
 * not the whole form. The parent form resets it by unmounting (success screen).
 */
export const ReviewTextarea = ({ disabled, hasError, t }: Props) => {
  const [reviewText, setReviewText] = useState('')

  return (
    <Input
      className='max-h-28 min-h-12 relative pb-6'
      disabled={disabled}
      label={t.review}
      required
      value={reviewText}
      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setReviewText(e.target.value)}
      name='review'
      minLength={MIN_REVIEW}
      maxLength={MAX_REVIEW}
      placeholder={t.placeholder}
      textArea
      hasError={hasError}
      templateExtra={() => (
        <span className={`text-[10px] ${reviewText.length < MIN_REVIEW ? 'text-red-400' : 'text-violet-400 dark:text-slate-500'}`}>
          {t.charCount(reviewText.length, MAX_REVIEW)}
        </span>
      )}
    />
  )
}
