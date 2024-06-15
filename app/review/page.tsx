'use client'
import FormError from '@/components/errors/FormError'
import Input from '@/components/global/Input'
import { useSearchParams } from 'next/navigation'
import React, { useState } from 'react'
const jobPositionsEnglish = [
  'Software Engineer',
  'Front-End Developer',
  'Back-End Developer',
  'Full-Stack Developer',
  'Mobile App Developer',
  'DevOps Engineer',
  'Data Scientist',
  'Data Analyst',
  'Business Intelligence Analyst',
  'Data Engineer',
  'Machine Learning Engineer',
  'Project Manager',
  'Product Manager',
  'Scrum Master',
  'Program Manager',
  'Business Analyst',
  'UX/UI Designer',
  'Graphic Designer',
  'Web Designer',
  'Product Designer',
  'Interaction Designer',
  'Digital Marketing Specialist',
  'Social Media Manager',
  'Content Marketing Specialist',
  'SEO Specialist',
  'Marketing Analyst',
  'Sales Representative',
  'Account Manager',
  'Sales Manager',
  'Business Development Manager',
  'Customer Success Manager',
  'HR Manager',
  'Recruiter',
  'HR Generalist',
  'Talent Acquisition Specialist',
  'Employee Relations Specialist',
  'Accountant',
  'Financial Analyst',
  'Controller',
  'Finance Manager',
  'Auditor',
  'CEO',
  'Founder',
  'Co-Founder',
  'Chief Operating Officer',
  'Chief Technology Officer',
  'Chief Marketing Officer'
]
const jobPositionsSpanish = [
  'Ingeniero de Software',
  'Desarrollador Front-End',
  'Desarrollador Back-End',
  'Desarrollador Full-Stack',
  'Desarrollador de Aplicaciones Móviles',
  'Ingeniero DevOps',
  'Científico de Datos',
  'Analista de Datos',
  'Analista de Inteligencia de Negocios',
  'Ingeniero de Datos',
  'Ingeniero de Aprendizaje Automático',
  'Gerente de Proyectos',
  'Gerente de Producto',
  'Scrum Master',
  'Gerente de Programa',
  'Analista de Negocios',
  'Diseñador UX/UI',
  'Diseñador Gráfico',
  'Diseñador Web',
  'Diseñador de Producto',
  'Diseñador de Interacción',
  'Especialista en Marketing Digital',
  'Gerente de Redes Sociales',
  'Especialista en Marketing de Contenidos',
  'Especialista en SEO',
  'Analista de Marketing',
  'Representante de Ventas',
  'Gerente de Cuentas',
  'Gerente de Ventas',
  'Gerente de Desarrollo de Negocios',
  'Gerente de Éxito del Cliente',
  'Gerente de Recursos Humanos',
  'Reclutador',
  'Generalista de Recursos Humanos',
  'Especialista en Adquisición de Talento',
  'Especialista en Relaciones Laborales',
  'Contador',
  'Analista Financiero',
  'Controlador',
  'Gerente Financiero',
  'Auditor',
  'CEO',
  'Fundador',
  'Co-Fundador',
  'Director de Operaciones',
  'Director de Tecnología',
  'Director de Marketing'
]

const formEntries = {
  en: {
    review: 'Description',
    title: 'Share Your Experience with Us',
    subTitle: 'We value your feedback! Please take a moment to let us know about your experience.',
    submit: 'Submit Review',
    username: 'Full Name',
    position: 'Position',
    LinkType: 'Link Type',
    link: 'Link',
    placeholder: 'Describe your experience with our service or product...',
    selectDOptPosition: 'Select a position...',
    selectDOptLinkType: 'Select an option...',
    options: jobPositionsEnglish,
    whyThisLink: 'This will be used to verify your identity. Make sure it is a valid link and publicly accessible.'
  },
  es: {
    review: 'Descripción',
    title: 'Comparte tu experiencia con nosotros',
    subTitle: '¡Valoramos tus comentarios! Por favor, tómate un momento para contarnos sobre tu experiencia.',
    submit: 'Enviar reseña',
    username: 'Nombre completo',
    position: 'Posición',
    LinkType: 'Tipo de enlace',
    link: 'Enlace',
    avatar: 'Avatar',
    placeholder: 'Describe tu experiencia con nuestro servicio o producto...',
    selectDOptPosition: 'Seleccionar una posición...',
    selectDOptLinkType: 'Seleccionar una opción',
    options: jobPositionsSpanish,
    whyThisLink: 'Esto se utilizará para verificar tu identidad. Asegúrate de que sea un enlace válido y accesible públicamente.'
  }
}

type localeType = 'en' | 'es'

const AddReview = () => {
  const [errors, setErrors] = useState<any | undefined | any>({})
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)
  const searchParams = useSearchParams()
  const locale: localeType = (searchParams.get('locale') as localeType) || 'en'
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setErrors({})
    const form = e.currentTarget as HTMLFormElement
    const formData = new FormData(form)
    const _data = Object.fromEntries(formData.entries())
    if (!_data.position || !_data.linkType || !_data.name || !_data.review || !_data.link)
      return setError(locale === 'en' ? 'All fields are required' : 'Todos los campos son obligatorios')
    const cleanData = {
      review: _data.review,
      author: {
        name: _data.name,
        position: _data.position,
        [`${_data.linkType}`]: _data.link
      }
    }
    try {
      setLoading(true)
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(cleanData)
      })
      const data = await res.json()
      if (data.ok) {
        form.reset()
        setSuccess('Review submitted successfully. Thank you!')
      }
    } catch (error) {
      setError('Something went wrong! Please try again later.')
    } finally {
      setLoading(false)
    }
  }
  return (
    <div
      id='new-review'
      className='new-review relative bg-white shadow-1 dark:bg-slate-900 p-6 mt-20 border-none dark:shadow-none flex flex-col w-full md:w-[590px] self-center mx-0 rounded py-8'
    >
      <section className='sign-in'>
        <div className='sign-in__header'>
          <h1 className='text-gradient text-lg sm:text-3xl  font-semibold'>{formEntries[locale].title}</h1>
          <p className='sign-in__subtitle my-2 font-normal text-base mb-4 '>{formEntries[locale].subTitle}</p>
        </div>

        <form className={loading ? 'is-loading' : ''} onSubmit={handleSubmit}>
          <Input
            className='max-h-28'
            disabled={loading}
            label={formEntries[locale].review}
            required
            name='review'
            placeholder={formEntries[locale].placeholder}
            textArea
            hasError={errors?.review}
          />
          <div className='flex flex-col sm:flex-row  md:gap-4'>
            <fieldset className='w-full flex flex-col '>
              <label
                htmlFor='linkType'
                className='font-medium flex items-center justify-between first-letter:capitalize text-slate-700 dark:text-slate-500   p-1 '
              >
                <span>
                  {formEntries[locale].position} <span className='text-red-400 font-bold'>*</span>
                </span>
              </label>
              <select
                name='position'
                id='position'
                required
                className='w-full px-2 py-[9px] border border-gray-300 dark:border-slate-800 hover:!border-brand focus:border-primary dark:focus:border-brand focus:border outline-none focus:outline-none bg-white dark:bg-slate-950 dark:text-slate-400  placeholder:text-slate-400 dark:placeholder:text-slate-600 disabled:cursor-not-allowed rounded '
              >
                <option value='' defaultChecked>
                  {formEntries[locale].selectDOptPosition}
                </option>
                {formEntries[locale].options.sort().map((option, i) => (
                  <option key={i} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </fieldset>
            <Input
              label={formEntries[locale].username}
              name='name'
              disabled={loading}
              required
              placeholder='John Doe'
              hasError={errors?.name}
            />
          </div>
          <div className='flex flex-col  items-start gap-4'>
            <fieldset className='w-full flex flex-col '>
              <label
                htmlFor='linkType'
                className='font-medium flex items-center justify-between first-letter:capitalize text-slate-700 dark:text-slate-500   p-1 '
              >
                <span>
                  {formEntries[locale].LinkType} <span className='text-red-400 font-bold'>*</span>
                </span>
              </label>
              <select
                name='linkType'
                required
                id='linkType'
                className='w-full px-2 py-[9px] border border-gray-300 dark:border-slate-800 hover:!border-brand focus:border-primary dark:focus:border-brand focus:border outline-none focus:outline-none bg-white dark:bg-slate-950 dark:text-slate-400  placeholder:text-slate-400 dark:placeholder:text-slate-600 disabled:cursor-not-allowed rounded '
              >
                <option value='' defaultChecked>
                  {formEntries[locale].selectDOptLinkType}
                </option>
                <option value='linkedIn'>LinkedIn</option>
                <option value='instagram'>Instagram</option>
                <option value='website'>Otro</option>
              </select>
            </fieldset>
            <Input
              label={formEntries[locale].link}
              name='link'
              disabled={loading}
              type='url'
              className='flex-1'
              fieldsetClassName=''
              required
              placeholder='https://www.linkedin.com/in/jhmesseroux/'
              templateExtra={() => <span className='text-xs text-violet-400 dark:text-slate-500'>{formEntries[locale].whyThisLink}</span>}
              hasError={errors?.link}
            />
          </div>

          {error && <FormError className='border border-red-400 border-dashed mb-4' text={error} />}
          {success && <div className='border-green-400 dark:bg-green-800/20 text-green-500 bg-green-100 p-3  my-4'>{success}</div>}

          <div className='sign-in__form__group flex items-center mt-6 '>
            <button className='w-fit bg-violet-500 text-white hover:bg-violet-400  py-2 px-4 rounded' type='submit' disabled={loading}>
              {loading ? 'Submitting...' : formEntries[locale].submit}
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default AddReview
