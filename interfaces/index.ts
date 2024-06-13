export interface ProjectResponse {
  ok: boolean
  code: number
  status: string
  message: string
  results: number
  data: IProject[]
}

export interface IProject {
  id: number
  level: string
  title: string
  description: string
  photo: string
  skills: string[]
  startMonth: string
  startYear: number
  endMonth: string
  endYear: number
  demoLink: string | null
  gitBack: string
  current: boolean
  gitFront: string
  collaborators: string[]
  createdAt: string
  updatedAt: string
}

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

export interface SkillResponse {
  ok: boolean
  code: number
  message: string
  status: string
  results: number
  data: ISkill[]
}

export interface ISkill {
  id: number
  name: string
  createdAt: string
  updatedAt: string
}

export interface EducationResponse {
  ok: boolean
  code: number
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
  createdAt: Date
  updatedAt: Date
}

export interface Organization {
  url: string
  name: string
}

export interface ReviewResponse {
  ok: boolean
  code: number
  status: string
  results: number
  data: IReview[]
}

export interface IReview {
  id: number
  review: string
  author: Author
  createdAt: Date
  updatedAt: Date
}

export interface Author {
  name: string
  image: string
  website: string
  linkedIn: string
  instagram: string
  facebook: string
  position: string
}
