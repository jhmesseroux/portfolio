import { CallToAction } from '@/features/hero/ui/call-to-action'
import { Header } from '@/features/hero/ui/header'
import { CertificationsAndLicenses } from '@/features/certifications/ui/certifications-and-licenses'
import { Educations } from '@/features/educations/ui/educations'
import type { EducationResponse } from '@/features/educations'
import { Experiences } from '@/features/experiences/ui/experiences'
import type { ExperienceResponses } from '@/features/experiences'
import { Projects } from '@/features/projects/ui/projects'
import type { ProjectResponse } from '@/features/projects'
import { Recommendations } from '@/features/reviews/ui/recommendations'
import type { ReviewResponse } from '@/features/reviews'
import { fetchAPI } from '@/shared/api'

async function getData() {
  const [exp, pro, edu, rev] = await Promise.all([
    fetchAPI<ExperienceResponses>('/experiences'),
    fetchAPI<ProjectResponse>('/projects?sort=order'),
    fetchAPI<EducationResponse>('/educations'),
    fetchAPI<ReviewResponse>('/reviews?show=1')
  ])
  return { experiences: exp, projects: pro, educations: edu, reviews: rev }
}

export default async function Home() {
  const data = await getData()
  return (
    <div>
      <Header />
      <Experiences data={data.experiences.data.slice(0, 3)} showAll={data.experiences.results > 3} />
      <CallToAction />
      <Projects data={data.projects.data.slice(0, 4)} showAll={data.projects.results > 4} />
      <Recommendations data={data.reviews.data.slice(0, 10)} />
      <Educations data={data.educations.data.filter((ed) => ed.type === 'education')} />
      <CertificationsAndLicenses data={data.educations.data.filter((ed) => ed.type !== 'education')} />
    </div>
  )
}
