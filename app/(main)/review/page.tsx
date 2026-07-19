import { Suspense } from 'react'
import { ReviewForm } from '@/features/reviews/ui/review-form'

const AddReview = () => {
  return (
    <Suspense fallback={null}>
      <ReviewForm />
    </Suspense>
  )
}

export default AddReview
