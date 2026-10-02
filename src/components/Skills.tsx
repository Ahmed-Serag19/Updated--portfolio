import { useLang } from '../i18n/LangContext'
import { Chip, Reveal, Section } from './ui'

export default function Skills() {
  const { t } = useLang()
  return (
    <Section id="skills" kicker={t.skills.kicker} title={t.skills.title}>
      <div className="divide-y divide-line rounded-2xl border border-line">
        {t.skills.groups.map((g, i) => (
          <Reveal key={g.name} delay={i * 0.04}>
            <div className="grid gap-3 p-5 sm:grid-cols-[180px_1fr] sm:items-center sm:p-6">
              <h3 className="text-sm font-medium">{g.name}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
