import { Suspense } from 'react'
import ReviewForm from './ReviewForm'

const AddReview = () => {
  return (
    <Suspense fallback={null}>
      <ReviewForm />
    </Suspense>
  )
}

export default AddReview
