import { useEffect, useState } from 'react'
import './App.css'
import { perfil, contacto, certificadosUrl, content, type Lang } from './data'

// Enlaces que funcionan sin cliente de correo instalado:
const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${contacto.email}` +
  `&su=${encodeURIComponent('Contacto desde tu portfolio')}`
const waUrl = `https://wa.me/${contacto.whatsapp}` +
  `?text=${encodeURIComponent('Hola Josué, vi tu portfolio y me gustaría contactarte.')}`

const withBase = (file: string) =>
  file.startsWith('http') ? file : import.meta.env.BASE_URL + file
const fotoSrc = perfil.fotoUrl ? withBase(perfil.fotoUrl) : ''

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('light')
  const [lang, setLang] = useState<Lang>('es')

  useEffect(() => {
    setTheme((localStorage.getItem('theme') as 'dark' | 'light') || 'light')
    setLang((localStorage.getItem('lang') as Lang) || 'es')
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang)
    localStorage.setItem('lang', lang)
  }, [lang])

  const t = content[lang]

  return (
    <>
      <Nav
        t={t} theme={theme} lang={lang}
        onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        onToggleLang={() => setLang(lang === 'es' ? 'en' : 'es')}
      />
      <main>
        <Hero t={t} />
        <About t={t} />
        <Experience t={t} />
        <Projects t={t} />
        <Skills t={t} />
        <Certifications t={t} />
        <Education t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </>
  )
}

type T = (typeof content)['es']

function SectionHead({ k, title, action }: { k: string; title: string; action?: React.ReactNode }) {
  return (
    <div className="section-head">
      <div className="section-kicker">{k}</div>
      <div className="section-title-row">
        <h2 className="section-title">{title}</h2>
        {action}
      </div>
    </div>
  )
}

function Nav({ t, theme, lang, onToggleTheme, onToggleLang }: {
  t: T; theme: string; lang: Lang; onToggleTheme: () => void; onToggleLang: () => void
}) {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  const links = [
    ['#about', t.ui.nav.about],
    ['#experience', t.ui.nav.experience],
    ['#projects', t.ui.nav.projects],
    ['#skills', t.ui.nav.skills],
    ['#certifications', t.ui.nav.certs],
    ['#contact', t.ui.nav.contact],
  ]
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="#top" className="nav-brand" onClick={close}>{perfil.nombre}</a>
        <div className="nav-right">
          <div className={`nav-links ${open ? 'open' : ''}`}>
            {links.map(([href, label]) => (
              <a key={href} href={href} onClick={close}>{label}</a>
            ))}
          </div>
          <button className="lang-toggle" onClick={onToggleLang} aria-label="Change language">
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
          <button className="theme-toggle" onClick={onToggleTheme} aria-label="Cambiar tema">
            {theme === 'dark' ? '○' : '●'}
          </button>
          <button className="nav-burger" onClick={() => setOpen((o) => !o)} aria-label="Menu" aria-expanded={open}>
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </nav>
  )
}

function Hero({ t }: { t: T }) {
  const { linkedin, github } = contacto
  const cvSrc = t.cvUrl ? withBase(t.cvUrl) : ''
  return (
    <header id="top" className="hero">
      <div className="container">
        <div className={`hero-monogram ${fotoSrc ? 'has-photo' : ''}`}>
          {fotoSrc ? <img src={fotoSrc} alt={perfil.nombre} /> : perfil.iniciales}
        </div>
        <div className="hero-badge"><span className="dot" />{t.disponibilidad}</div>
        <h1 className="hero-name">{perfil.nombre}</h1>
        <p className="hero-role">{t.rol}</p>
        <p className="hero-summary">{t.resumen}</p>
        <div className="hero-meta">
          <span>{t.ubicacion}</span>
          <a href={gmailUrl} target="_blank" rel="noreferrer">{contacto.email}</a>
          {linkedin && <a href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
          <a href={waUrl} target="_blank" rel="noreferrer">WhatsApp</a>
          {github && <a href={github} target="_blank" rel="noreferrer">GitHub</a>}
        </div>
        <div className="hero-actions">
          <a className="btn btn-primary" href={gmailUrl} target="_blank" rel="noreferrer">{t.ui.actions.contact}</a>
          <a className="btn" href="#projects">{t.ui.actions.projects}</a>
          {cvSrc && <a className="btn" href={cvSrc} target="_blank" rel="noreferrer" download>{t.ui.actions.downloadCv}</a>}
        </div>
      </div>
    </header>
  )
}

function About({ t }: { t: T }) {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHead k={t.ui.sections.about.k} title={t.ui.sections.about.t} />
        <div className="about-text">
          {t.sobreMi.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <div className="two-col" style={{ marginTop: 36 }}>
          <div>
            <div className="mini-title">{t.ui.labels.idiomas}</div>
            {t.idiomas.map((i) => (
              <div className="list-row" key={i.idioma}>
                <span className="list-main">{i.idioma}</span>
                <span className="list-meta">{i.nivel}</span>
              </div>
            ))}
          </div>
          <div>
            <div className="mini-title">{t.ui.labels.soft}</div>
            <ul className="soft-list">
              {t.habilidadesBlandas.map((h) => <li key={h}>{h}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function Experience({ t }: { t: T }) {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHead k={t.ui.sections.experience.k} title={t.ui.sections.experience.t} />
        {t.experiencia.map((e, i) => (
          <div className="exp-item" key={i}>
            <div className="exp-periodo">{e.periodo}</div>
            <div>
              <div className="exp-puesto">{e.puesto}</div>
              <div className="exp-empresa">{e.empresa}</div>
              <ul className="exp-detalles">
                {e.detalles.map((d, j) => <li key={j}>{d}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Projects({ t }: { t: T }) {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHead k={t.ui.sections.projects.k} title={t.ui.sections.projects.t} />
        <div className="grid grid-2">
          {t.proyectos.map((p, i) => (
            <div className="card" key={i}>
              <div className="proj-title">
                {p.nombre}
                <span className="proj-links">
                  {p.repo && <a href={p.repo} target="_blank" rel="noreferrer">{t.ui.labels.code}</a>}
                  {p.link && <a href={p.link} target="_blank" rel="noreferrer">{t.ui.labels.demo}</a>}
                </span>
              </div>
              <p className="proj-desc">{p.descripcion}</p>
              <div className="proj-tags">
                {p.tecnologias.map((tec) => <span className="chip" key={tec}>{tec}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Skills({ t }: { t: T }) {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHead k={t.ui.sections.skills.k} title={t.ui.sections.skills.t} />
        <div className="grid grid-2">
          {t.skills.map((g) => (
            <div className="card" key={g.categoria}>
              <div className="skill-cat">{g.categoria}</div>
              <div className="skill-list">
                {g.items.map((s) => <span className="chip" key={s}>{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Certifications({ t }: { t: T }) {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <SectionHead
          k={t.ui.sections.certs.k} title={t.ui.sections.certs.t}
          action={<a className="head-link" href={certificadosUrl} target="_blank" rel="noreferrer">{t.ui.labels.verCerts}</a>}
        />
        {t.certificaciones.map((c, i) => (
          <div className="list-row" key={i}>
            <div>
              <div className="list-main">{c.titulo}</div>
              <div className="list-sub">{c.emisor}</div>
            </div>
            <div className="list-right">
              <div className="list-meta">{c.fecha}</div>
              <a className="list-link" href={c.link || certificadosUrl} target="_blank" rel="noreferrer">{t.ui.labels.ver}</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Education({ t }: { t: T }) {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHead k={t.ui.sections.education.k} title={t.ui.sections.education.t} />
        {t.educacion.map((ed, i) => (
          <div className="list-row" key={i}>
            <div>
              <div className="list-main">{ed.titulo}</div>
              <div className="list-sub">{ed.institucion}</div>
              <div className="list-note">{ed.periodo}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Contact({ t }: { t: T }) {
  const { linkedin, github } = contacto
  const cvSrc = t.cvUrl ? withBase(t.cvUrl) : ''
  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHead k={t.ui.sections.contact.k} title={t.ui.sections.contact.t} />
        <p style={{ color: 'var(--text-soft)', maxWidth: 560, marginBottom: 24 }}>
          {t.ui.labels.contactText}
        </p>
        <div className="contact-links">
          <a className="btn btn-primary" href={gmailUrl} target="_blank" rel="noreferrer">{t.ui.labels.sendEmail}</a>
          <a className="btn" href={waUrl} target="_blank" rel="noreferrer">WhatsApp</a>
          {linkedin && <a className="btn" href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
          {github && <a className="btn" href={github} target="_blank" rel="noreferrer">GitHub</a>}
          {cvSrc && <a className="btn" href={cvSrc} target="_blank" rel="noreferrer" download>{t.ui.actions.downloadCv}</a>}
        </div>
      </div>
    </section>
  )
}

function Footer({ t }: { t: T }) {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} {perfil.nombre}</span>
        <span>{t.ui.labels.footer}</span>
      </div>
    </footer>
  )
}
