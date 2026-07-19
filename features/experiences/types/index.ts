export interface ExperienceResponses {
  ok: boolean
  code: number
  message: string
  status: string
  results: number
  data: IExperience[]
}

export interface IExperience {
  id: number
  title: string
  experienceType: string
  companyName: string
  companyLink: string
  description: string
  location: string
  startMonth: string
  endMonth: string
  startYear: number
  endYear: number
  skills: string[]
  demoLink: string | null
  current: boolean
  createdAt: string
  updatedAt: string
}
