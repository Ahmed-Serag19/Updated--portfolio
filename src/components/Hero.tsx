import { motion } from 'motion/react'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { useLang } from '../i18n/LangContext'
import { isUpwork, links } from '../site'

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
})

export default function Hero() {
  const { t } = useLang()
  const h = t.hero

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-4 md:pt-40 md:pb-8">
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-[1fr_auto]">
        <div>
          <motion.div {...fade(0)} className="mb-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3 py-1 text-xs text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {h.available}
            </span>
            <span className="text-sm text-muted">Ahmed Mohamed · {h.eyebrow}</span>
          </motion.div>

          <motion.h1
            {...fade(0.08)}
            className="font-display text-[2.6rem] leading-[1.05] font-semibold tracking-tight sm:text-6xl md:text-7xl"
          >
            {h.title[0]}
            <br />
            <span className="text-accent">{h.title[1]}</span>
          </motion.h1>

          <motion.p {...fade(0.16)} className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {h.sub}
          </motion.p>

          <motion.div {...fade(0.24)} className="mt-9 flex flex-wrap gap-3">
            <a
              href="#work"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              {h.primary}
              <ArrowDown size={17} />
            </a>
            {isUpwork ? (
              <a
                href={links.upwork}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-line px-6 font-medium transition-colors hover:border-white/25"
              >
                {h.upwork}
                <ArrowUpRight size={17} />
              </a>
            ) : (
              <a
                href="#contact"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-line px-6 font-medium transition-colors hover:border-white/25"
              >
                {h.contact}
              </a>
            )}
          </motion.div>
        </div>

        <motion.div {...fade(0.2)} className="relative hidden md:block">
          <div className="absolute inset-0 -z-10 translate-x-3 translate-y-3 rounded-[2rem] border border-accent/30" />
          <div className="h-72 w-60 overflow-hidden rounded-[2rem] border border-line bg-gradient-to-b from-panel-2 to-panel lg:h-80 lg:w-64">
            <img src="/avatar.webp" alt="Ahmed Mohamed" className="h-full w-full object-cover object-top" width={800} height={1000} />
          </div>
        </motion.div>
      </div>

      <div className="relative mx-auto mt-16 max-w-6xl px-4 sm:px-6 md:mt-24">
        <motion.dl
          {...fade(0.32)}
          className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4"
        >
          {h.stats.map((s) => (
            <div key={s.label} className="bg-ink px-5 py-6">
              <dt className="font-display text-3xl font-semibold">
                <bdi>{s.value}</bdi>
              </dt>
              <dd className="mt-1 text-sm text-muted">{s.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}
