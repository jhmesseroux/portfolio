import { fetchAPI } from '@/helpers/api'
import { buildMeta } from '@/helpers/seo'
import { SkillResponse } from '@/interfaces'
import SkillsBox from './SkillsBox'
import SkillsList from './SkillsList'
import CallToAction from '@/components/portfolio/CallToAction'

export const metadata = buildMeta({
  title: 'Skills & Expertise | Jean H. Messeroux',
  description: 'Technologies, tools, and skills I work with — JavaScript, TypeScript, React, Next.js, Node.js, React Native, cloud infrastructure, and more.',
  path: '/skills'
})

const Skills = async () => {
  const skills = await fetchAPI<SkillResponse>('/skills')
  return (
    <div className='w-full md:max-w-4xl m-auto my-6 p-3 md:p-6'>
      <header className='mb-8'>
        <h1 className='text-3xl sm:text-4xl font-bold text-brand mb-2'>Skills & Expertise</h1>
        <p className='text-slate-600 dark:text-slate-400 text-base'>
          A comprehensive look at the technologies, tools, and skills I work with.
        </p>
      </header>
      <SkillsBox />
      <SkillsList skills={skills.data} />
      <CallToAction className='my-12' />
    </div>
  )
}

export default Skills
