import { CallToAction } from '@/features/hero/ui/call-to-action'
import { Experiences } from '@/features/experiences/ui/experiences'
import type { ExperienceResponses } from '@/features/experiences'
import { fetchAPI } from '@/shared/api'
import { buildMeta } from '@/shared/utils/seo'

export const metadata = buildMeta({
  title: 'Experiences | Jean H. Messeroux',
  description: 'Professional journey: 7+ years building production-grade web and mobile applications across multiple companies and industries.',
  path: '/experiences'
})

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
