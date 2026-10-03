import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Printer, X } from 'lucide-react'
import { useLang } from '../i18n/LangContext'
import { cv } from '../data/cv'
import { isUpwork, links } from '../site'

function H({ children }: { children: string }) {
  return (
    <h3 className="mt-6 mb-2 border-b border-neutral-300 pb-1 text-[11px] font-bold tracking-[0.14em] text-neutral-900 uppercase">
      {children}
    </h3>
  )
}

// A document-style CV built from data, so it is always current and the Upwork
// build shows no contact details.
function CvPage() {
  const contact = isUpwork
    ? [
        { label: cv.location },
        { label: 'github.com/Ahmed-Serag19', href: links.github },
        { label: 'Upwork profile', href: links.upwork },
      ]
    : [
        { label: cv.location },
        { label: links.phone },
        { label: links.email.replace('mailto:', ''), href: links.email },
        { label: 'linkedin.com/in/ahmed-mohamed-amin', href: links.linkedin },
        { label: 'github.com/Ahmed-Serag19', href: links.github },
      ]

  return (
    <article
      id="cv-page"
      dir="ltr"
      lang="en"
      className="mx-auto w-full max-w-[820px] bg-white px-6 py-8 font-sans text-[12.5px] leading-relaxed text-neutral-700 shadow-2xl sm:px-12 sm:py-12"
    >
      <header className="text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight text-neutral-950">{cv.name}</h2>
        <p className="mt-1 text-sm font-medium text-[#d9541f]">{cv.title}</p>
        <p className="mt-2 flex flex-wrap justify-center gap-x-3 gap-y-1 text-[11.5px] text-neutral-600">
          {contact.map((c, i) => (
            <span key={c.label} className="whitespace-nowrap">
              {i > 0 && <span className="me-3 hidden text-neutral-300 sm:inline">|</span>}
              {c.href ? (
                <a href={c.href} target="_blank" rel="noreferrer" className="underline decoration-neutral-300 underline-offset-2 hover:text-neutral-950">
                  {c.label}
                </a>
              ) : (
                c.label
              )}
            </span>
          ))}
        </p>
      </header>

      <H>Summary</H>
      <p>{cv.summary}</p>

      <H>Experience</H>
      <div className="space-y-4">
        {cv.experience.map((job) => (
          <section key={job.company}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <p className="text-[13.5px] font-bold text-neutral-950">{job.company}</p>
              <p className="text-[11.5px] font-medium text-neutral-600">{job.period}</p>
            </div>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <p className="italic">{job.role}</p>
              <p className="text-[11.5px] text-neutral-500 italic">{job.meta}</p>
            </div>
            <ul className="mt-1.5 list-disc space-y-1 ps-5 marker:text-neutral-400 [&>li]:break-inside-avoid">
              {job.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <H>Technical Skills</H>
      <ul className="space-y-1">
        {cv.skills.map((s) => (
          <li key={s.label}>
            <span className="font-semibold text-neutral-950">{s.label}:</span> {s.value}
          </li>
        ))}
      </ul>

      <H>Selected Projects</H>
      <ul className="space-y-1.5">
        {cv.projects.map((p) => (
          <li key={p.name} className="break-inside-avoid">
            <span className="font-semibold text-neutral-950">{p.name}</span>
            <span className="text-neutral-500"> | {p.stack}</span>
            <br />
            {p.text}
          </li>
        ))}
      </ul>

      <div className="grid gap-x-8 sm:grid-cols-2">
        <div>
          <H>Education</H>
          <p className="font-semibold text-neutral-950">{cv.education.degree}</p>
          <p>{cv.education.school}</p>
        </div>
        <div>
          <H>Languages</H>
          <p>{cv.languages}</p>
        </div>
      </div>
    </article>
  )
}

export default function CvViewer() {
  const { t } = useLang()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onOpen = () => setOpen(true)
    window.addEventListener('cv:open', onOpen)
    return () => window.removeEventListener('cv:open', onOpen)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    document.body.classList.add('cv-open')
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      document.body.classList.remove('cv-open')
    }
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="cv-overlay fixed inset-0 z-[110] overflow-y-auto bg-black/75 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onMouseDown={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={t.cvViewer.title}
        >
          <div
            className="cv-toolbar sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-line bg-ink/90 px-4 py-3 backdrop-blur-md sm:px-6"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <p className="truncate font-mono text-sm text-muted" dir="ltr">
              ~/ahmed/<span className="text-fg">cv</span>
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => window.print()}
                className="inline-flex h-9 items-center gap-2 rounded-full bg-accent px-4 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
              >
                <Printer size={15} /> {t.cvViewer.save}
              </button>
              <button
                onClick={() => setOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted hover:text-fg"
                aria-label={t.cvViewer.close}
              >
                <X size={17} />
              </button>
            </div>
          </div>

          <motion.div
            className="px-3 py-6 sm:px-6 sm:py-10"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 16, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div onMouseDown={(e) => e.stopPropagation()}>
              <CvPage />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
