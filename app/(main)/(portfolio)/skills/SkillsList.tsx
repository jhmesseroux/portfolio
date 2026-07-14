'use client'
import React, { useMemo, useState } from 'react'
import { ISkill } from '@/interfaces'
import { cn } from '@/helpers'

type Category = 'Languages' | 'Frameworks & Libraries' | 'Tools' | 'Cloud & DevOps' | 'AI & Modern' | 'Spoken Languages' | 'Soft Skills' | 'Other'

const categoryOrder: Category[] = [
  'Languages',
  'Frameworks & Libraries',
  'Cloud & DevOps',
  'Tools',
  'AI & Modern',
  'Spoken Languages',
  'Soft Skills',
  'Other'
]

const skillToCategory: Record<string, Category> = {
  // Languages
  'JavaScript': 'Languages', 'Javascript': 'Languages', 'TypeScript': 'Languages', 'Typescript': 'Languages',
  'Python': 'Languages', 'PHP': 'Languages', 'Java': 'Languages', 'C#': 'Languages', 'C++': 'Languages',
  'Ruby': 'Languages', 'Go': 'Languages', 'Rust': 'Languages', 'SQL': 'Languages', 'HTML5': 'Languages',
  'CSS3': 'Languages', 'HTML': 'Languages', 'CSS': 'Languages',
  // Frameworks & Libraries
  'React': 'Frameworks & Libraries', 'React.js': 'Frameworks & Libraries', 'Reactjs': 'Frameworks & Libraries',
  'React Native': 'Frameworks & Libraries', 'Next.js': 'Frameworks & Libraries', 'Nextjs': 'Frameworks & Libraries',
  'Vite': 'Frameworks & Libraries', 'Node.js': 'Frameworks & Libraries', 'Nodejs': 'Frameworks & Libraries',
  'Express': 'Frameworks & Libraries', 'Express.js': 'Frameworks & Libraries', 'NestJS': 'Frameworks & Libraries',
  'Tailwind CSS': 'Frameworks & Libraries', 'Tailwindcss': 'Frameworks & Libraries', 'Tailwind': 'Frameworks & Libraries',
  'Nativewind': 'Frameworks & Libraries', 'Redux': 'Frameworks & Libraries', 'Expo': 'Frameworks & Libraries',
  'Vue': 'Frameworks & Libraries', 'Angular': 'Frameworks & Libraries',
  // Cloud & DevOps
  'AWS': 'Cloud & DevOps', 'Google Cloud Platform (GCP)': 'Cloud & DevOps', 'GCP': 'Cloud & DevOps',
  'Azure': 'Cloud & DevOps', 'Vercel': 'Cloud & DevOps', 'Cloudflare': 'Cloud & DevOps',
  'Docker': 'Cloud & DevOps', 'Kubernetes': 'Cloud & DevOps', 'DevOps': 'Cloud & DevOps',
  'VPS': 'Cloud & DevOps', 'Linux': 'Cloud & DevOps', 'Nginx': 'Cloud & DevOps',
  'Network administration': 'Cloud & DevOps', 'Database management': 'Cloud & DevOps',
  // Tools
  'Postman': 'Tools', 'GIT': 'Tools', 'Git': 'Tools', 'GitHub': 'Tools', 'GitLab': 'Tools',
  'Figma': 'Tools', 'Slack': 'Tools', 'Salesforce': 'Tools', 'MySQL': 'Tools', 'PostgreSQL': 'Tools',
  'PostgresSQL': 'Tools', 'MongoDB': 'Tools', 'Redis': 'Tools', 'Firebase': 'Tools',
  'Google Chrome Extension': 'Tools', 'BullMQ': 'Tools',
  // AI & Modern
  'Claude code': 'AI & Modern', 'Claude Code': 'AI & Modern', 'Vibe coding': 'AI & Modern', 'Vibe Coding': 'AI & Modern',
  'Chat-GPT': 'AI & Modern', 'ChatGPT': 'AI & Modern', 'OpenAi': 'AI & Modern', 'OpenAI': 'AI & Modern',
  'AI & automation': 'AI & Modern', 'AI': 'AI & Modern',
  // Spoken Languages
  'French': 'Spoken Languages', 'English': 'Spoken Languages', 'Spanish': 'Spoken Languages',
  'Creole': 'Spoken Languages',
  // Soft Skills
  'Problem-solving': 'Soft Skills', 'Problem Solving': 'Soft Skills', 'Strategic planning': 'Soft Skills',
  'Cybersecurity': 'Soft Skills', 'Designing and implementing digital': 'Soft Skills'
}

const categorize = (name: string): Category => skillToCategory[name] ?? 'Other'

const SkillsList = ({ skills }: { skills: ISkill[] }) => {
  const [query, setQuery] = useState('')

  const grouped = useMemo(() => {
    const filtered = skills.filter((s) => s.name.toLowerCase().includes(query.toLowerCase()))
    const sorted = [...filtered].sort((a, b) => a.name.localeCompare(b.name))
    const groups = new Map<Category, ISkill[]>()
    for (const skill of sorted) {
      const cat = categorize(skill.name)
      if (!groups.has(cat)) groups.set(cat, [])
      groups.get(cat)!.push(skill)
    }
    return categoryOrder
      .map((cat) => ({ category: cat, items: groups.get(cat) || [] }))
      .filter((g) => g.items.length > 0)
  }, [skills, query])

  const totalFiltered = grouped.reduce((sum, g) => sum + g.items.length, 0)

  return (
    <div data-testid='skills-list'>
      <div className='flex items-center justify-between gap-3 flex-wrap mt-8 mb-4'>
        <div className='flex items-center gap-2'>
          <h2 className='text-2xl sm:text-3xl text-slate-700 dark:text-slate-300 font-bold'>All Skills</h2>
          <span className='text-sm text-slate-500 dark:text-slate-500'>({totalFiltered})</span>
        </div>
        <div className='relative w-full sm:w-auto'>
          <input
            type='search'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Search skills...'
            data-testid='skills-search'
            className='w-full sm:w-64 px-4 py-2 text-sm rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 focus:outline-none focus:border-violet-400 dark:focus:border-violet-500 transition-colors'
          />
        </div>
      </div>

      {totalFiltered === 0 ? (
        <p className='text-center text-slate-500 dark:text-slate-500 py-8'>
          {`No skills found matching "${query}"`}
        </p>
      ) : (
        <div className='flex flex-col gap-6'>
          {grouped.map(({ category, items }) => (
            <div key={category}>
              <h3 className='text-sm font-semibold uppercase tracking-wider text-violet-500 dark:text-violet-400 mb-3'>
                {category} <span className='text-slate-400 dark:text-slate-500 ml-1 normal-case font-normal'>({items.length})</span>
              </h3>
              <div className='flex flex-wrap items-start gap-2'>
                {items.map((skill) => (
                  <div
                    key={skill.id}
                    data-testid={`skill-${skill.id}`}
                    className={cn(
                      'rounded-lg animatedBorder',
                      'transition-transform duration-200 hover:scale-105'
                    )}
                    data-border='thin'
                    data-blur='big'
                  >
                    <div className='skill border bg-white dark:bg-slate-950 border-slate-300 dark:border-slate-700 py-1.5 px-4 text-base rounded-lg text-center whitespace-nowrap'>
                      {skill.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SkillsList
