import type { LocaleType } from './positions'

export const SUPPORTED_LOCALES: LocaleType[] = ['en', 'es', 'fr']
export const DEFAULT_LOCALE: LocaleType = 'en'

export const isSupportedLocale = (locale: string | null): locale is LocaleType =>
  !!locale && (SUPPORTED_LOCALES as string[]).includes(locale)

interface FormStrings {
  title: string
  subTitle: string
  submit: string
  submitting: string
  username: string
  position: string
  linkType: string
  link: string
  review: string
  placeholder: string
  selectPosition: string
  selectLinkType: string
  whyThisLink: string
  allFieldsRequired: string
  minReview: string
  invalidUrl: string
  somethingWentWrong: string
  successTitle: string
  successText: string
  submitAnother: string
  // eslint-disable-next-line no-unused-vars
  charCount: (count: number, max: number) => string
}

export const translations: Record<LocaleType, FormStrings> = {
  en: {
    title: 'Share Your Experience',
    subTitle: 'Your feedback means a lot. Take a moment to tell me about working with me.',
    submit: 'Submit Review',
    submitting: 'Submitting...',
    username: 'Full Name',
    position: 'Position',
    linkType: 'Link Type',
    link: 'Link to a social profile',
    review: 'Your Review',
    placeholder: 'Describe your experience working with me...',
    selectPosition: 'Select a position...',
    selectLinkType: 'Select an option...',
    whyThisLink: 'Used to verify your identity. Make sure it is publicly accessible.',
    allFieldsRequired: 'All fields are required',
    minReview: 'Review must be at least 10 characters',
    invalidUrl: 'Please enter a valid URL',
    somethingWentWrong: 'Something went wrong! Please try again later.',
    successTitle: 'Thank you!',
    successText: 'Your review has been submitted and will appear once approved.',
    submitAnother: 'Submit another review',
    charCount: (count, max) => `${count}/${max}`
  },
  es: {
    title: 'Comparte tu experiencia',
    subTitle: '¡Valoramos tus comentarios! Tómate un momento para contarnos sobre tu experiencia.',
    submit: 'Enviar reseña',
    submitting: 'Enviando...',
    username: 'Nombre completo',
    position: 'Posición',
    linkType: 'Tipo de enlace',
    link: 'Enlace a una red social',
    review: 'Tu reseña',
    placeholder: 'Describe tu experiencia trabajando conmigo...',
    selectPosition: 'Seleccionar una posición...',
    selectLinkType: 'Seleccionar una opción',
    whyThisLink: 'Se usará para verificar tu identidad. Asegúrate de que sea accesible públicamente.',
    allFieldsRequired: 'Todos los campos son obligatorios',
    minReview: 'La reseña debe tener al menos 10 caracteres',
    invalidUrl: 'Por favor, introduce una URL válida',
    somethingWentWrong: '¡Algo salió mal! Inténtalo de nuevo más tarde.',
    successTitle: '¡Gracias!',
    successText: 'Tu reseña ha sido enviada y aparecerá una vez aprobada.',
    submitAnother: 'Enviar otra reseña',
    charCount: (count, max) => `${count}/${max}`
  },
  fr: {
    title: 'Partagez votre expérience',
    subTitle: 'Votre avis compte beaucoup. Prenez un moment pour partager votre expérience.',
    submit: 'Envoyer l\'avis',
    submitting: 'Envoi...',
    username: 'Nom complet',
    position: 'Poste',
    linkType: 'Type de lien',
    link: 'Lien vers un profil social',
    review: 'Votre avis',
    placeholder: 'Décrivez votre expérience en travaillant avec moi...',
    selectPosition: 'Sélectionnez un poste...',
    selectLinkType: 'Sélectionnez une option...',
    whyThisLink: 'Utilisé pour vérifier votre identité. Assurez-vous qu\'il soit accessible publiquement.',
    allFieldsRequired: 'Tous les champs sont obligatoires',
    minReview: 'L\'avis doit contenir au moins 10 caractères',
    invalidUrl: 'Veuillez entrer une URL valide',
    somethingWentWrong: 'Une erreur est survenue. Veuillez réessayer plus tard.',
    successTitle: 'Merci !',
    successText: 'Votre avis a été envoyé et apparaîtra une fois approuvé.',
    submitAnother: 'Envoyer un autre avis',
    charCount: (count, max) => `${count}/${max}`
  }
}
