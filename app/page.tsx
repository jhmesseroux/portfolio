import Experiences from '@/components/portfolio/Experiences'
import Projects from '@/components/portfolio/Projects'
import { ExperienceResponses, ProjectResponse } from '@/interfaces'

async function getData() {
  try {
    const expResponse = fetch('http://localhost:4000/api/v1/experiences', {
      next: {
        revalidate: 3600 * 24 * 7,
      },
    })
    const projectResponse = fetch('http://localhost:4000/api/v1/projects')
    const [experiences, projects] = await Promise.all([expResponse, projectResponse])

    const exp: ExperienceResponses = await experiences.json()
    const pro: ProjectResponse = await projects.json()

    if (!exp.ok || !pro.ok) {
      const er = new Error('Error', {
        cause: 'cause of the error',
      })
      er.name = 'CONNECTION_ERROR'
      er.message = exp.message + '. ' + pro.message
      // @ts-ignore
      er.code = exp.code
      throw er
    }
    return { experiences: exp, projects: pro }
  } catch (error) {
    throw error
  }
}

export default async function Home() {
  const data = await getData()
  return (
    <>
      <Experiences data={data?.experiences.data.slice(0, 5) || []} showAll={data ? data?.experiences?.data?.length > 5 : false} />
      <Projects data={data?.projects.data.slice(0, 5) || []} showAll={data ? data.experiences.data.length > 5 : false} />
    </>
  )
}
