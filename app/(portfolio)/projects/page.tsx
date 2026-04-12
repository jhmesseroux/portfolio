import CallToAction from '@/components/portfolio/CallToAction'
import { fetchAPI } from '@/helpers/api'
import { buildMeta } from '@/helpers/seo'
import { ProjectResponse } from '@/interfaces'
import ProjectsFilter from './ProjectsFilter'

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
