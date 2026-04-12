import { fetchAPI } from '@/helpers/api'
import { SkillResponse } from '@/interfaces'
import { Metadata } from 'next'
import SkillsBox from './SkillsBox'
import CollapsibleTags from '@/components/global/CollapsibleTags'
import CallToAction from '@/components/portfolio/CallToAction'

export const metadata: Metadata = {
  title: 'Skills | Portfolio | Jean Hilaire Messeroux',
  description: 'Here are some of my skills.'
}

const Skills = async () => {
  const skills = await fetchAPI<SkillResponse>('/skills')
  return (
    <div className='w-full md:max-w-4xl m-auto my-6 p-3 md:p-6'>
      <SkillsBox />
      <CollapsibleTags
        tags={skills.data.map((s) => s.name)}
        visibleCount={5}
        className='mt-6 justify-center gap-4'
        tagClassName='text-base py-1.5 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 rounded-lg'
      />
      <CallToAction className='my-12' />
    </div>
  )
}

export default Skills
