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
    <div className=' w-full md:max-w-3xl m-auto my-6 p-6 '>
      <SkillsBox skills={skills.data} />

      <div className='skills flex flex-wrap items-center justify-center gap-4 mt-6 '>
        {skills.data.map((skill, index) => (
          <div className='rounded-lg animatedBorder' data-border='thin' data-blur='big' key={index}>
            <div className='skill  border bg-white  dark:bg-slate-950  border-slate-300 dark:border-slate-700 py-1.5 px-3 cursor-pointer  text-base rounded-lg '>
              {skill.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
