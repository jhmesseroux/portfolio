export interface EducationResponse {
  ok: boolean
  code: number
  message: string
  status: string
  results: number
  data: IEducation[]
}

export interface IEducation {
  id: number
  name: string
  degree: null | string
  startMonth: string
  endMonth: null | string
  startYear: number
  endYear: number | null
  current: boolean
  skills: string[]
  location: null | string
  organization: Organization | null
  credentialUrl: null | string
  type: string
  createdAt: string
  updatedAt: string
}

export interface Organization {
  url: string
  name: string
}
