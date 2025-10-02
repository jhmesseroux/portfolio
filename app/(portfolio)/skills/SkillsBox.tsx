'use client'
import { GithubIcon, NodeIcon, MysqlIcon, ReactIcon, JavascriptIcon, TypeScriptIcon, CssIcon, HtmlIcon, TailwindIcon } from '@/components'
import React, { useEffect } from 'react'

const SkillsBox = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll('.scroller')

    // If a user hasn't opted in for recuded motion, then we add the animation
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      addAnimation()
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute('data-animated', 'true')

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector('.scroller__inner')
        const scrollerContent = Array.from(scrollerInner?.children || [])

        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true)
          //   @ts-ignore
          duplicatedItem.setAttribute('aria-hidden', 'true')
          scrollerInner?.appendChild(duplicatedItem)
        })
      })
    }
  }, [])

  const skillsListIcons = [
    {
      icon: <NodeIcon />,
      name: 'Node.js',
      borderColor: ' hover:border-green-600 dark:hover:border-green-600 ',
      textColor: 'hover:text-green-600 dark:hover:text-green-600 hover:text-green-600 text-opacity-90 '
    },
    {
      icon: <ReactIcon />,
      name: 'React.js',
      borderColor: ' hover:border-blue-500 dark:hover:border-blue-500 ',
      textColor: 'hover:text-blue-500 dark:hover:text-blue-500 hover:text-blue-500 text-opacity-90 '
    },
    {
      icon: <MysqlIcon />,
      name: 'MySQL',
      borderColor: ' hover:border-yellow-400 dark:hover:border-yellow-400 ',
      textColor: 'hover:text-yellow-400 dark:hover:text-yellow-400 hover:text-yellow-400 text-opacity-90 '
    },
    {
      icon: <ReactIcon />,
      name: 'react Native',
      borderColor: ' hover:border-sky-500 dark:hover:border-sky-500 ',
      textColor: 'hover:text-sky-500 dark:hover:text-sky-500 hover:text-sky-500 text-opacity-90 '
    },
    {
      icon: <GithubIcon />,
      name: 'GIT',
      borderColor: ' hover:border-slate-500 dark:hover:border-slate-500 ',
      textColor: 'hover:text-slate-500 dark:hover:text-slate-500 hover:text-slate-500 text-opacity-90 '
    },
    {
      icon: <JavascriptIcon />,
      name: 'Javascript',
      borderColor: ' hover:border-yellow-500 dark:hover:border-yellow-500 ',
      textColor: 'hover:text-yellow-500 dark:hover:text-yellow-500 hover:text-yellow-500 text-opacity-90 '
    },
    {
      icon: <TypeScriptIcon />,
      name: 'Typescript',
      borderColor: ' hover:border-blue-500 dark:hover:border-blue-500 ',
      textColor: 'hover:text-blue-500 dark:hover:text-blue-500 hover:text-blue-500 text-opacity-90 '
    },
    {
      icon: <CssIcon />,
      name: 'CSS3',
      borderColor: ' hover:border-pink-500 dark:hover:border-pink-500 ',
      textColor: 'hover:text-pink-500 dark:hover:text-pink-500 hover:text-pink-500 text-opacity-90 '
    },
    {
      icon: <HtmlIcon />,
      name: 'HTML5',
      borderColor: ' hover:border-red-500 dark:hover:border-red-500 ',
      textColor: 'hover:text-red-500 dark:hover:text-red-500 hover:text-red-500 text-opacity-90 '
    },
    {
      icon: <TailwindIcon />,
      name: 'Tailwind CSS',
      borderColor: ' hover:border-cyan-500 dark:hover:border-cyan-500 ',
      textColor: 'hover:text-cyan-700 dark:hover:text-cyan-700 hover:text-cyan-700 text-opacity-90 '
    }
  ]

  return (
    <div className='w-full'>
      <h3 className='text-2xl sm:text-3xl text-slate-600 dark:text-slate-500 dark:hover:text-slate-400 cursor-default font-bold mb-4 title-form'>
        CORE STACK
      </h3>
      <div
        className='scroller'
        data-speed='slow'
        // @ts-expect-error
        style={{ '--_animation-duration': '40s' }}
      >
        <div className='scroller__inner'>
          <div className='links-medias flex items-center gap-4 flex-wrap'>
            {skillsListIcons.map((skill, index) => (
              <div
                key={index}
                className={`skill-icon-item dark:hover:text-opacity-80 duration-300 transition-colors flex items-center cursor-pointer gap-4 border-[1px] border-slate-300 dark:border-slate-700  rounded-full px-3 py-1 ${skill.borderColor} `}
              >
                {skill.icon}
                <span className={'duration-300 transition-colors ' + skill.textColor}>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillsBox
