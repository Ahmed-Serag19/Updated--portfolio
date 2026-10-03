import { ArrowUpRight, CircleSlash, Lock } from 'lucide-react'
import { GithubIcon } from './icons'
import { useLang } from '../i18n/LangContext'
import type { MoreItem, Project } from '../i18n/content'
import { Chip, Reveal, Section } from './ui'
import LucidyaMock from './LucidyaMock'

function BrowserFrame({ project }: { project: Project }) {
  const host = project.live ? new URL(project.live).host : project.id === 'lucidya' ? 'AI Agent Studio (illustration)' : 'github.com'
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-panel shadow-2xl shadow-black/40">
      <div className="flex items-center gap-2 border-b border-line px-4 py-2.5" dir="ltr">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="mx-auto truncate rounded-md bg-white/[0.04] px-3 py-0.5 text-[11px] text-muted">{host}</span>
      </div>
      <div className={`${project.image ? 'aspect-[16/10]' : 'aspect-square sm:aspect-[16/10]'} bg-ink`}>
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className={`h-full w-full ${project.id === 'parking' ? 'object-contain p-2' : 'object-cover object-top'}`}
          />
        ) : (
          <LucidyaMock />
        )}
      </div>
    </div>
  )
}

function Phone({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="absolute -bottom-8 end-4 hidden w-[22%] overflow-hidden rounded-[1.4rem] border-4 border-panel-2 bg-ink shadow-2xl shadow-black/60 sm:block">
      <img src={src} alt={alt} loading="lazy" className="aspect-[390/844] w-full object-cover object-top" />
    </div>
  )
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const { t } = useLang()
  const flip = index % 2 === 1

  return (
    <article className="grid items-center gap-10 md:grid-cols-12 md:gap-12">
      <Reveal className={`relative md:col-span-7 ${flip ? 'md:order-2' : ''}`}>
        <BrowserFrame project={project} />
        {project.mobile && <Phone src={project.mobile} alt={`${project.title} mobile`} />}
      </Reveal>

      <Reveal delay={0.1} className={`md:col-span-5 ${flip ? 'md:order-1' : ''}`}>
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-sm text-muted">{project.meta}</p>
          {project.badge && (
            <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-medium text-accent">{project.badge}</span>
          )}
        </div>
        <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">{project.title}</h3>
        <p className="mt-4 leading-relaxed text-muted">{project.summary}</p>

        <ul className="mt-5 space-y-2.5">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-3 text-sm leading-relaxed">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2" dir="ltr">
          {project.stack.map((s) => (
            <Chip key={s}>{s}</Chip>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-5 text-sm font-medium">
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-fg hover:text-accent">
              {t.work.live} <ArrowUpRight size={16} />
            </a>
          )}
          {project.code && (
            <a href={project.code} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-muted hover:text-fg">
              <GithubIcon size={16} /> {t.work.code}
            </a>
          )}
          {project.note && (
            <span className="inline-flex items-center gap-1.5 text-xs font-normal text-muted">
              <Lock size={13} /> {project.note}
            </span>
          )}
        </div>
      </Reveal>
    </article>
  )
}

function MoreCard({ item }: { item: MoreItem }) {
  const { t } = useLang()
  return (
    <div className="flex h-full flex-col rounded-2xl border border-line bg-panel p-6 transition-colors hover:border-white/15">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full border border-line px-2.5 py-0.5 text-xs text-muted">{item.tag}</span>
        {item.closed && (
          <span className="inline-flex items-center gap-1 text-xs text-muted/70">
            <CircleSlash size={12} /> {t.more.closed}
          </span>
        )}
      </div>
      <h4 className="mt-4 font-display text-lg font-semibold">{item.title}</h4>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{item.text}</p>
      <div className="mt-4 flex flex-wrap gap-1.5" dir="ltr">
        {item.stack.map((s) => (
          <Chip key={s}>{s}</Chip>
        ))}
      </div>
      {(item.live || item.code) && (
        <div className="mt-5 flex gap-5 text-sm font-medium">
          {item.live && (
            <a href={item.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-accent">
              {t.work.live} <ArrowUpRight size={15} />
            </a>
          )}
          {item.code && (
            <a href={item.code} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-muted hover:text-fg">
              <GithubIcon size={15} /> {t.work.code}
            </a>
          )}
        </div>
      )}
    </div>
  )
}

export default function Work() {
  const { t } = useLang()
  return (
    <Section id="work" kicker={t.work.kicker} title={t.work.title}>
      <div className="space-y-24 md:space-y-32">
        {t.projects.map((p, i) => (
          <ProjectRow key={p.id} project={p} index={i} />
        ))}
      </div>

      <div className="mt-28 md:mt-36">
        <Reveal>
          <p className="mb-2 text-sm font-medium text-accent">{t.more.kicker}</p>
          <h3 className="font-display text-2xl font-semibold tracking-tight">{t.more.title}</h3>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.more.items.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.05} className="h-full">
              <MoreCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
