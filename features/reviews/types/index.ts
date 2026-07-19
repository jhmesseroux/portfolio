export interface ReviewResponse {
  ok: boolean
  code: number
  message: string
  status: string
  results: number
  data: IReview[]
}

export interface IReview {
  id: number
  review: string
  author: Author
  createdAt: string
  updatedAt: string
}

export interface Author {
  name: string
  image: string | null
  website: string | null
  linkedIn: string | null
  instagram: string | null
  facebook: string | null
  position: string
}
