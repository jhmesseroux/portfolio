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
