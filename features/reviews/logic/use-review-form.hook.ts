'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { jobPositions, type LocaleType } from '../utils/positions.util'
import { translations, isSupportedLocale, DEFAULT_LOCALE } from '../utils/translations.util'

export const MIN_REVIEW = 10
export const MAX_REVIEW = 350
const MIN_SUBMIT_TIME_MS = 3000

const isValidUrl = (value: string) => {
  try {
    new URL(value)
    return true
  } catch {
    return false
  }
}

export const useReviewForm = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const localeParam = searchParams.get('locale')

  // Redirect unsupported locales to default
  useEffect(() => {
    if (localeParam && !isSupportedLocale(localeParam)) {
      router.replace(`/review?locale=${DEFAULT_LOCALE}`)
    }
  }, [localeParam, router])

  const locale: LocaleType = isSupportedLocale(localeParam) ? localeParam : DEFAULT_LOCALE
  const t = translations[locale]
  const positions = useMemo(() => [...jobPositions[locale]].sort(), [locale])

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [error, setError] = useState<string>('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const mountedAtRef = useRef<number>(Date.now())

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setErrors({})

    const form = e.currentTarget
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries()) as Record<string, string>

    // Honeypot — bots fill it, humans don't
    if (data.website_url) return

    // Min submit time (anti-bot)
    if (Date.now() - mountedAtRef.current < MIN_SUBMIT_TIME_MS) return

    // Validation
    const newErrors: Record<string, string> = {}
    if (!data.position) newErrors.position = t.allFieldsRequired
    if (!data.linkType) newErrors.linkType = t.allFieldsRequired
    if (!data.name) newErrors.name = t.allFieldsRequired
    if (!data.review || data.review.length < MIN_REVIEW) newErrors.review = t.minReview
    if (!data.link) newErrors.link = t.allFieldsRequired
    else if (!isValidUrl(data.link)) newErrors.link = t.invalidUrl

    if (Object.keys(newErrors).length) {
      setErrors(newErrors)
      setError(t.allFieldsRequired)
      return
    }

    const payload = {
      review: data.review,
      author: {
        name: data.name,
        position: data.position,
        [data.linkType]: data.link
      }
    }

    try {
      setLoading(true)
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reviews`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const json = await res.json()
      if (json.ok) {
        form.reset()
        setSuccess(true)
      } else {
        setError(json.message || t.somethingWentWrong)
      }
    } catch {
      setError(t.somethingWentWrong)
    } finally {
      setLoading(false)
    }
  }

  const handleAnother = () => {
    setSuccess(false)
    mountedAtRef.current = Date.now()
  }

  return { t, positions, errors, error, success, loading, handleSubmit, handleAnother }
}
