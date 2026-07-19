import { CallToAction } from '@/features/hero/ui/call-to-action'
import { fetchAPI } from '@/shared/api'
import { buildMeta } from '@/shared/utils/seo'
import { ProjectsFilter } from '@/features/projects/ui/projects-filter'
import type { ProjectResponse } from '@/features/projects'

export const metadata = buildMeta({
  title: 'Projects | Jean H. Messeroux',
  description: 'A showcase of full-stack projects built with React, Next.js, Node.js, and TypeScript — from SaaS platforms to mobile apps.',
  path: '/projects'
})

const MyProjects = async () => {
  const projects = await fetchAPI<ProjectResponse>('/projects')
  return (
    <div className='my-6'>
      <ProjectsFilter data={projects.data} />
      <CallToAction />
    </div>
  )
}

export default MyProjects
