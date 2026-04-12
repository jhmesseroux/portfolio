import React from 'react'
import { YoutubeIcon, GithubIcon, LinkedInIcon, InstagramIcon, TelegramIcon, EmailIcon, XIcon } from '..'
import WhatsappIcon from '../icons/WhatsappIcon'
import SocialLink from './SocialLink'

const Medias = () => {
  return (
    <div className='flex flex-col items-center' data-testid='footer-socials'>
      <h3 className='text-brand2 dark:text-slate-500 text-lg sm:text-2xl font-semibold mb-3'>{"Let's Connect"}</h3>
      <div className='flex items-center justify-center gap-4 flex-wrap'>
        <SocialLink
          Icon={YoutubeIcon}
          className='border-red-500 text-red-500 hover:bg-red-600'
          title='Youtube'
          to='https://www.youtube.com/@jhmesseroux'
        />
        <SocialLink
          Icon={GithubIcon}
          className='border-slate-500 hover:border-brand hover:bg-slate-800'
          title='Github'
          to='https://github.com/jhmesseroux'
        />
        <SocialLink
          Icon={LinkedInIcon}
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
          to='https://t.me/jhmesseroux'
        />
        <SocialLink
          Icon={XIcon}
          className='border-slate-700 dark:border-slate-300 text-slate-700 dark:text-slate-300 hover:bg-slate-900'
          title='X (Twitter)'
          to='https://x.com/jhmesseroux'
        />
        <SocialLink
          Icon={WhatsappIcon}
          className='border-green-500 text-green-500 hover:bg-green-600'
          title='WhatsApp'
          to='https://wa.me/+15147027882'
        />
        <SocialLink
          Icon={EmailIcon}
          className='border-violet-500 text-violet-500 hover:bg-violet-600'
          title='Email'
          to='mailto:jhmcode.dev@gmail.com'
        />
      </div>
    </div>
  )
}

export default Medias
