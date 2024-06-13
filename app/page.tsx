import CallToAction from '@/components/portfolio/CallToAction'
import CertificationsAndLicenses from '@/components/portfolio/CertificationsAndLicenses'
import Educations from '@/components/portfolio/Educations'
import Experiences from '@/components/portfolio/Experiences'
import Projects from '@/components/portfolio/Projects'
import Recommendations from '@/components/portfolio/Recommendations'
import { EducationResponse, ExperienceResponses, ProjectResponse, ReviewResponse } from '@/interfaces'

async function getData() {
  try {
    const expResponse = fetch(process.env.NEXT_PUBLIC_API_URL + '/experiences')
    const projectResponse = fetch(process.env.NEXT_PUBLIC_API_URL + '/projects')
    const educationResponse = fetch(process.env.NEXT_PUBLIC_API_URL + '/educations')
    const reviewResponse = fetch(process.env.NEXT_PUBLIC_API_URL + '/reviews')
    const [experiences, projects, educations, reviews] = await Promise.all([
      expResponse,
      projectResponse,
      educationResponse,
      reviewResponse
    ])
    const exp: ExperienceResponses = await experiences.json()
    const pro: ProjectResponse = await projects.json()
    const edu: EducationResponse = await educations.json()
    const rev: ReviewResponse = await reviews.json()

    if (!exp.ok || !pro.ok) {
      const er = new Error('Error', {
        cause: 'cause of the error'
      })
      er.name = 'CONNECTION_ERROR'
      er.message = exp.message + '. ' + pro.message
      // @ts-ignore
      er.code = exp.code
      throw er
    }
    return { experiences: exp, projects: pro, educations: edu, reviews: rev }
  } catch (error) {
    throw error
  }
}

export default async function Home() {
  const data = await getData()
  return (
    <div className=''>
      <Experiences data={data?.experiences.data.slice(0, 3) || []} showAll={data?.experiences?.results > 3} />
      <CallToAction />
      <Projects data={data?.projects.data.slice(0, 3) || []} showAll={data.projects?.results > 3} />
      <Recommendations data={data?.reviews.data.slice(0, 3) || []} showAll={data.reviews?.results > 3} />
      <Educations data={data?.educations.data.filter((ed) => ed.type === 'education') || []} />
      <CertificationsAndLicenses data={data?.educations.data.filter((ed) => ed.type !== 'education') || []} />
    </div>
  )
}
