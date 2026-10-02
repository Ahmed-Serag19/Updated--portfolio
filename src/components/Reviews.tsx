import { Star } from 'lucide-react'
import { useLang } from '../i18n/LangContext'
import { Reveal, Section } from './ui'

export default function Reviews() {
  const { t } = useLang()
  return (
    <Section id="reviews" kicker={t.reviews.kicker} title={t.reviews.title}>
      <div className="grid gap-4 md:grid-cols-3">
        {t.reviews.items.map((r, i) => (
          <Reveal key={r.who} delay={i * 0.06}>
            <figure className="flex h-full flex-col rounded-2xl border border-line bg-panel p-6">
              <div className="flex gap-0.5 text-accent" aria-label="5 out of 5">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} size={15} fill="currentColor" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 leading-relaxed">“{r.quote}”</blockquote>
              <figcaption className="mt-5 text-sm text-muted">{r.who}</figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
