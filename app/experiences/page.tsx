import Experiences from '@/components/portfolio/Experiences'
import { ExperienceResponses } from '@/interfaces'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Portfolio | Jean Hilaire Messeroux | Experiences',
  description: 'Here are some of my experiences.',
}

async function getData() {
  const res = await fetch('http://localhost:4000/api/v1/experiences', {
    next: {
      revalidate: 3600 * 24 * 7,
    },
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json() as Promise<ExperienceResponses>
}
const Skills = async () => {
  const skills = await getData()
  return (
    <div className='bg-red-100s max-w-3xl m-auto my-6 p-6'>
      <Experiences data={skills.data} />
    </div>
  )
}

export default Skills
