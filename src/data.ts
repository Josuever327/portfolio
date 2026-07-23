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
  // El CV depende del idioma -> ver content.es.cvUrl / content.en.cvUrl
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
  cvUrl: string
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
    rol: 'Desarrollador Backend .NET | Analista de Sistemas',
    ubicacion: 'Asunción, Paraguay',
    disponibilidad: 'Funcionario privado · Abierto a freelance',
    cvUrl: 'CV_Josue_Vera.pdf',
    resumen:
      'Desarrollador Backend especializado en .NET, con más de 3 años construyendo APIs y ' +
      'sistemas escalables de punta a punta. Hoy coordino tareas técnicas y crezco hacia un rol ' +
      'de mayor liderazgo técnico, sin dejar de programar todos los días.',
    sobreMi: [
      'Soy Analista de Sistemas y desarrollador especializado en .NET, con más de 3 años de ' +
        'experiencia profesional en el diseño, implementación y evolución de APIs REST. ' +
        'Actualmente me desempeño como Sublíder de Proyecto en el sector bancario, donde además ' +
        'de desarrollar coordino tareas técnicas, lidero revisiones de código, participo en ' +
        'decisiones de arquitectura y acompaño a otros desarrolladores del equipo.',
      'Mi especialidad es el desarrollo de sistemas escalables y soluciones distribuidas sobre ' +
        '.NET, pero también trabajo con frontend y mobile (React, React Native, Vue). Llevo ' +
        'adelante proyectos personales de punta a punta para seguir aprendiendo, complementé mi ' +
        'formación con cursos de arquitectura y buenas prácticas, y me estoy consolidando como ' +
        'desarrollador semi-senior con la mira puesta en crecer hacia mayor liderazgo técnico.',
      'Trabajo de forma estable en el ámbito privado, pero también estoy abierto a proyectos ' +
        'freelance donde pueda aportar soluciones robustas, escalables y mantenibles de principio ' +
        'a fin.',
    ],
    skills: [
      { categoria: 'Backend & APIs', items: ['.NET 8 / 9 / 10', '.NET Framework', 'APIs REST', 'Minimal APIs', 'Arquitectura Limpia', 'DDD', 'EF Core', 'FluentValidation', 'Serilog', 'Migraciones .NET'] },
      { categoria: 'Frontend & Mobile', items: ['React', 'Vue', 'React Native', 'Expo', 'TypeScript', 'HTML / CSS'] },
      { categoria: 'Cloud & DevOps', items: ['Microsoft Azure', 'Azure DevOps', 'Azure APIM', 'Docker', 'Kubernetes', 'CI/CD'] },
      { categoria: 'Bases de datos', items: ['PostgreSQL', 'MySQL', 'Oracle / PL-SQL', 'SQLite'] },
      { categoria: 'Prácticas', items: ['Code Review', 'Clean Code', 'SOLID', 'Liderazgo técnico'] },
      { categoria: 'Herramientas', items: ['Git', 'GitHub', 'GitLab', 'Postman', 'Draw.io'] },
    ],
    experiencia: [
      {
        puesto: 'Desarrollador Backend · Sublíder de Proyecto',
        empresa: 'Banco Continental SAECA — Centro Logístico de Tecnología S.A. (CLT)',
        periodo: '03/2025 — Actualidad',
        detalles: [
          'Diseñé e implementé APIs REST en .NET para el sistema de tarjetas del Banco Continental, una plataforma crítica del negocio bancario.',
          'Coordino tareas técnicas y funcionales, lidero revisiones de código y acompaño a otros desarrolladores del equipo.',
          'Participo en decisiones de arquitectura orientadas a escalabilidad, mantenibilidad y calidad del sistema.',
          'Migré servicios a .NET 9 y .NET 10, mejorando rendimiento y mantenibilidad.',
          'Mantengo el ciclo de vida de APIs en Azure API Management: publicación, versionado y gobierno.',
          'Optimicé consultas SQL y definí validaciones técnicas previas a cada despliegue.',
          'Colaboro en la planificación técnica y el análisis de requerimientos, gestionando repositorios, ramas y el ciclo de integración en Azure DevOps.',
        ],
      },
      {
        puesto: 'Soporte Técnico y Desarrollador',
        empresa: 'CITech',
        periodo: '06/2022 — 02/2025',
        detalles: [
          'Brindé soporte técnico directo a clientes y resolví incidencias de producción.',
          'Relevé y analicé requerimientos técnicos y funcionales junto a clientes.',
          'Desarrollé aplicaciones de escritorio y APIs REST en .NET aplicando Clean Architecture.',
        ],
      },
    ],
    proyectos: [
      {
        nombre: 'Ecommerce / Punto de Venta (API + App)',
        descripcion:
          'Proyecto personal full-stack: sistema de ecommerce y POS adaptable a distintos rubros y ' +
          'multi-sucursal, diseñado con una arquitectura modular y orientada al dominio, pensada ' +
          'para la escalabilidad y la mantenibilidad: Clean Architecture en capas (Api, ' +
          'Application, Domain, Infrastructure) con organización por dominio (productos, ' +
          'familias/atributos, stock, compras, ventas, caja, facturación). Backend en .NET 10 con ' +
          'Minimal APIs, EF Core + PostgreSQL, autenticación JWT con refresh tokens y autorización ' +
          'por permisos, containerizado con Docker. App móvil en React Native (Expo) con paneles ' +
          'diferenciados para cliente y administración, consumiendo la API en vivo.',
        tecnologias: ['.NET 10', 'Clean Architecture', 'PostgreSQL', 'EF Core', 'React Native', 'Expo', 'JWT', 'Docker'],
      },
      {
        nombre: 'AlarmasPro — investigación de alarmas nativas',
        descripcion:
          'Proyecto de prueba y aprendizaje: diseñé e implementé un motor de alarmas nativo con ' +
          'Notifee (canal de alarma, full-screen intent, exact alarms) para una app Android/iOS que ' +
          'suena de verdad, ignorando el modo silencio, con pantalla completa sobre el bloqueo, ' +
          'corriendo sobre development build sin depender de Expo Go. Publicado en GitHub.',
        tecnologias: ['React Native', 'Expo', 'Notifee', 'EAS Build', 'SQLite'],
        repo: 'https://github.com/Josuever327/AlarmasPro',
      },
      {
        nombre: 'MotorCheck',
        descripcion:
          'Proyecto de aficionado, con intención de aportar a la comunidad: implementé una app ' +
          'para llevar el mantenimiento de vehículos (motos, autos, camionetas) con reglas de service ' +
          'configurables por kilometraje y tiempo, historial de mantenimientos y alertas de próximos ' +
          'vencimientos, con almacenamiento local en SQLite.',
        tecnologias: ['React Native', 'Expo', 'SQLite', 'TypeScript'],
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
    rol: 'Backend .NET Developer | Systems Analyst',
    ubicacion: 'Asunción, Paraguay',
    disponibilidad: 'Full-time employed · Open to freelance',
    cvUrl: 'CV_Josue_Vera_EN.pdf',
    resumen:
      'Backend Developer specialized in .NET, with 3+ years building APIs and scalable end-to-end ' +
      'systems. Today I coordinate technical tasks and I’m growing toward greater technical ' +
      'leadership — without stepping away from hands-on development.',
    sobreMi: [
      'I’m a Systems Analyst and .NET developer with over 3 years of professional experience in ' +
        'the design, implementation, and evolution of REST APIs. I currently work as a Project ' +
        'Co-Lead in the banking sector, where — besides developing — I coordinate technical tasks, ' +
        'lead code reviews, participate in architecture decisions, and mentor developers on the team.',
      'My specialty is the development of scalable systems and distributed solutions on .NET, ' +
        'but I also work with frontend and mobile (React, React Native, Vue). I build personal ' +
        'projects end-to-end to keep learning, complemented my training with courses on ' +
        'architecture and best practices, and I’m consolidating as a semi-senior developer with ' +
        'an eye toward growing into greater technical leadership.',
      'I hold a stable full-time position in the private sector, but I’m also open to freelance ' +
        'projects where I can deliver robust, scalable, and maintainable solutions from end to end.',
    ],
    skills: [
      { categoria: 'Backend & APIs', items: ['.NET 8 / 9 / 10', '.NET Framework', 'REST APIs', 'Minimal APIs', 'Clean Architecture', 'DDD', 'EF Core', 'FluentValidation', 'Serilog', '.NET Migrations'] },
      { categoria: 'Frontend & Mobile', items: ['React', 'Vue', 'React Native', 'Expo', 'TypeScript', 'HTML / CSS'] },
      { categoria: 'Cloud & DevOps', items: ['Microsoft Azure', 'Azure DevOps', 'Azure APIM', 'Docker', 'Kubernetes', 'CI/CD'] },
      { categoria: 'Databases', items: ['PostgreSQL', 'MySQL', 'Oracle / PL-SQL', 'SQLite'] },
      { categoria: 'Practices', items: ['Code Review', 'Clean Code', 'SOLID', 'Technical Leadership'] },
      { categoria: 'Tools', items: ['Git', 'GitHub', 'GitLab', 'Postman', 'Draw.io'] },
    ],
    experiencia: [
      {
        puesto: 'Backend Developer · Project Co-Lead',
        empresa: 'Banco Continental SAECA — Centro Logístico de Tecnología S.A. (CLT)',
        periodo: 'Mar 2025 — Present',
        detalles: [
          'Designed and implemented REST APIs in .NET for Banco Continental’s cards system, a critical platform for the bank’s core business.',
          'Coordinate technical and functional tasks, lead code reviews, and mentor developers on the team.',
          'Participate in architecture decisions focused on scalability, maintainability, and system quality.',
          'Migrated services to .NET 9 and .NET 10, improving performance and maintainability.',
          'Maintain the API lifecycle in Azure API Management: publishing, versioning, and governance.',
          'Optimized SQL queries and defined technical validations prior to each deployment.',
          'Collaborate on technical planning and requirements analysis, managing repositories, branching, and the integration workflow in Azure DevOps.',
        ],
      },
      {
        puesto: 'Technical Support & Developer',
        empresa: 'CITech',
        periodo: 'Jun 2022 — Feb 2025',
        detalles: [
          'Provided direct technical support to clients and resolved production incidents.',
          'Gathered and analyzed technical and functional requirements with clients.',
          'Developed desktop applications and REST APIs in .NET applying Clean Architecture.',
        ],
      },
    ],
    proyectos: [
      {
        nombre: 'Ecommerce / Point of Sale (API + App)',
        descripcion:
          'Personal full-stack project: an ecommerce and POS system adaptable to different businesses ' +
          'and multiple branches, designed with a modular, domain-oriented architecture built for ' +
          'scalability and maintainability: layered Clean Architecture (Api, Application, Domain, ' +
          'Infrastructure) organized by domain (products, categories/attributes, stock, purchases, ' +
          'sales, cash register, invoicing). Backend in .NET 10 with Minimal APIs, EF Core + ' +
          'PostgreSQL, JWT authentication with refresh tokens and permission-based authorization, ' +
          'containerized with Docker. Mobile app in React Native (Expo) with separate client and ' +
          'admin panels, consuming the API live.',
        tecnologias: ['.NET 10', 'Clean Architecture', 'PostgreSQL', 'EF Core', 'React Native', 'Expo', 'JWT', 'Docker'],
      },
      {
        nombre: 'AlarmasPro — native alarms research',
        descripcion:
          'Test and learning project: designed and implemented a native alarm engine with Notifee ' +
          '(alarm channel, full-screen intent, exact alarms) for an Android/iOS app that truly rings ' +
          '— ignoring silent mode, with a full-screen wake-up over the lock screen — running on a ' +
          'development build without relying on Expo Go. Published on GitHub.',
        tecnologias: ['React Native', 'Expo', 'Notifee', 'EAS Build', 'SQLite'],
        repo: 'https://github.com/Josuever327/AlarmasPro',
      },
      {
        nombre: 'MotorCheck',
        descripcion:
          'Hobby project, built with the intention of giving back to the community: a vehicle ' +
          'maintenance tracker (motorcycles, cars, trucks) with configurable service rules by ' +
          'mileage and time, maintenance history, and upcoming due-date alerts, backed by local ' +
          'SQLite storage.',
        tecnologias: ['React Native', 'Expo', 'SQLite', 'TypeScript'],
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
