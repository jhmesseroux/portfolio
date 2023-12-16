export interface ProjectResponse {
  ok: boolean
  code: number
  status: string
  message: string
  data: Iproject[]
}

export interface Iproject {
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
  demoLink: string
  gitBack: string
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
  data: Iexperience[]
}

export interface Iexperience {
  id: number
  title: string
  experienceType: string
  companyName: string
  description: string
  location: string
  startMonth: string
  endMonth: string
  startYear: number
  endYear: number
  skills: string[]
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
