import { ArrowUpRight, FileText, Mail, MessageCircle } from 'lucide-react'
import { useLang } from '../i18n/LangContext'
import { isUpwork, links, openCv } from '../site'
import { GithubIcon, LinkedinIcon } from './icons'
import { Reveal } from './ui'

const btn =
  'inline-flex h-12 items-center gap-2 rounded-full border border-line px-5 font-medium transition-colors hover:border-white/25'

export default function Contact() {
  const { t } = useLang()
  const c = t.contact

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-line bg-panel px-6 py-14 text-center sm:px-12 md:py-20">
          <div className="pointer-events-none absolute -bottom-32 left-1/2 h-72 w-[600px] -translate-x-1/2 rounded-full bg-accent/15 blur-[100px]" />
          <p className="relative text-sm font-medium text-accent">{c.kicker}</p>
          <h2 className="relative mt-3 font-display text-3xl font-semibold tracking-tight sm:text-5xl">{c.title}</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-lg text-muted">{isUpwork ? c.upworkSub : c.sub}</p>

          <div className="relative mt-9 flex flex-wrap justify-center gap-3">
            {isUpwork ? (
              <>
                <a href={links.upwork} target="_blank" rel="noreferrer" className={`${btn} border-transparent bg-accent text-ink hover:border-transparent`}>
                  {t.hero.upwork} <ArrowUpRight size={17} />
                </a>
                <button onClick={openCv} className={btn}>
                  <FileText size={17} /> {t.cvViewer.view}
                </button>
                <a href={links.github} target="_blank" rel="noreferrer" className={btn}>
                  <GithubIcon size={17} /> GitHub
                </a>
              </>
            ) : (
              <>
                <a href={links.email} className={`${btn} border-transparent bg-accent text-ink hover:border-transparent`}>
                  <Mail size={17} /> {c.email}
                </a>
                <a href={links.whatsapp} target="_blank" rel="noreferrer" className={btn}>
                  <MessageCircle size={17} /> {c.whatsapp}
                </a>
                <a href={links.linkedin} target="_blank" rel="noreferrer" className={btn}>
                  <LinkedinIcon size={16} /> LinkedIn
                </a>
                <a href={links.github} target="_blank" rel="noreferrer" className={btn}>
                  <GithubIcon size={17} /> GitHub
                </a>
                <button onClick={openCv} className={btn}>
                  <FileText size={17} /> {t.cvViewer.view}
                </button>
              </>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
