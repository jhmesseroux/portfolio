import CallToAction from '@/components/portfolio/CallToAction'
import Experiences from '@/components/portfolio/Experiences'
import { fetchAPI } from '@/helpers/api'
import { ExperienceResponses } from '@/interfaces'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My experiences | Portfolio | Jean Hilaire Messeroux',
  description: 'Here are some of my experiences.'
}

const MyExperiences = async () => {
  const experiences = await fetchAPI<ExperienceResponses>('/experiences')
  return (
    <div className='max-w-5xl m-auto my-6'>
      <Experiences data={experiences.data} />
      <CallToAction />
    </div>
  )
}

export default MyExperiences
