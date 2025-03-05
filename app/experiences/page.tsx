import CallToAction from '@/components/portfolio/CallToAction'
import Experiences from '@/components/portfolio/Experiences'
import { ExperienceResponses } from '@/interfaces'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'My experiences | Portfolio | Jean Hilaire Messeroux',
  description: 'Here are some of my experiences.'
}

async function getData() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/experiences')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json() as Promise<ExperienceResponses>
}
const MyExperiences = async () => {
  const experiences = await getData()
  return (
    <div className='max-w-5xl m-auto my-6 p-6'>
      <Experiences data={experiences.data} />
      <CallToAction />
    </div>
  )
}

export default MyExperiences
