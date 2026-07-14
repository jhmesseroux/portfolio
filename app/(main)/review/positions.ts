export const jobPositions = {
  en: [
    'Software Engineer', 'Front-End Developer', 'Back-End Developer', 'Full-Stack Developer',
    'Mobile App Developer', 'DevOps Engineer', 'Data Scientist', 'Data Analyst',
    'Business Intelligence Analyst', 'Data Engineer', 'Machine Learning Engineer',
    'Project Manager', 'Product Manager', 'Scrum Master', 'Program Manager', 'Business Analyst',
    'UX/UI Designer', 'Graphic Designer', 'Web Designer', 'Product Designer', 'Interaction Designer',
    'Digital Marketing Specialist', 'Social Media Manager', 'Content Marketing Specialist',
    'SEO Specialist', 'Marketing Analyst', 'Sales Representative', 'Account Manager',
    'Sales Manager', 'Business Development Manager', 'Customer Success Manager', 'HR Manager',
    'Recruiter', 'HR Generalist', 'Talent Acquisition Specialist', 'Employee Relations Specialist',
    'Accountant', 'Financial Analyst', 'Controller', 'Finance Manager', 'Auditor',
    'CEO', 'Founder', 'Co-Founder', 'Chief Operating Officer', 'Chief Technology Officer',
    'Chief Marketing Officer'
  ],
  es: [
    'Ingeniero de Software', 'Desarrollador Front-End', 'Desarrollador Back-End', 'Desarrollador Full-Stack',
    'Desarrollador de Aplicaciones Móviles', 'Ingeniero DevOps', 'Científico de Datos', 'Analista de Datos',
    'Analista de Inteligencia de Negocios', 'Ingeniero de Datos', 'Ingeniero de Aprendizaje Automático',
    'Gerente de Proyectos', 'Gerente de Producto', 'Scrum Master', 'Gerente de Programa', 'Analista de Negocios',
    'Diseñador UX/UI', 'Diseñador Gráfico', 'Diseñador Web', 'Diseñador de Producto', 'Diseñador de Interacción',
    'Especialista en Marketing Digital', 'Gerente de Redes Sociales', 'Especialista en Marketing de Contenidos',
    'Especialista en SEO', 'Analista de Marketing', 'Representante de Ventas', 'Gerente de Cuentas',
    'Gerente de Ventas', 'Gerente de Desarrollo de Negocios', 'Gerente de Éxito del Cliente',
    'Gerente de Recursos Humanos', 'Reclutador', 'Generalista de Recursos Humanos',
    'Especialista en Adquisición de Talento', 'Especialista en Relaciones Laborales',
    'Contador', 'Analista Financiero', 'Controlador', 'Gerente Financiero', 'Auditor',
    'CEO', 'Fundador', 'Co-Fundador', 'Director de Operaciones', 'Director de Tecnología',
    'Director de Marketing'
  ],
  fr: [
    'Ingénieur logiciel', 'Développeur Front-End', 'Développeur Back-End', 'Développeur Full-Stack',
    'Développeur d\'applications mobiles', 'Ingénieur DevOps', 'Data Scientist', 'Analyste de données',
    'Analyste en intelligence d\'affaires', 'Ingénieur de données', 'Ingénieur en apprentissage automatique',
    'Chef de projet', 'Chef de produit', 'Scrum Master', 'Responsable de programme', 'Analyste d\'affaires',
    'Designer UX/UI', 'Graphiste', 'Web Designer', 'Designer produit', 'Designer d\'interaction',
    'Spécialiste en marketing numérique', 'Responsable des réseaux sociaux', 'Spécialiste marketing de contenu',
    'Spécialiste SEO', 'Analyste marketing', 'Représentant commercial', 'Responsable de compte',
    'Directeur des ventes', 'Responsable du développement commercial', 'Responsable de la réussite client',
    'Responsable RH', 'Recruteur', 'Généraliste RH', 'Spécialiste en acquisition de talents',
    'Spécialiste en relations employés', 'Comptable', 'Analyste financier', 'Contrôleur',
    'Directeur financier', 'Auditeur', 'PDG', 'Fondateur', 'Cofondateur',
    'Directeur des opérations', 'Directeur technique', 'Directeur marketing'
  ]
} as const

export type LocaleType = keyof typeof jobPositions
