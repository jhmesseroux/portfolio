'use client'
import React, { useEffect } from 'react'
import LinkedInIcon from '../icons/socials/LinkedinIcon'
import LinkIcon from '../icons/LinkIcon'
import { IReview } from '@/interfaces'
import StarIcon from '../icons/StarIcon'
import Image from 'next/image'
import InstagramIcon from '../icons/socials/InstagramIcon'

const Recommendations = ({ data }: { data: IReview[]; showAll: boolean }) => {
  useEffect(() => {
    const scroller = document.querySelectorAll('.scroller')

    // If a user hasn't opted in for reduce motion, then we add the animation
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      addAnimation()
    }

    function addAnimation() {
      scroller.forEach((scroller) => {
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
  return (
    <div className='my-8 p-4' id='recommendations'>
      <div className='flex items-center justify-between gap-3 flex-wrap'>
        <div className='experiences-header flex items-center justify-center gap-2 sm:gap-4 '>
          <span className='text-lg sm:text-3xl text-brand font-extrabold'>Recommendations</span>
          <StarIcon className='w-8 text-4xl' />
        </div>
        <a href='https://www.linkedin.com/in/jhmesseroux/#recommendations' target='_blank' className='hover:text-brand text-sm'>
          View all on LinkedIn &rsaquo;
        </a>
      </div>
      <div
        className='scroller'
        data-speed='slow'
        // @ts-expect-error
        style={{ '--_animation-duration': '900s' }}
      >
        <div className='scroller__inner pauseable  my-6 '>
          <div className='flex  gap-8 justify-start items-start  p-4'>
            {data.map((review, i) => (
              <div
                key={i}
                className='w-[380px] bg-white dark:bg-slate-900 shadow-1 dark:shadow-none p-4 relative  rounded hover:bg-gradient'
              >
                <div className='absolute -top-5 left-4 w-10 h-10 rounded-full shadow bg-brand flex items-center justify-center '>
                  <span className='text-white text-2xl'>&#10077;</span>
                </div>
                <div className='p-4 '>
                  <p className='text-slate-700 dark:text-slate-400 text-sm text-pretty'>{review.review}</p>
                </div>
                <hr className='dark:border-slate-800' />
                <div className='flex items-center justify-between mt-3 gap-4'>
                  <div className='flex items-center justify-between gap-2'>
                    <div className='w-10 h-10 rounded-full overflow-hidden '>
                      {review.author.image ? (
                        <Image
                          src={review.author.image}
                          alt={review.author.name}
                          width={100}
                          height={100}
                          className='w-full h-full rounded-full'
                        />
                      ) : (
                        <div className='w-full h-full shadow rounded-full flex items-center justify-center  text-brand dark:text-slate-300 bg-gray-100 dark:bg-violet-600/20 '>
                          <span className=''>
                            {review.author.name[0]}
                            {review.author.name.split(' ').length > 1 ? review.author.name.split(' ')[1][0] : ''}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className='flex flex-col gap-0'>
                      <span className='font-medium text-sm dark:text-slate-400'>{review.author.name}</span>
                      <span className='text-xs text-slate-700 dark:text-slate-500'>{review.author.position}</span>
                    </div>
                  </div>
                  <div className='socials flex  items-center gap-1'>
                    {review.author.linkedIn && (
                      <a
                        href={review.author.linkedIn}
                        target='_blank'
                        rel='noreferrer'
                        className='hover:bg-blue-400 dark:hover:bg-blue-600 hover:border-none text-blue-600 border-[0.2px] dark:border-slate-700 dark:text-blue-300 w-7 h-7 rounded-full hover:text-white flex items-center justify-center'
                      >
                        <LinkedInIcon className='w-5' />
                      </a>
                    )}
                    {review.author.instagram && (
                      <a
                        href={review.author.instagram}
                        target='_blank'
                        rel='noreferrer'
                        className='hover:bg-pink-400 hover:border-none text-pink-600 border-[0.2px] dark:border-slate-700 dark:text-pink-400 w-7 h-7 rounded-full hover:text-white flex items-center justify-center'
                      >
                        <InstagramIcon className='w-5' />
                      </a>
                    )}
                    {review.author.website && (
                      <a
                        href={review.author.website}
                        target='_blank'
                        rel='noreferrer'
                        className='hover:bg-violet-400 dark:hover:bg-violet-500 hover:border-none text-violet-600 dark:hover:text-white border-[0.2px] dark:border-slate-700  w-7 h-7 rounded-full hover:text-white flex items-center justify-center'
                      >
                        <LinkIcon className='w-5' />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recommendations
