import Projects from '@/components/portfolio/Projects'
import { ProjectResponse } from '@/interfaces'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Projects | Portfolio | Jean Hilaire Messeroux',
  description: 'Here are some of my projects that I have worked on.'
}

async function getData() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/projects')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json() as Promise<ProjectResponse>
}
const MyProjects = async () => {
  const projects = await getData()
  return (
    <div className='my-6'>
      <Projects data={projects.data} />
    </div>
  )
}

export default MyProjects
