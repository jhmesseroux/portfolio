import CallToAction from '@/components/portfolio/CallToAction'
import CertificationsAndLicenses from '@/components/portfolio/CertificationsAndLicenses'
import Educations from '@/components/portfolio/Educations'
import Experiences from '@/components/portfolio/Experiences'
import Header from '@/components/portfolio/Header'
import Projects from '@/components/portfolio/Projects'
import Recommendations from '@/components/portfolio/Recommendations'
import { fetchAPI } from '@/helpers/api'
import { EducationResponse, ExperienceResponses, ProjectResponse, ReviewResponse } from '@/interfaces'

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
