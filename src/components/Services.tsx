import { Gauge, Languages, LayoutDashboard, PenTool } from 'lucide-react'
import { useLang } from '../i18n/LangContext'
import { Reveal, Section } from './ui'

const icons = [LayoutDashboard, PenTool, Languages, Gauge]

export default function Services() {
  const { t } = useLang()
  return (
    <Section id="services" kicker={t.services.kicker} title={t.services.title}>
      <div className="grid gap-4 sm:grid-cols-2">
        {t.services.items.map((s, i) => {
          const Icon = icons[i]
          return (
            <Reveal key={s.title} delay={i * 0.06}>
              <div className="group h-full rounded-2xl border border-line bg-panel p-6 transition-colors hover:border-white/15 sm:p-7">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-soft text-accent">
                  <Icon size={20} />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{s.body}</p>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
