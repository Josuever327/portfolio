// ============================================================================
//  DATOS DEL PORTFOLIO — Josué Vera
//  Editá SOLO este archivo para cambiar el contenido.
// ============================================================================

export const perfil = {
  nombre: 'Josué Vera',
  rol: 'Analista de Sistemas · Desarrollador de Software .NET & Web',
  // Texto corto del inicio (distinto al de "Sobre mí").
  resumen:
    'Desarrollador de software con más de 3 años de experiencia construyendo ' +
    'APIs y sistemas de punta a punta. Sólido en backend con .NET y con ' +
    'experiencia en frontend, hoy creciendo como desarrollador semi-senior y ' +
    'orientándome al liderazgo técnico.',
  ubicacion: 'Asunción, Paraguay',
  disponibilidad: 'Funcionario privado · Abierto a freelance',
  iniciales: 'JV',
  fotoUrl: '',
  cvUrl: '',
}

export const contacto = {
  email: 'josuvargas327@gmail.com',
  linkedin: 'https://www.linkedin.com/in/josué-vera',
  github: 'https://github.com/Josuever327',
  whatsapp: '595986284783', // Paraguay +595, sin el 0 inicial
}

// Enlace a la carpeta con todos los certificados.
export const certificadosUrl =
  'https://drive.google.com/drive/folders/1n6s9g9PtOSC5UbLGgaTi7psKxKTmkd-K?usp=sharing'

// Párrafos de la sección "Sobre mí" (distintos del resumen del inicio).
export const sobreMi: string[] = [
  'Soy Analista de Sistemas y desarrollador de software con más de 3 años de ' +
    'experiencia profesional. Actualmente me desempeño como Sublíder de Proyecto en ' +
    'el sector bancario, donde además de desarrollar coordino tareas técnicas, realizo ' +
    'code reviews y participo en decisiones de arquitectura orientadas a escalabilidad ' +
    'y calidad.',
  'Mi base es el backend con .NET, pero no me encierro en un solo lado: también ' +
    'trabajo con frontend (React, Vue), llevo adelante proyectos personales para seguir ' +
    'aprendiendo y complementé mi formación con cursos de frontend, arquitectura y ' +
    'buenas prácticas. Me estoy consolidando como desarrollador semi-senior mientras ' +
    'avanzo hacia un rol de Tech Lead.',
  'Trabajo de forma estable en el ámbito privado, pero también estoy abierto a ' +
    'proyectos freelance donde pueda aportar soluciones sólidas y bien construidas de ' +
    'principio a fin.',
]

export const skills: { categoria: string; items: string[] }[] = [
  { categoria: 'Backend & APIs', items: ['.NET 8 / 9 / 10', '.NET Framework', 'APIs REST', 'Arquitectura Limpia', 'DDD', 'Migraciones .NET'] },
  { categoria: 'Frontend', items: ['React', 'Vue', 'TypeScript', 'HTML / CSS'] },
  { categoria: 'Cloud & DevOps', items: ['Microsoft Azure', 'Azure DevOps', 'Azure APIM', 'Docker', 'Kubernetes', 'CI/CD'] },
  { categoria: 'Bases de datos', items: ['PostgreSQL', 'MySQL', 'Oracle / PL-SQL'] },
  { categoria: 'Prácticas', items: ['Code Review', 'Clean Code', 'SOLID', 'Liderazgo técnico'] },
  { categoria: 'Herramientas', items: ['Git', 'GitHub', 'GitLab', 'Postman', 'Draw.io'] },
]

export const experiencia: {
  puesto: string
  empresa: string
  periodo: string
  detalles: string[]
}[] = [
  {
    puesto: 'Desarrollador Backend · Sublíder de Proyecto',
    empresa: 'Banco Continental SAECA — Centro Logístico de Tecnología S.A. (CLT)',
    periodo: '03/2025 — Actualidad',
    detalles: [
      'Desarrollo de soluciones backend para el sistema del área de tarjetas del Banco Continental.',
      'Coordinación de tareas técnicas y funcionales; revisión de código y acompañamiento a desarrolladores.',
      'Desarrollo y mantenimiento de APIs REST en .NET y migraciones de servicios a .NET 9 / 10.',
      'Optimización de consultas SQL y validaciones técnicas previas a despliegue.',
      'Análisis de requerimientos y definición de soluciones técnicas orientadas a escalabilidad.',
      'Control de versiones con Azure DevOps (Git, ramas, seguimiento de cambios).',
      'Administración de Azure API Management (APIM): publicación, versionado y ciclo de vida de APIs.',
    ],
  },
  {
    puesto: 'Soporte Técnico y Desarrollador',
    empresa: 'CITech',
    periodo: '06/2022 — 02/2025',
    detalles: [
      'Soporte técnico directo a clientes y resolución de incidencias.',
      'Análisis y levantamiento de requerimientos técnicos y funcionales.',
      'Desarrollo de aplicaciones de escritorio y APIs REST en .NET con Arquitectura Limpia.',
    ],
  },
]

export const proyectos: {
  nombre: string
  descripcion: string
  tecnologias: string[]
  link?: string
  repo?: string
}[] = [
  {
    nombre: 'API Ecommerce / Punto de Venta',
    descripcion:
      'Proyecto personal: sistema de ecommerce y POS adaptable a distintos rubros, con ' +
      'módulos de productos, familias, stock, compras, ventas, caja y facturación. ' +
      'Arquitectura modular por capas y autenticación JWT basada en permisos.',
    tecnologias: ['.NET 10', 'PostgreSQL', 'EF Core', 'React Native', 'JWT'],
    repo: '',
  },
  {
    nombre: 'Backend — Sector bancario (tarjetas)',
    descripcion:
      'APIs REST y servicios para el sistema de tarjetas del Banco Continental, con ' +
      'gestión del ciclo de vida de APIs en Azure APIM, migraciones a .NET 9 / 10 y ' +
      'despliegue mediante Azure DevOps.',
    tecnologias: ['.NET 9 / 10', 'Azure APIM', 'Azure DevOps', 'SQL'],
  },
  {
    nombre: 'Aplicaciones con Arquitectura Limpia',
    descripcion:
      'Aplicaciones de escritorio y APIs REST construidas con .NET aplicando Clean ' +
      'Architecture, principios SOLID y buenas prácticas de código.',
    tecnologias: ['.NET', 'Clean Architecture', 'SOLID'],
  },
]

// Cada certificado puede tener su "link" individual (Drive). Si no tiene,
// el botón "Ver" cae a la carpeta general (certificadosUrl).
export const certificaciones: {
  titulo: string
  emisor: string
  fecha: string
  horas?: string
  link?: string
}[] = [
  { titulo: 'ASP.NET Core y Clean Architecture con DDD (Parte 2)', emisor: '.NET University — Udemy', fecha: 'Ago 2025', horas: '25 h', link: 'https://drive.google.com/file/d/1Xe_C6cklGzssZJfH9waou6UgZf4JP0jI/view' },
  { titulo: 'Master API RESTful con ASP.NET Core Web API (.NET 9)', emisor: 'render2web — Udemy', fecha: 'Oct 2025', horas: '13.5 h', link: 'https://drive.google.com/file/d/1d5e3Np2YbJk4wTwe8xGV6xhtssZx049p/view' },
  { titulo: 'Desarrollo de APIs con .NET, Docker y Kubernetes (Bootcamp)', emisor: 'CLT S.A.', fecha: 'Dic 2025 — Ene 2026', horas: '25 h', link: 'https://drive.google.com/file/d/1bWQEIc-HqpaaJ3hz98XL2pZrtJkAmhDr/view' },
  { titulo: 'Clean Architecture en C# .NET, basado en conceptos', emisor: 'Héctor de León — Udemy', fecha: 'Jul 2025', horas: '10 h', link: 'https://drive.google.com/file/d/1xBm5PjesJIZqxun8tmsesO89sMlRfvEA/view' },
  { titulo: 'Principios SOLID y Clean Code', emisor: 'DevTalles — Udemy', fecha: 'Jul 2025', horas: '6.5 h', link: 'https://drive.google.com/file/d/1NuZA0vwkr_JDrGVkaBZbo7HJHWnNwA8J/view' },
  { titulo: 'Oracle PL/SQL avanzado', emisor: 'Apasoft Training — Udemy', fecha: 'Jul 2025', horas: '10.5 h', link: 'https://drive.google.com/file/d/1Tr1LCnsQmNGoUxCW_EJgpmkw9LDMj6aE/view' },
  { titulo: 'JavaScript Basics for Beginners', emisor: 'Mosh Hamedani — Udemy', fecha: 'Ago 2025', horas: '6.5 h', link: 'https://drive.google.com/file/d/1fuyDecvhmUpNAalPfRtkRmPbZ-Xoonj4/view' },
]

export const educacion: { titulo: string; institucion: string; periodo: string }[] = [
  {
    titulo: 'Análisis de Sistemas Informáticos',
    institucion: 'Universidad Católica Nuestra Señora de la Asunción',
    periodo: 'Tesista · Becado por ITAIPÚ (concurso de conocimientos)',
  },
]

export const habilidadesBlandas: string[] = [
  'Liderazgo técnico y coordinación de tareas',
  'Comunicación efectiva con clientes y equipos',
  'Análisis y toma de decisiones técnicas',
  'Trabajo en equipo interdisciplinario',
  'Organización y gestión del tiempo',
]

export const idiomas: { idioma: string; nivel: string }[] = [
  { idioma: 'Castellano', nivel: 'Nativo' },
  { idioma: 'Guaraní', nivel: 'Avanzado' },
  { idioma: 'Inglés', nivel: 'Intermedio' },
]
