import React from 'react'
import {
  YoutubeIcon,
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  TelegramIcon,
} from '..'
import SocialLink from './SocialLink'

const Medias = () => {
  return (
    <div className='red-socials  flex flex-col items-center'>
      <h3 className='text-brand2 dark:text-slate-500 text-lg sm:text-2xl font-semibold mb-3'>
        Medias
      </h3>
      <div className='links-medias flex items-center gap-4 flex-wrap'>
        <SocialLink
          Icon={YoutubeIcon}
          className='border-red-500 text-red-500 hover:bg-red-600'
          title='Youtube'
          to='https://www.youtube.com/@jhmesseroux'
        />
        <SocialLink
          Icon={GithubIcon}
          className='border-slate-500 hoverLborder-brand hover:bg-slate-800'
          title='Github'
          to='https://github.com/jhmesseroux'
        />
        <SocialLink
          Icon={LinkedinIcon}
          className='border-blue-600 text-blue-600 hover:bg-blue-700'
          title='Linkedin'
          to='https://www.linkedin.com/in/jhmesseroux/'
        />
        <SocialLink
          Icon={InstagramIcon}
          className='border-pink-500 text-pink-500 hover:bg-pink-600'
          title='Instagram'
          to='https://www.instagram.com/jhmesseroux/'
        />
        <SocialLink
          Icon={TelegramIcon}
          className='border-sky-500 text-sky-500 hover:bg-sky-600'
          title='Telegram'
          to='https://www.instagra,.com/jhmesseroux/'
        />
      </div>
    </div>
  )
}

export default Medias
