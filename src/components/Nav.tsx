import { useEffect, useState } from 'react'
import { Languages } from 'lucide-react'
import { useLang } from '../i18n/LangContext'
import { isUpwork, links } from '../site'

export default function Nav() {
  const { t, lang, toggle } = useLang()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const items = [
    { href: '#work', label: t.nav.work },
    { href: '#services', label: t.nav.services },
    { href: '#experience', label: t.nav.experience },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-line bg-ink/80 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="font-display text-lg font-bold tracking-tight">
          Ahmed<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-7 text-sm text-muted md:flex">
          {items.map((i) => (
            <li key={i.href}>
              <a href={i.href} className="transition-colors hover:text-fg">
                {i.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
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
              className="hidden h-9 items-center rounded-full bg-fg px-4 text-sm font-medium text-ink transition-opacity hover:opacity-90 sm:inline-flex"
            >
              {t.nav.cv}
            </a>
          )}
        </div>
      </nav>
    </header>
  )
}
