import CallToAction from '@/components/portfolio/CallToAction'
import { fetchAPI } from '@/helpers/api'
import { ProjectResponse } from '@/interfaces'
import { Metadata } from 'next'
import ProjectsFilter from './ProjectsFilter'

export const metadata: Metadata = {
  title: 'Projects | Portfolio | Jean Hilaire Messeroux',
  description: 'Here are some of my projects that I have worked on.'
}

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
