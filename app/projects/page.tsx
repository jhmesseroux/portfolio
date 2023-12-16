import Projects from '@/components/portfolio/Projects'
import { ProjectResponse } from '@/interfaces'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Portfolio | Jean Hilaire Messeroux | Projects',
  description: 'Here are some of my projects that I have worked on.',
}

async function getData() {
  const res = await fetch('http://localhost:4000/api/v1/projects', {
    next: {
      revalidate: 3600 * 24 * 7,
    },
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json() as Promise<ProjectResponse>
}
const Skills = async () => {
  const projects = await getData()
  return (
    <div className='bg-red-100s max-w-3xl m-auto my-6 p-6'>
      <Projects data={projects.data} />
    </div>
  )
}

export default Skills
