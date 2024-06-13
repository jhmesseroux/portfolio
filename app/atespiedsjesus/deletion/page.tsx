'use client'
import FormError from '@/components/errors/FormError'
import Input from '@/components/global/Input'
import React, { useState } from 'react'

const DataDeletion = () => {
  const [errors, setErrors] = useState<any | undefined | any>({})
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setErrors({})
    setLoading(true)
    const form = e.currentTarget as HTMLFormElement
    const formData = new FormData(form)
    const _data = Object.fromEntries(formData.entries())
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/telegram/send-message`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: `Data Deletion Request: ${_data.email} \n <strong>Reason:</strong> ${_data.reason}`,
          options: {
            link_preview_options: {
              url: 'https://jhmesseroux.com/atespiedsjesus/deletion',
              show_above_text: true
            }
          }
        })
      })
      const data = await res.json()
      if (data.ok) {
        form.reset()
        setSuccess('Request sent successfully')
      }
    } catch (error) {
      setError('Something went wrong')
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className='relative bg-white dark:bg-slate-900 p-6 my-8 border-none  flex flex-col w-full sm:w-[470px] self-center mx-0 rounded py-8'>
      <section className='sign-in'>
        <div className='sign-in__header'>
          <h1 className='text-gradient text-lg sm:text-3xl text-red-400 dark:text-red-500/90 font-semibold'>Data Deletion Request</h1>
          <p className='sign-in__subtitle my-2 font-normal text-base mb-4 '>
            Please fill out the form below to request the deletion of your account and associated data.
          </p>
        </div>

        <form className={loading ? 'is-loading' : ''} onSubmit={handleSubmit}>
          <Input
            label='Email'
            name='email'
            disabled={loading}
            type='email'
            required
            placeholder='example@gmail.com'
            hasError={errors?.email}
          />
          <Input
            className='max-h-28'
            disabled={loading}
            label='Reason'
            required
            name='reason'
            placeholder='Please let us know why you want to delete your account...'
            fieldsetClassName='mb-1'
            textArea
            hasError={errors?.password}
          />

          {error && <FormError className='border border-red-400 border-dashed mb-4' text={error} />}
          {success && <div className='border-green-400 dark:bg-green-800/20 text-green-500 bg-green-100 p-3  my-4'>{success}</div>}

          <div className='sign-in__form__group flex items-center mt-6 '>
            <button className='w-fit bg-blue-500 text-white hover:bg-blue-400  py-2 px-4 rounded' type='submit' disabled={loading}>
              {loading ? 'Submitting...' : 'Submit Request'}
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default DataDeletion
