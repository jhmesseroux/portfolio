'use client'
import React from 'react'
import { FormError } from '@/shared/ui/form-error'
import { Input } from '@/shared/ui/input'
import { useReviewForm } from '../logic/use-review-form.hook'
import { ReviewTextarea } from './review-textarea'

export const ReviewForm = () => {
  const { t, positions, errors, error, success, loading, handleSubmit, handleAnother } = useReviewForm()

  if (success) {
    return (
      <div
        data-testid='review-success'
        className='relative bg-white shadow-1 dark:bg-slate-900 p-8 mt-20 dark:shadow-none flex flex-col w-full md:w-[590px] self-center mx-0 rounded items-center text-center'
      >
        <div className='w-16 h-16 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center mb-4'>
          <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='none' stroke='white' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round'>
            <polyline points='20 6 9 17 4 12' />
          </svg>
        </div>
        <h1 className='text-gradient text-2xl sm:text-3xl font-semibold mb-2'>{t.successTitle}</h1>
        <p className='text-base text-slate-600 dark:text-slate-400 mb-6'>{t.successText}</p>
        <button
          type='button'
          onClick={handleAnother}
          data-testid='review-another'
          className='px-5 py-2.5 rounded-full text-sm font-medium border border-violet-400 text-violet-500 hover:bg-violet-500 hover:text-white transition-colors duration-300'
        >
          {t.submitAnother}
        </button>
      </div>
    )
  }

  return (
    <div
      id='new-review'
      data-testid='review-form'
      className='relative bg-white shadow-1 dark:bg-slate-900 p-6 mt-20 dark:shadow-none flex flex-col w-full md:w-[590px] self-center mx-0 rounded py-8'
    >
      <section>
        <header className='mb-4'>
          <h1 className='text-gradient text-lg sm:text-3xl font-semibold'>{t.title}</h1>
          <p className='my-2 font-normal text-base'>{t.subTitle}</p>
        </header>

        <form className={loading ? 'is-loading' : ''} onSubmit={handleSubmit} noValidate>
          {/* Honeypot field — visually hidden, not in tab order */}
          <div aria-hidden='true' style={{ position: 'absolute', left: '-9999px', top: '-9999px' }}>
            <label>
              Website
              <input type='text' name='website_url' tabIndex={-1} autoComplete='off' />
            </label>
          </div>

          <ReviewTextarea disabled={loading} hasError={errors.review} t={t} />

          <div className='flex flex-col sm:flex-row md:gap-4'>
            <fieldset className='w-full flex flex-col mb-4'>
              <label htmlFor='position' className='font-medium first-letter:capitalize text-slate-700 dark:text-slate-500 p-1'>
                <span>{t.position} <span className='text-red-400 font-bold'>*</span></span>
              </label>
              <select
                name='position'
                id='position'
                required
                disabled={loading}
                className='w-full px-2 py-[9px] border border-gray-300 dark:border-slate-800 hover:!border-brand focus:border-brand focus:ring-2 focus:ring-violet-200 dark:focus:ring-violet-900 outline-none bg-white dark:bg-slate-950 dark:text-slate-400 disabled:cursor-not-allowed rounded'
              >
                <option value=''>{t.selectPosition}</option>
                {positions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {errors.position && <FormError text={errors.position} className='text-left my-0 p-0 pt-0.5' />}
            </fieldset>
            <Input
              label={t.username}
              name='name'
              disabled={loading}
              required
              placeholder='John Doe'
              hasError={errors.name}
            />
          </div>

          <div className='flex flex-col items-start gap-4'>
            <fieldset className='w-full flex flex-col'>
              <label htmlFor='linkType' className='font-medium first-letter:capitalize text-slate-700 dark:text-slate-500 p-1'>
                <span>{t.linkType} <span className='text-red-400 font-bold'>*</span></span>
              </label>
              <select
                name='linkType'
                required
                id='linkType'
                disabled={loading}
                className='w-full px-2 py-[9px] border border-gray-300 dark:border-slate-800 hover:!border-brand focus:border-brand focus:ring-2 focus:ring-violet-200 dark:focus:ring-violet-900 outline-none bg-white dark:bg-slate-950 dark:text-slate-400 disabled:cursor-not-allowed rounded'
              >
                <option value=''>{t.selectLinkType}</option>
                <option value='linkedIn'>LinkedIn</option>
                <option value='instagram'>Instagram</option>
                <option value='website'>Other</option>
              </select>
              {errors.linkType && <FormError text={errors.linkType} className='text-left my-0 p-0 pt-0.5' />}
            </fieldset>
            <Input
              label={t.link}
              name='link'
              disabled={loading}
              type='url'
              className='flex-1'
              required
              placeholder='https://www.linkedin.com/in/jhmesseroux/'
              templateExtra={() => <span className='text-xs text-violet-400 dark:text-slate-500'>{t.whyThisLink}</span>}
              hasError={errors.link}
            />
          </div>

          {error && <FormError className='border border-red-400 border-dashed mb-4' text={error} />}

          <div className='flex items-center mt-6'>
            <button
              data-testid='review-submit'
              className='w-full bg-gradient-to-r from-violet-500 to-pink-500 text-white hover:from-violet-600 hover:to-pink-600 py-2.5 px-4 rounded-full font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300'
              type='submit'
              disabled={loading}
            >
              {loading ? t.submitting : t.submit}
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}
