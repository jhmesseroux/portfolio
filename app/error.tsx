'use client' // Error components must be Client Components

import { useEffect } from 'react'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className='flex items-center justify-center flex-col gap-4 max-w-2xl m-auto text-center my-4'>
      <h2 className='text-red-400'>Something went wrong! {error.message}</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        className='hover:underline'
      >
        Try again
      </button>
    </div>
  )
}
