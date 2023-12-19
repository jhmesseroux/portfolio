import { CertificationIcon, EducationIcon, ExternalLinkIcon, StarIcon } from '@/components'
import Experiences from '@/components/portfolio/Experiences'
import Projects from '@/components/portfolio/Projects'
import { BASE_URL_API } from '@/constants'
import { EducationResponse, ExperienceResponses, ProjectResponse } from '@/interfaces'

async function getData() {
  try {
    const expResponse = fetch(BASE_URL_API + '/experiences', {
      next: {
        revalidate: 60 * 5,
      },
    })
    const projectResponse = fetch(BASE_URL_API + '/projects', {
      next: {
        revalidate: 60 * 5,
      },
    })

    const educationResponse = fetch(BASE_URL_API + '/educations', {
      next: {
        revalidate: 60 * 5,
      },
    })

    const [experiences, projects, educations] = await Promise.all([expResponse, projectResponse, educationResponse])

    const exp: ExperienceResponses = await experiences.json()
    const pro: ProjectResponse = await projects.json()
    const edu: EducationResponse = await educations.json()

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
    return { experiences: exp, projects: pro, educations: edu }
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

      <div className='educations my-8 p-4'>
        <div className='projects-header flex items-center  gap-4'>
          <span className='text-lg sm:text-3xl text-brand font-extrabold'>Educations</span>
          <EducationIcon className='' />
        </div>
        <div className='educations-content flex  gap-8 mt-6 flex-wrap'>
          {data?.educations.data
            .filter((ed) => ed.type === 'education')
            .sort((a, b) => a.startYear - b.startYear)
            .map((education, index) => (
              <div
                key={index}
                className='w-full md:w-[300px] hover:border rounded-lg hover:shadow  border-slate-300 dark:border-slate-700 hover:border-brand dark:hover:border-brand'
              >
                <div className='education     p-6 flex flex-col gap-3 h-full  hover:skew-y-1 hover:skew-x-1 duration-700 transition-transform cursor-pointer  group hover:scale-105 '>
                  <div className='education-title'>
                    <h3 className='education-name text-2xl sm:text-3xl font-semibold group-hover:text-brand'>{education.degree}</h3>
                  </div>
                  <div className='education-name'>
                    <h3 className='education-name text-lg'>{education.name}</h3>
                  </div>
                  <div className='education-date flex items-center gap-3 group-hover:text-brand2 text-sm'>
                    <span className='education-date'>{education.startMonth + '-' + education.startYear}</span>
                    <span className='education-date'>{education.endMonth + '-' + education.endYear}</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className='certifications-and-licenses my-8 p-4 '>
        <div className='certifications-header flex items-center gap-4'>
          <span className='text-lg sm:text-3xl text-brand font-extrabold'>Certifications and Licenses</span>
          <CertificationIcon />
        </div>
        <div className='certifications-content flex items-center gap-12 mt-6 flex-wrap'>
          {data?.educations.data
            .filter((ed) => ed.type !== 'education')
            .sort((a, b) => a.startYear - b.startYear)
            .map((education, index) => (
              <div
                className='certification-item rounded-lg w-full md:w-[350px]  animatedBorder'
                data-border='thin'
                key={index}
                data-blur='none'
              >
                <div className='rounded-lg border-[1px] bg-white  dark:bg-slate-950 p-6 flex flex-col gap-3 border-slate-300 dark:border-sky-700 dark:border-opacity-25   duration-700 transition-all cursor-pointer hover:border-none group  '>
                  <div>
                    <h3 className='certifications-name text-2xl sm:text-3xl font-semibold '>{education.name}</h3>
                    <a
                      href={education.organization?.url}
                      target='_blank'
                      className='hover:text-sky-500 hover:underline duration-700 transition-color'
                    >
                      <h3 className='certifications-org-name text-base mt-1'> {education.organization?.name}</h3>
                    </a>
                  </div>
                  <div className='education-date flex items-center gap-3 '>
                    <span className='education-date text-slate-700 dark:text-slate-400 text-sm text-opacity-90 dark:text-opacity-80'>
                      Issued {education.startMonth + '-' + education.startYear}
                    </span>
                    {/* <span className='education-date'>{education.endMonth + '-' + education.endYear}</span> */}
                  </div>
                  <a
                    href={education.credentialUrl!}
                    target='_blank'
                    className='group-hover:text-sky-500 hover:underline flex items-center justify-center hover:border-sky-500  dark:hover:border-sky-600  border border-slate-300 dark:border-slate-700 w-fit rounded-full py-2 px-3 gap-1 duration-700 transition-color'
                  >
                    <h3 className='education-credential-url text-sm'> Show Credential</h3>
                    <ExternalLinkIcon />
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}
