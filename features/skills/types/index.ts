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
