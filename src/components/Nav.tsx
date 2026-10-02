import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react'
import { Command, Languages, Menu } from 'lucide-react'
import { useLang } from '../i18n/LangContext'
import { isUpwork, links } from '../site'
import { useActiveSection, type SectionId } from '../hooks/useActiveSection'
import CommandPalette from './CommandPalette'

// Sections without their own link light up the closest link above them.
const linkFor: Record<SectionId, string> = {
  work: 'work',
  services: 'services',
  experience: 'experience',
  skills: 'experience',
  reviews: 'experience',
  contact: 'contact',
}

const isMac = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform)

function Breadcrumb({ active }: { active: SectionId | '' }) {
  return (
    <a href="#top" className="flex items-center font-mono text-[13px] whitespace-nowrap sm:text-sm" dir="ltr" aria-label="Back to top">
      <span className="text-muted">~/</span>
      <span className="font-medium text-fg">ahmed</span>
      <span className="relative inline-flex overflow-hidden">
        <AnimatePresence mode="popLayout" initial={false}>
          {active && (
            <motion.span
              key={active}
              className="text-accent"
              initial={{ y: 14, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -14, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              /{active}
            </motion.span>
          )}
        </AnimatePresence>
      </span>
      <span className="ms-0.5 inline-block h-4 w-[7px] animate-pulse bg-accent/80" aria-hidden="true" />
    </a>
  )
}

export default function Nav() {
  const { t, lang, toggle } = useLang()
  const { active, scrolled } = useActiveSection()
  const [paletteOpen, setPaletteOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setPaletteOpen((o) => !o)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const items = [
    { id: 'work', label: t.nav.work },
    { id: 'services', label: t.nav.services },
    { id: 'experience', label: t.nav.experience },
    { id: 'contact', label: t.nav.contact },
  ]
  const activeLink = active ? linkFor[active] : ''

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-3 z-50 px-3 sm:top-4">
        <nav
          className={`pointer-events-auto relative mx-auto flex h-14 max-w-5xl items-center justify-between gap-3 overflow-hidden rounded-full border ps-4 pe-2 backdrop-blur-md transition-[background-color,border-color,box-shadow] duration-300 sm:ps-5 ${
            scrolled ? 'border-line bg-ink/75 shadow-lg shadow-black/30' : 'border-transparent bg-ink/30'
          }`}
        >
          <Breadcrumb active={active} />

          <ul className="hidden items-center gap-0.5 text-sm lg:flex">
            {items.map((item, i) => {
              const isActive = activeLink === item.id
              return (
                <li key={item.id} className="relative">
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-accent-soft ring-1 ring-accent/30"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={`relative flex items-center gap-1.5 rounded-full px-3.5 py-1.5 transition-colors ${
                      isActive ? 'text-accent' : 'text-muted hover:text-fg'
                    }`}
                  >
                    <span className={`font-mono text-[10px] ${isActive ? 'text-accent' : 'text-muted/60'}`}>0{i + 1}</span>
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setPaletteOpen(true)}
              className="hidden h-9 items-center gap-2 rounded-full border border-line px-3 text-sm text-muted transition-colors hover:border-white/20 hover:text-fg sm:inline-flex"
              aria-label={t.palette.open}
            >
              <Command size={14} />
              <kbd className="font-mono text-[11px]" dir="ltr">
                {isMac ? '⌘K' : 'Ctrl K'}
              </kbd>
            </button>
            <button
              onClick={toggle}
              className="inline-flex h-9 items-center gap-1.5 rounded-full border border-line px-3 text-sm text-muted transition-colors hover:border-white/20 hover:text-fg"
              aria-label={lang === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}
            >
              <Languages size={15} />
              {lang === 'en' ? 'عربي' : 'EN'}
            </button>
            {!isUpwork && (
              <a
                href={links.cv}
                download
                className="hidden h-9 items-center rounded-full bg-fg px-4 text-sm font-medium text-ink transition-opacity hover:opacity-90 md:inline-flex"
              >
                {t.nav.cv}
              </a>
            )}
            <button
              onClick={() => setPaletteOpen(true)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-fg text-ink sm:hidden"
              aria-label={t.palette.menu}
            >
              <Menu size={17} />
            </button>
          </div>

          <motion.span
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-[2px] bg-accent"
            style={{ scaleX: progress, transformOrigin: lang === 'ar' ? '100% 50%' : '0% 50%' }}
          />
        </nav>
      </header>

      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </>
  )
}
