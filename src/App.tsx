import { useEffect, useState } from 'react'
import './App.css'
import {
  perfil, contacto, certificadosUrl, sobreMi, skills, experiencia, proyectos,
  certificaciones, educacion, habilidadesBlandas, idiomas,
} from './data'

// Enlaces que funcionan sin cliente de correo instalado:
const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${contacto.email}` +
  `&su=${encodeURIComponent('Contacto desde tu portfolio')}`
const waUrl = `https://wa.me/${contacto.whatsapp}` +
  `?text=${encodeURIComponent('Hola Josué, vi tu portfolio y me gustaría contactarte.')}`

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('light')

  useEffect(() => {
    const saved = (localStorage.getItem('theme') as 'dark' | 'light') || 'light'
    setTheme(saved)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <>
      <Nav theme={theme} onToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

function SectionHead({ n, kicker, title, action }: { n: string; kicker: string; title: string; action?: React.ReactNode }) {
  return (
    <div className="section-head">
      <div className="section-kicker">{n} · {kicker}</div>
      <div className="section-title-row">
        <h2 className="section-title">{title}</h2>
        {action}
      </div>
    </div>
  )
}

function Nav({ theme, onToggle }: { theme: string; onToggle: () => void }) {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  const links = [
    ['#about', 'Perfil'],
    ['#experience', 'Experiencia'],
    ['#projects', 'Proyectos'],
    ['#skills', 'Stack'],
    ['#certifications', 'Certificaciones'],
    ['#contact', 'Contacto'],
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
          <button className="theme-toggle" onClick={onToggle} aria-label="Cambiar tema">
            {theme === 'dark' ? '○' : '●'}
          </button>
          <button
            className="nav-burger"
            onClick={() => setOpen((o) => !o)}
            aria-label="Abrir menú"
            aria-expanded={open}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  const { linkedin, github } = contacto
  return (
    <header id="top" className="hero">
      <div className="container">
        <div className="hero-monogram">{perfil.iniciales}</div>
        <div className="hero-badge"><span className="dot" />{perfil.disponibilidad}</div>
        <h1 className="hero-name">{perfil.nombre}</h1>
        <p className="hero-role">{perfil.rol}</p>
        <p className="hero-summary">{perfil.resumen}</p>
        <div className="hero-meta">
          <span>{perfil.ubicacion}</span>
          <a href={gmailUrl} target="_blank" rel="noreferrer">{contacto.email}</a>
          {linkedin && <a href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
          <a href={waUrl} target="_blank" rel="noreferrer">WhatsApp</a>
          {github && <a href={github} target="_blank" rel="noreferrer">GitHub</a>}
        </div>
        <div className="hero-actions">
          <a className="btn btn-primary" href={gmailUrl} target="_blank" rel="noreferrer">Contactar</a>
          <a className="btn" href="#projects">Ver proyectos</a>
          {perfil.cvUrl && <a className="btn" href={perfil.cvUrl} target="_blank" rel="noreferrer">Descargar CV</a>}
        </div>
      </div>
    </header>
  )
}

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHead n="01" kicker="Perfil" title="Sobre mí" />
        <div className="about-text">
          {sobreMi.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <div className="two-col" style={{ marginTop: 36 }}>
          <div>
            <div className="mini-title">Idiomas</div>
            {idiomas.map((i) => (
              <div className="list-row" key={i.idioma}>
                <span className="list-main">{i.idioma}</span>
                <span className="list-meta">{i.nivel}</span>
              </div>
            ))}
          </div>
          <div>
            <div className="mini-title">Habilidades blandas</div>
            <ul className="soft-list">
              {habilidadesBlandas.map((h) => <li key={h}>{h}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHead n="02" kicker="Trayectoria" title="Experiencia" />
        {experiencia.map((e, i) => (
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

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHead n="03" kicker="Selección" title="Proyectos" />
        <div className="grid grid-2">
          {proyectos.map((p, i) => (
            <div className="card" key={i}>
              <div className="proj-title">
                {p.nombre}
                <span className="proj-links">
                  {p.repo && <a href={p.repo} target="_blank" rel="noreferrer">Código ↗</a>}
                  {p.link && <a href={p.link} target="_blank" rel="noreferrer">Demo ↗</a>}
                </span>
              </div>
              <p className="proj-desc">{p.descripcion}</p>
              <div className="proj-tags">
                {p.tecnologias.map((t) => <span className="chip" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHead n="04" kicker="Herramientas" title="Stack técnico" />
        <div className="grid grid-2">
          {skills.map((g) => (
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

function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <SectionHead
          n="05" kicker="Formación continua" title="Certificaciones"
          action={<a className="head-link" href={certificadosUrl} target="_blank" rel="noreferrer">Ver certificados ↗</a>}
        />
        {certificaciones.map((c, i) => (
          <div className="list-row" key={i}>
            <div>
              <div className="list-main">{c.titulo}</div>
              <div className="list-sub">{c.emisor}</div>
            </div>
            <div className="list-right">
              <div className="list-meta">{c.fecha}{c.horas ? ` · ${c.horas}` : ''}</div>
              <a className="list-link" href={c.link || certificadosUrl} target="_blank" rel="noreferrer">Ver ↗</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHead n="06" kicker="Académico" title="Educación" />
        {educacion.map((ed, i) => (
          <div className="list-row" key={i}>
            <div>
              <div className="list-main">{ed.titulo}</div>
              <div className="list-sub">{ed.institucion}</div>
            </div>
            <div className="list-meta">{ed.periodo}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  const { linkedin, github } = contacto
  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHead n="07" kicker="Contacto" title="Trabajemos juntos" />
        <p style={{ color: 'var(--text-soft)', maxWidth: 560, marginBottom: 24 }}>
          Disponible para colaboraciones y proyectos freelance. Escribime por correo o
          WhatsApp y te respondo a la brevedad.
        </p>
        <div className="contact-links">
          <a className="btn btn-primary" href={gmailUrl} target="_blank" rel="noreferrer">Enviar correo</a>
          <a className="btn" href={waUrl} target="_blank" rel="noreferrer">WhatsApp</a>
          {linkedin && <a className="btn" href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
          {github && <a className="btn" href={github} target="_blank" rel="noreferrer">GitHub</a>}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} {perfil.nombre}</span>
        <span>Construido con React + Vite</span>
      </div>
    </footer>
  )
}
