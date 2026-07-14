import { buildMeta } from '@/helpers/seo'
import Link from 'next/link'
import React from 'react'

export const metadata = buildMeta({
  title: 'Privacy Policy | jhmesseroux App',
  description: 'Privacy policy for the jhmesseroux app by Jean Hilaire Messeroux. Learn what data the app collects and how it is used.',
  path: '/privacy'
})

const LAST_UPDATED = 'July 13, 2026'
const CONTACT_EMAIL = 'jhmcode.dev@gmail.com'

const sections = [
  {
    id: 1,
    title: '1. Overview',
    content: [
      'The jhmesseroux app ("the App") is the mobile companion of this portfolio website. It showcases the projects, professional experiences, skills, education, and reviews of Jean Hilaire Messeroux.',
      'The App is designed to work without requiring you to create an account or provide any personal information to browse its content.'
    ]
  },
  {
    id: 2,
    title: '2. Information We Collect',
    content: [
      'The App does not require registration and does not collect personal information for browsing. The content you see (projects, experiences, skills, reviews) is fetched from our servers as read-only data.',
      'If you choose to submit a review or contact us through the App or the website, we collect only the information you voluntarily provide, such as your name, your position or company, and the content of your message.',
      'To keep the App stable, we use automatic error and crash reporting (via Sentry). These reports may include technical information such as your device model, operating system version, app version, and the state of the App at the moment of the error. They are used exclusively for diagnosing and fixing problems.'
    ]
  },
  {
    id: 3,
    title: '3. Information Stored on Your Device',
    content: [
      'Preferences such as your chosen theme (dark or light mode) are stored locally on your device. This data never leaves your device and can be removed at any time by clearing the App data or uninstalling the App.'
    ]
  },
  {
    id: 4,
    title: '4. How We Use Your Information',
    content: [
      'We use the information described above to display and improve the App, respond to messages you send us, publish reviews you voluntarily submit, and diagnose crashes and errors.',
      'We do not sell, rent, or trade your personal information. We do not use your data for advertising, and the App contains no third-party ads.'
    ]
  },
  {
    id: 5,
    title: '5. Third-Party Services',
    content: [
      'The App relies on a small number of third-party services to function: our own backend API (to serve portfolio content) and Sentry (for error and crash reporting). Each service receives only the minimum data required to do its job.',
      'The App may contain links to external websites and platforms (such as LinkedIn, GitHub, or WhatsApp). Once you leave the App, the privacy policy of the destination site applies.'
    ]
  },
  {
    id: 6,
    title: '6. Data Retention & Deletion',
    content: [
      `Review or contact submissions are kept for as long as they are relevant to the portfolio. You can request the removal of anything you have submitted at any time by emailing ${CONTACT_EMAIL}, and we will delete it promptly.`,
      'Crash and error reports are retained only as long as needed to investigate and resolve the underlying issue.'
    ]
  },
  {
    id: 7,
    title: "7. Children's Privacy",
    content: [
      'The App is not directed at children under 13 and does not knowingly collect personal information from them. If you believe a child has provided us personal information, please contact us and we will delete it.'
    ]
  },
  {
    id: 8,
    title: '8. Changes to This Policy',
    content: [
      'We may update this privacy policy from time to time. Changes will be posted on this page with an updated "Last updated" date. Continued use of the App after changes are published constitutes acceptance of the updated policy.'
    ]
  }
]

const PrivacyPolicy = () => {
  return (
    <div id='privacy' className='max-w-3xl mx-auto my-6 p-3 md:p-6'>
      <div className='my-6 flex flex-col'>
        <h1 className='text-gradient text-3xl font-bold'>Privacy Policy</h1>
        <p className='mt-2 text-sm text-gray-500 dark:text-gray-400'>Last updated: {LAST_UPDATED}</p>
        <p className='mt-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300'>
          {
            'This privacy policy explains how the jhmesseroux app, developed by Jean Hilaire Messeroux, handles your information. In short: the App is a portfolio viewer — it collects as little as possible.'
          }
        </p>
      </div>

      <div className='flex flex-col gap-y-8'>
        {sections.map((section) => (
          <section key={section.id} aria-labelledby={`privacy-section-${section.id}`}>
            <h2 id={`privacy-section-${section.id}`} className='text-xl font-semibold text-violet-600 dark:text-blue-400'>
              {section.title}
            </h2>
            <div className='mt-2 flex flex-col gap-y-3'>
              {section.content.map((paragraph, index) => (
                <p key={index} className='leading-relaxed text-gray-700 dark:text-gray-300 text-pretty'>
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}

        <section aria-labelledby='privacy-section-contact'>
          <h2 id='privacy-section-contact' className='text-xl font-semibold text-violet-600 dark:text-blue-400'>
            9. Contact
          </h2>
          <p className='mt-2 leading-relaxed text-gray-700 dark:text-gray-300'>
            {'If you have any questions about this privacy policy or how your data is handled, contact us at '}
            <Link className='text-pink-500 hover:underline' href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </Link>
            {'.'}
          </p>
        </section>
      </div>
    </div>
  )
}

export default PrivacyPolicy
