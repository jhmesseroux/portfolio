import Experiences from '@/components/portfolio/Experiences'
import Projects from '@/components/portfolio/Projects'
import { ExperienceResponses, ProjectResponse } from '@/interfaces'

async function getData() {
  const expResponse = fetch('http://localhost:4000/api/v1/experiences')
  const projectResponse = fetch('http://localhost:4000/api/v1/projects')
  const [experiences, projects] = await Promise.all([
    expResponse,
    projectResponse,
  ])

  const exp: ExperienceResponses = await experiences.json()
  const pro: ProjectResponse = await projects.json()

  return { experiences: exp, projects: pro }
}

export default async function Home() {
  const data = await getData()
  return (
    <>
      <Experiences
        data={data.experiences.data.slice(0, 5)}
        showAll={data.experiences.data.length > 5}
      />

      <Projects
        data={data.projects.data.slice(0, 5)}
        showAll={data.experiences.data.length > 5}
      />
    </>
  )
}
