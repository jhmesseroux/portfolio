import FadeInImage from '@/components/global/FadeInImage'
import CheckIcon from '@/components/icons/CheckIcon'
import ChevronRightIcon from '@/components/icons/ChevronRightIcon'
import { cn } from '@/helpers'
import Link from 'next/link'
import React from 'react'

const MentorShip = () => {
  const services = [
    {
      id: 1,
      title: 'Mentorship & Coaching',
      description: 'Master Modern Web & Backend Development',
      benefits: [
        {
          id: 1,
          title: 'JavaScript & TypeScript Deep Dive',
          description: 'Learn core concepts, best practices, and advanced techniques.'
        },
        {
          id: 2,
          title: 'React & Next.js Mastery',
          description: 'Build powerful frontend applications with reusable components.'
        },
        {
          id: 3,
          title: 'Node.js & Backend Fundamentals',
          description: 'Learn API development, authentication, and database management.'
        },
        {
          id: 4,
          title: 'Full-Stack Project Guidance',
          description: 'Get mentorship on structuring and deploying full-stack applications.'
        },
        {
          id: 5,
          title: 'Code Reviews & Debugging',
          description: 'Improve code quality with feedback and hands-on debugging support.'
        }
      ]
    },
    {
      id: 2,
      title: 'Idea to Reality: SaaS & App Development',
      description: 'Transforming Concepts into Scalable Products',
      benefits: [
        {
          id: 1,
          title: 'SaaS Product Development',
          description: 'Plan, design, and develop software as a service.'
        },
        {
          id: 2,
          title: 'Website & Web App Development',
          description: 'Build responsive and interactive web applications.'
        },
        {
          id: 3,
          title: 'Mobile App Development',
          description: 'Create cross-platform apps with React Native or Expo.'
        },
        {
          id: 4,
          title: 'MVP Creation',
          description: 'Rapidly prototype and launch your Minimum Viable Product.'
        },
        {
          id: 5,
          title: 'Scalability & Deployment',
          description: 'Optimize and deploy projects for growth and performance.'
        }
      ]
    }
  ]

  return (
    <div id='mentorship ' className='max-w-5xl mx-auto my-12 p-4 md:p-6'>
      <div className=''>
        <div className='my-6 flex gap-x-4 flex-col'>
          <span className=' uppercase font-medium mb-2'>
            <span className='text-gradient text-3xl font-bold'>Mentorship & Development: Turning Ideas into Reality</span>
          </span>
        </div>
        <div className='text-gray-700'>
          <h3
            className='my-4  text-lg'
            dangerouslySetInnerHTML={{
              __html: `I help developers grow their skills and bring their ideas to life! Whether you need mentorship in JavaScript, TypeScript, React, Next.js, Python, or Node.js, or you're looking to build a SaaS platform, website, or mobile app, I’ve got you covered. Let’s make your vision a reality!`
            }}
          />
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-12'>
        {services.map((item, index) => (
          <div
            key={index}
            className='w-full bg-white hover:scale-105 shadow-2 hover:shadow-1 rounded-lg pb-4 overflow-hidden cursor-pointer duration-300 transition-all'
          >
            <div
              className={cn('aspect-video w-full relative flex items-center justify-center p-3', {
                'bg-violet-700': item.id === 1,
                'bg-pink-700': item.id === 2
              })}
            >
              <div className='flex flex-col items-center'>
                <h2 className={cn('text-3xl font-bold uppercase text-center text-white')}>{item.title}</h2>
                <span className={cn('text-lg  mt-3 text-center font-light text-gray-100')}>{item.description}</span>
              </div>
              <div
                className={cn(
                  'w-24 h-24 bg-gradient-to-br rounded-full flex items-center justify-center border-4 border-white z-20 absolute bottom-[-40px] left-[50%] translate-x-[-50%] overflow-hidden',
                  {
                    'from-gray-400 to-gray-500': item.id === 1,
                    'from-amber-400 to-amber-500': item.id === 2
                  }
                )}
              >
                {item.id === 1 && (
                  <FadeInImage path='/assets/images/mentorship.webp' imageAndBoxClassName='aspect-square object-cover w-28 h-28' />
                )}
                {item.id === 2 && (
                  <FadeInImage path='/assets/images/saas.webp' imageAndBoxClassName='aspect-square object-cover w-28 h-28' />
                )}
              </div>
            </div>
            <div className='p-4 mt-8'>
              <ul className='flex flex-col gap-y-2'>
                {item.benefits.map((i, index) => (
                  <li key={index} className='flex gap-x-2'>
                    <CheckIcon
                      className={cn('', {
                        'text-violet-500': item.id === 1,
                        'text-pink-600': item.id === 2
                      })}
                    />
                    <div className='flex-1 flex items-center gap-x-1'>
                      <span className='text-pretty'>
                        <span className='text-gray-700 font-medium'>{i.title} : </span>
                        <span className='text-gray-500 ml-1'>{i.description}</span>
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className='w-full p-4'>
              <Link
                target='_blank'
                href={`https://wa.me/+15147027882?text=I'm interested in ${
                  item.id === 1 ? 'Mentorship and Coaching' : 'Idea to Reality: SaaS and App Development'
                }`}
                className={cn(
                  'bg-gradient-to-br text-white hover:opacity-90 hover:scale-[1.01] duration-100 transition-all flex items-center justify-center p-2 rounded-md w-full ',
                  {
                    'from-violet-500 to-blue-700 ': item.id === 1,
                    'from-pink-600 to-pink-800': item.id === 2
                  }
                )}
              >
                <span>{item.id === 1 ? 'Get Personalized Coaching' : 'Build you website/App now'}</span>
                <ChevronRightIcon className='w-5 h-5' />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MentorShip
