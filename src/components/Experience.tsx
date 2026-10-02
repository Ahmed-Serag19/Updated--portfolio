import { useLang } from '../i18n/LangContext'
import { Reveal, Section } from './ui'

export default function Experience() {
  const { t } = useLang()
  return (
    <Section id="experience" kicker={t.experience.kicker} title={t.experience.title}>
      <ol className="relative space-y-6 border-s border-line ps-6 sm:ps-10">
        {t.experience.jobs.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.06}>
            <li className="relative">
              <span className="absolute -start-[29px] top-2 h-3 w-3 rounded-full border-2 border-ink bg-accent sm:-start-[45px]" />
              <div className="rounded-2xl border border-line bg-panel p-6 sm:p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3 className="font-display text-xl font-semibold">
                    {job.role} <span className="text-muted">·</span> <span className="text-accent">{job.company}</span>
                  </h3>
                  <span className="text-sm text-muted">{job.period}</span>
                </div>
                <p className="mt-1 text-sm text-muted">{job.place}</p>
                {job.note && <p className="mt-3 text-sm text-fg/80 italic">{job.note}</p>}
                <ul className="mt-4 space-y-2">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
