import { BASE_URL_API } from '@/constants'
import { SkillResponse } from '@/interfaces'
import { Metadata } from 'next'
import React from 'react'
import SkillsBox from './SkillsBox'

export const metadata: Metadata = {
  title: 'Portfolio | Jean Hilaire Messeroux | Skills',
  description: 'Here are some of my skills.',
}

async function getData() {
  const res = await fetch(BASE_URL_API + '/skills', {
    next: {
      revalidate: 60 * 5,
    },
  })

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json() as Promise<SkillResponse>
}
const Skills = async () => {
  const skills = await getData()
  return (
    <div className='bg-red-100s max-w-3xl m-auto my-6 p-6'>
      <SkillsBox skills={skills.data} />

      <div className='skills flex flex-wrap items-center justify-center gap-3 mt-6 '>
        {skills.data.map((skill, index) => (
          <span
            key={index}
            className='skill border border-slate-300 dark:border-slate-700 py-1.5 px-3  duration-150 transition-colors to-slate-700 dark:to-slate-400 cursor-pointer hover:text-white  text-base hover:bg-brand rounded-lg'
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Skills
