// ============================================================================
//  CONTENIDO DEL PORTFOLIO — Josué Vera  (bilingüe ES / EN)
//  Editá los textos acá. Datos compartidos (foto, contacto) arriba;
//  el contenido traducible va en content.es / content.en.
// ============================================================================

export type Lang = 'es' | 'en'

// ---- Datos compartidos (no dependen del idioma) ----
export const perfil = {
  nombre: 'Josué Vera',
  iniciales: 'JV',
  fotoUrl: 'foto.jpg',          // archivo en public/ (o URL http completa)
  cvUrl: 'CV_Josue_Vera.pdf',   // archivo en public/
}

export const contacto = {
  email: 'josuvargas327@gmail.com',
  linkedin: 'https://www.linkedin.com/in/josué-vera',
  github: 'https://github.com/Josuever327',
  whatsapp: '595986284783',
}

export const certificadosUrl =
  'https://drive.google.com/drive/folders/1n6s9g9PtOSC5UbLGgaTi7psKxKTmkd-K?usp=sharing'

// ---- Estructura del contenido traducible ----
interface Skill { categoria: string; items: string[] }
interface Exp { puesto: string; empresa: string; periodo: string; detalles: string[] }
interface Proj { nombre: string; descripcion: string; tecnologias: string[]; link?: string; repo?: string }
interface Cert { titulo: string; emisor: string; fecha: string; link?: string }
interface Edu { titulo: string; institucion: string; periodo: string }
interface Idioma { idioma: string; nivel: string }
interface UI {
  nav: { about: string; experience: string; projects: string; skills: string; certs: string; contact: string }
  actions: { contact: string; projects: string; downloadCv: string }
  sections: Record<string, { k: string; t: string }>
  labels: {
    verCerts: string; ver: string; code: string; demo: string
    idiomas: string; soft: string; sendEmail: string
    contactText: string; footer: string; refs: string
  }
}

interface Content {
  rol: string
  ubicacion: string
  disponibilidad: string
  resumen: string
  sobreMi: string[]
  skills: Skill[]
  experiencia: Exp[]
  proyectos: Proj[]
  certificaciones: Cert[]
  educacion: Edu[]
  habilidadesBlandas: string[]
  idiomas: Idioma[]
  ui: UI
}

const certLinks = {
  ddd: 'https://drive.google.com/file/d/1Xe_C6cklGzssZJfH9waou6UgZf4JP0jI/view',
  restful: 'https://drive.google.com/file/d/1d5e3Np2YbJk4wTwe8xGV6xhtssZx049p/view',
  bootcamp: 'https://drive.google.com/file/d/1bWQEIc-HqpaaJ3hz98XL2pZrtJkAmhDr/view',
  clean: 'https://drive.google.com/file/d/1xBm5PjesJIZqxun8tmsesO89sMlRfvEA/view',
  solid: 'https://drive.google.com/file/d/1NuZA0vwkr_JDrGVkaBZbo7HJHWnNwA8J/view',
  oracle: 'https://drive.google.com/file/d/1Tr1LCnsQmNGoUxCW_EJgpmkw9LDMj6aE/view',
  js: 'https://drive.google.com/file/d/1fuyDecvhmUpNAalPfRtkRmPbZ-Xoonj4/view',
}

export const content: Record<Lang, Content> = {
  // ======================= ESPAÑOL =======================
  es: {
    rol: 'Analista de Sistemas · Desarrollador de Software .NET & Web',
    ubicacion: 'Asunción, Paraguay',
    disponibilidad: 'Funcionario privado · Abierto a freelance',
    resumen:
      'Desarrollador de software con más de 3 años de experiencia construyendo APIs y ' +
      'sistemas de punta a punta. Sólido en backend con .NET y con experiencia en frontend, ' +
      'hoy creciendo como desarrollador semi-senior y orientándome al liderazgo técnico.',
    sobreMi: [
      'Soy Analista de Sistemas y desarrollador de software con más de 3 años de experiencia ' +
        'profesional. Actualmente me desempeño como Sublíder de Proyecto en el sector bancario, ' +
        'donde además de desarrollar coordino tareas técnicas, realizo code reviews y participo ' +
        'en decisiones de arquitectura orientadas a escalabilidad y calidad.',
      'Mi base es el backend con .NET, pero no me encierro en un solo lado: también trabajo con ' +
        'frontend (React, Vue), llevo adelante proyectos personales para seguir aprendiendo y ' +
        'complementé mi formación con cursos de frontend, arquitectura y buenas prácticas. Me estoy ' +
        'consolidando como desarrollador semi-senior mientras avanzo hacia un rol de Tech Lead.',
      'Trabajo de forma estable en el ámbito privado, pero también estoy abierto a proyectos ' +
        'freelance donde pueda aportar soluciones sólidas y bien construidas de principio a fin.',
    ],
    skills: [
      { categoria: 'Backend & APIs', items: ['.NET 8 / 9 / 10', '.NET Framework', 'APIs REST', 'Arquitectura Limpia', 'DDD', 'Migraciones .NET'] },
      { categoria: 'Frontend', items: ['React', 'Vue', 'TypeScript', 'HTML / CSS'] },
      { categoria: 'Cloud & DevOps', items: ['Microsoft Azure', 'Azure DevOps', 'Azure APIM', 'Docker', 'Kubernetes', 'CI/CD'] },
      { categoria: 'Bases de datos', items: ['PostgreSQL', 'MySQL', 'Oracle / PL-SQL'] },
      { categoria: 'Prácticas', items: ['Code Review', 'Clean Code', 'SOLID', 'Liderazgo técnico'] },
      { categoria: 'Herramientas', items: ['Git', 'GitHub', 'GitLab', 'Postman', 'Draw.io'] },
    ],
    experiencia: [
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
    ],
    proyectos: [
      {
        nombre: 'API Ecommerce / Punto de Venta',
        descripcion:
          'Proyecto personal: sistema de ecommerce y POS adaptable a distintos rubros, con módulos ' +
          'de productos, familias, stock, compras, ventas, caja y facturación. Arquitectura modular ' +
          'por capas y autenticación JWT basada en permisos.',
        tecnologias: ['.NET 10', 'PostgreSQL', 'EF Core', 'React Native', 'JWT'],
      },
      {
        nombre: 'Backend — Sector bancario (tarjetas)',
        descripcion:
          'APIs REST y servicios para el sistema de tarjetas del Banco Continental, con gestión del ' +
          'ciclo de vida de APIs en Azure APIM, migraciones a .NET 9 / 10 y despliegue con Azure DevOps.',
        tecnologias: ['.NET 9 / 10', 'Azure APIM', 'Azure DevOps', 'SQL'],
      },
      {
        nombre: 'Aplicaciones con Arquitectura Limpia',
        descripcion:
          'Aplicaciones de escritorio y APIs REST construidas con .NET aplicando Clean Architecture, ' +
          'principios SOLID y buenas prácticas de código.',
        tecnologias: ['.NET', 'Clean Architecture', 'SOLID'],
      },
    ],
    certificaciones: [
      { titulo: 'ASP.NET Core y Clean Architecture con DDD (Parte 2)', emisor: '.NET University — Udemy', fecha: 'Ago 2025 · 25 h', link: certLinks.ddd },
      { titulo: 'Master API RESTful con ASP.NET Core Web API (.NET 9)', emisor: 'render2web — Udemy', fecha: 'Oct 2025 · 13.5 h', link: certLinks.restful },
      { titulo: 'Desarrollo de APIs con .NET, Docker y Kubernetes (Bootcamp)', emisor: 'CLT S.A.', fecha: 'Dic 2025 — Ene 2026 · 25 h', link: certLinks.bootcamp },
      { titulo: 'Clean Architecture en C# .NET, basado en conceptos', emisor: 'Héctor de León — Udemy', fecha: 'Jul 2025 · 10 h', link: certLinks.clean },
      { titulo: 'Principios SOLID y Clean Code', emisor: 'DevTalles — Udemy', fecha: 'Jul 2025 · 6.5 h', link: certLinks.solid },
      { titulo: 'Oracle PL/SQL avanzado', emisor: 'Apasoft Training — Udemy', fecha: 'Jul 2025 · 10.5 h', link: certLinks.oracle },
      { titulo: 'JavaScript Basics for Beginners', emisor: 'Mosh Hamedani — Udemy', fecha: 'Ago 2025 · 6.5 h', link: certLinks.js },
    ],
    educacion: [
      {
        titulo: 'Análisis de Sistemas Informáticos',
        institucion: 'Universidad Católica Nuestra Señora de la Asunción',
        periodo: 'Tesista · Becado por ITAIPÚ (concurso de conocimientos)',
      },
    ],
    habilidadesBlandas: [
      'Liderazgo técnico y coordinación de tareas',
      'Comunicación efectiva con clientes y equipos',
      'Análisis y toma de decisiones técnicas',
      'Trabajo en equipo interdisciplinario',
      'Organización y gestión del tiempo',
    ],
    idiomas: [
      { idioma: 'Castellano', nivel: 'Nativo' },
      { idioma: 'Guaraní', nivel: 'Avanzado' },
      { idioma: 'Inglés', nivel: 'Intermedio' },
    ],
    ui: {
      nav: { about: 'Perfil', experience: 'Experiencia', projects: 'Proyectos', skills: 'Stack', certs: 'Certificaciones', contact: 'Contacto' },
      actions: { contact: 'Contactar', projects: 'Ver proyectos', downloadCv: 'Descargar CV' },
      sections: {
        about: { k: '01 · Perfil', t: 'Sobre mí' },
        experience: { k: '02 · Trayectoria', t: 'Experiencia' },
        projects: { k: '03 · Selección', t: 'Proyectos' },
        skills: { k: '04 · Herramientas', t: 'Stack técnico' },
        certs: { k: '05 · Formación continua', t: 'Certificaciones' },
        education: { k: '06 · Académico', t: 'Educación' },
        contact: { k: '07 · Contacto', t: 'Trabajemos juntos' },
      },
      labels: {
        verCerts: 'Ver certificados ↗', ver: 'Ver ↗', code: 'Código ↗', demo: 'Demo ↗',
        idiomas: 'Idiomas', soft: 'Habilidades blandas', sendEmail: 'Enviar correo',
        contactText: 'Disponible para colaboraciones y proyectos freelance. Escribime por correo o WhatsApp y te respondo a la brevedad.',
        footer: 'Construido con React + Vite', refs: 'Referencias disponibles a solicitud.',
      },
    },
  },

  // ======================= ENGLISH =======================
  en: {
    rol: 'Systems Analyst · Software Developer .NET & Web',
    ubicacion: 'Asunción, Paraguay',
    disponibilidad: 'Full-time employed · Open to freelance',
    resumen:
      'Software developer with 3+ years of experience building APIs and end-to-end systems. ' +
      'Strong in backend with .NET and experienced in frontend, currently growing as a ' +
      'semi-senior developer and moving toward technical leadership.',
    sobreMi: [
      'I am a Systems Analyst and software developer with over 3 years of professional experience. ' +
        'I currently work as a Project Co-Lead in the banking sector, where — besides developing — I ' +
        'coordinate technical tasks, perform code reviews and take part in architecture decisions ' +
        'focused on scalability and quality.',
      'My core is backend with .NET, but I don’t box myself into a single side: I also work with ' +
        'frontend (React, Vue), build personal projects to keep learning, and complemented my ' +
        'training with courses on frontend, architecture and best practices. I’m consolidating as a ' +
        'semi-senior developer while moving toward a Tech Lead role.',
      'I hold a stable full-time position in the private sector, but I’m also open to freelance ' +
        'projects where I can deliver solid, well-built solutions from end to end.',
    ],
    skills: [
      { categoria: 'Backend & APIs', items: ['.NET 8 / 9 / 10', '.NET Framework', 'REST APIs', 'Clean Architecture', 'DDD', '.NET Migrations'] },
      { categoria: 'Frontend', items: ['React', 'Vue', 'TypeScript', 'HTML / CSS'] },
      { categoria: 'Cloud & DevOps', items: ['Microsoft Azure', 'Azure DevOps', 'Azure APIM', 'Docker', 'Kubernetes', 'CI/CD'] },
      { categoria: 'Databases', items: ['PostgreSQL', 'MySQL', 'Oracle / PL-SQL'] },
      { categoria: 'Practices', items: ['Code Review', 'Clean Code', 'SOLID', 'Technical Leadership'] },
      { categoria: 'Tools', items: ['Git', 'GitHub', 'GitLab', 'Postman', 'Draw.io'] },
    ],
    experiencia: [
      {
        puesto: 'Backend Developer · Project Co-Lead',
        empresa: 'Banco Continental SAECA — Centro Logístico de Tecnología S.A. (CLT)',
        periodo: 'Mar 2025 — Present',
        detalles: [
          'Development of backend solutions for the cards area system of Banco Continental.',
          'Coordination of technical and functional tasks; code reviews and developer mentoring.',
          'Development and maintenance of REST APIs in .NET and service migrations to .NET 9 / 10.',
          'Optimization of SQL queries and technical validations prior to deployment.',
          'Requirements analysis and definition of technical solutions focused on scalability.',
          'Version control with Azure DevOps (Git, branching, change tracking).',
          'Management of Azure API Management (APIM): publishing, versioning and API lifecycle.',
        ],
      },
      {
        puesto: 'Technical Support & Developer',
        empresa: 'CITech',
        periodo: 'Jun 2022 — Feb 2025',
        detalles: [
          'Direct technical support to clients and incident resolution.',
          'Analysis and gathering of technical and functional requirements.',
          'Development of desktop applications and REST APIs in .NET with Clean Architecture.',
        ],
      },
    ],
    proyectos: [
      {
        nombre: 'Ecommerce / Point of Sale API',
        descripcion:
          'Personal project: an ecommerce and POS system adaptable to different businesses, with ' +
          'modules for products, categories, stock, purchases, sales, cash register and invoicing. ' +
          'Layered modular architecture and permission-based JWT authentication.',
        tecnologias: ['.NET 10', 'PostgreSQL', 'EF Core', 'React Native', 'JWT'],
      },
      {
        nombre: 'Backend — Banking sector (cards)',
        descripcion:
          'REST APIs and services for the cards system of Banco Continental, with API lifecycle ' +
          'management in Azure APIM, migrations to .NET 9 / 10 and deployment through Azure DevOps.',
        tecnologias: ['.NET 9 / 10', 'Azure APIM', 'Azure DevOps', 'SQL'],
      },
      {
        nombre: 'Applications with Clean Architecture',
        descripcion:
          'Desktop applications and REST APIs built with .NET applying Clean Architecture, SOLID ' +
          'principles and coding best practices.',
        tecnologias: ['.NET', 'Clean Architecture', 'SOLID'],
      },
    ],
    certificaciones: [
      { titulo: 'ASP.NET Core & Clean Architecture with DDD (Part 2)', emisor: '.NET University — Udemy', fecha: 'Aug 2025 · 25 h', link: certLinks.ddd },
      { titulo: 'Master RESTful API with ASP.NET Core Web API (.NET 9)', emisor: 'render2web — Udemy', fecha: 'Oct 2025 · 13.5 h', link: certLinks.restful },
      { titulo: 'Building APIs with .NET, Docker and Kubernetes (Bootcamp)', emisor: 'CLT S.A.', fecha: 'Dec 2025 — Jan 2026 · 25 h', link: certLinks.bootcamp },
      { titulo: 'Clean Architecture in C# .NET, concept-based', emisor: 'Héctor de León — Udemy', fecha: 'Jul 2025 · 10 h', link: certLinks.clean },
      { titulo: 'SOLID Principles and Clean Code', emisor: 'DevTalles — Udemy', fecha: 'Jul 2025 · 6.5 h', link: certLinks.solid },
      { titulo: 'Advanced Oracle PL/SQL', emisor: 'Apasoft Training — Udemy', fecha: 'Jul 2025 · 10.5 h', link: certLinks.oracle },
      { titulo: 'JavaScript Basics for Beginners', emisor: 'Mosh Hamedani — Udemy', fecha: 'Aug 2025 · 6.5 h', link: certLinks.js },
    ],
    educacion: [
      {
        titulo: 'Information Systems Analysis',
        institucion: 'Universidad Católica Nuestra Señora de la Asunción',
        periodo: 'Thesis candidate · Scholarship from ITAIPÚ (knowledge competition)',
      },
    ],
    habilidadesBlandas: [
      'Technical leadership and task coordination',
      'Effective communication with clients and teams',
      'Analysis and technical decision-making',
      'Interdisciplinary teamwork',
      'Organization and time management',
    ],
    idiomas: [
      { idioma: 'Spanish', nivel: 'Native' },
      { idioma: 'Guaraní', nivel: 'Advanced' },
      { idioma: 'English', nivel: 'Intermediate' },
    ],
    ui: {
      nav: { about: 'Profile', experience: 'Experience', projects: 'Projects', skills: 'Stack', certs: 'Certifications', contact: 'Contact' },
      actions: { contact: 'Contact', projects: 'View projects', downloadCv: 'Download CV' },
      sections: {
        about: { k: '01 · Profile', t: 'About me' },
        experience: { k: '02 · Career', t: 'Experience' },
        projects: { k: '03 · Selection', t: 'Projects' },
        skills: { k: '04 · Tools', t: 'Tech stack' },
        certs: { k: '05 · Continuous learning', t: 'Certifications' },
        education: { k: '06 · Academic', t: 'Education' },
        contact: { k: '07 · Contact', t: 'Let’s work together' },
      },
      labels: {
        verCerts: 'View all ↗', ver: 'View ↗', code: 'Code ↗', demo: 'Demo ↗',
        idiomas: 'Languages', soft: 'Soft skills', sendEmail: 'Send email',
        contactText: 'Available for collaborations and freelance projects. Reach out by email or WhatsApp and I’ll get back to you shortly.',
        footer: 'Built with React + Vite', refs: 'References available upon request.',
      },
    },
  },
}
