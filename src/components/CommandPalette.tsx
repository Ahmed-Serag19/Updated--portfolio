import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import {
  ArrowUp,
  Briefcase,
  CornerDownLeft,
  Download,
  ExternalLink,
  FolderKanban,
  Languages,
  Mail,
  MessageSquareQuote,
  Search,
  Sparkles,
  Wrench,
} from 'lucide-react'
import { useLang } from '../i18n/LangContext'
import { isUpwork, links } from '../site'
import { GithubIcon, LinkedinIcon } from './icons'

type Command = { id: string; group: 'nav' | 'action'; label: string; hint?: string; icon: ReactNode; run: () => void }

const scrollTo = (id: string) => {
  if (id === 'top') window.scrollTo({ top: 0 })
  else document.getElementById(id)?.scrollIntoView()
}

export default function CommandPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t, lang, toggle } = useLang()
  const p = t.palette
  const [query, setQuery] = useState('')
  const [index, setIndex] = useState(0)
  const [copied, setCopied] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  const commands = useMemo<Command[]>(() => {
    const nav: Command[] = [
      { id: 'top', label: p.top, hint: '~/', icon: <ArrowUp size={16} /> },
      { id: 'work', label: t.nav.work, hint: '~/work', icon: <FolderKanban size={16} /> },
      { id: 'services', label: t.nav.services, hint: '~/services', icon: <Sparkles size={16} /> },
      { id: 'experience', label: t.nav.experience, hint: '~/experience', icon: <Briefcase size={16} /> },
      { id: 'skills', label: p.skills, hint: '~/skills', icon: <Wrench size={16} /> },
      { id: 'reviews', label: p.reviews, hint: '~/reviews', icon: <MessageSquareQuote size={16} /> },
      { id: 'contact', label: t.nav.contact, hint: '~/contact', icon: <Mail size={16} /> },
    ].map((c) => ({ ...c, group: 'nav' as const, run: () => scrollTo(c.id) }))

    const open = (url: string) => () => window.open(url, '_blank', 'noopener')
    const actions: Command[] = [
      { id: 'lang', group: 'action', label: p.switchLang, hint: lang === 'en' ? 'AR' : 'EN', icon: <Languages size={16} />, run: toggle },
      { id: 'github', group: 'action', label: 'GitHub', hint: '@Ahmed-Serag19', icon: <GithubIcon size={16} />, run: open(links.github) },
    ]
    if (isUpwork) {
      actions.push({ id: 'upwork', group: 'action', label: t.hero.upwork, icon: <ExternalLink size={16} />, run: open(links.upwork) })
    } else {
      actions.push(
        {
          id: 'email',
          group: 'action',
          label: copied ? p.copied : p.copyEmail,
          icon: <Mail size={16} />,
          run: () => {
            navigator.clipboard?.writeText(links.email.replace('mailto:', ''))
            setCopied(true)
            setTimeout(() => setCopied(false), 1600)
          },
        },
        { id: 'linkedin', group: 'action', label: 'LinkedIn', icon: <LinkedinIcon size={15} />, run: open(links.linkedin) },
        { id: 'cv', group: 'action', label: t.contact.cv, hint: 'PDF', icon: <Download size={16} />, run: open(links.cv) },
      )
    }
    return [...nav, ...actions]
  }, [t, p, lang, toggle, copied])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return commands
    return commands.filter((c) => `${c.label} ${c.hint ?? ''} ${c.id}`.toLowerCase().includes(q))
  }, [commands, query])

  useEffect(() => {
    if (!open) return
    setQuery('')
    setIndex(0)
    const id = requestAnimationFrame(() => inputRef.current?.focus())
    document.body.style.overflow = 'hidden'
    return () => {
      cancelAnimationFrame(id)
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => setIndex(0), [query])

  useEffect(() => {
    listRef.current?.querySelector('[data-selected="true"]')?.scrollIntoView({ block: 'nearest' })
  }, [index])

  const runAt = (i: number) => {
    const cmd = filtered[i]
    if (!cmd) return
    // Copying keeps the palette open so the "Copied!" feedback is visible.
    if (cmd.id !== 'email') onClose()
    // Let the dialog close (and body scroll unlock) before scrolling.
    requestAnimationFrame(() => cmd.run())
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setIndex((i) => (i + 1) % Math.max(filtered.length, 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setIndex((i) => (i - 1 + filtered.length) % Math.max(filtered.length, 1))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      runAt(index)
    } else if (e.key === 'Escape') {
      onClose()
    }
  }

  const groups: { key: Command['group']; title: string }[] = [
    { key: 'nav', title: p.navigate },
    { key: 'action', title: p.actions },
  ]

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start justify-center bg-black/60 px-4 pt-[14vh] backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          onMouseDown={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={p.open}
            className="w-full max-w-lg overflow-hidden rounded-2xl border border-line bg-panel shadow-2xl shadow-black/60"
            initial={{ opacity: 0, scale: 0.96, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -6 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            onMouseDown={(e) => e.stopPropagation()}
            onKeyDown={onKeyDown}
          >
            <div className="flex items-center gap-3 border-b border-line px-4">
              <Search size={17} className="shrink-0 text-muted" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={p.placeholder}
                className="h-14 w-full bg-transparent text-[15px] text-fg outline-none placeholder:text-muted"
                role="combobox"
                aria-expanded="true"
                aria-controls="palette-list"
                aria-activedescendant={filtered[index] ? `cmd-${filtered[index].id}` : undefined}
              />
              <kbd className="hidden rounded border border-line px-1.5 py-0.5 font-mono text-[10px] text-muted sm:block">ESC</kbd>
            </div>

            <ul ref={listRef} id="palette-list" role="listbox" className="max-h-[52vh] overflow-y-auto p-2">
              {filtered.length === 0 && <li className="px-3 py-8 text-center text-sm text-muted">{p.empty}</li>}
              {groups.map((g) => {
                const items = filtered.filter((c) => c.group === g.key)
                if (!items.length) return null
                return (
                  <li key={g.key} role="presentation">
                    <p className="px-3 pt-3 pb-1.5 text-[11px] font-medium tracking-wider text-muted uppercase">{g.title}</p>
                    <ul role="presentation">
                      {items.map((c) => {
                        const i = filtered.indexOf(c)
                        const selected = i === index
                        return (
                          <li
                            key={c.id}
                            id={`cmd-${c.id}`}
                            role="option"
                            aria-selected={selected}
                            data-selected={selected}
                            onMouseMove={() => setIndex(i)}
                            onClick={() => runAt(i)}
                            className={`relative flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm ${
                              selected ? 'text-fg' : 'text-muted'
                            }`}
                          >
                            {selected && (
                              <motion.span
                                layoutId="palette-highlight"
                                className="absolute inset-0 rounded-lg bg-white/[0.06] ring-1 ring-line"
                                transition={{ type: 'spring', stiffness: 500, damping: 38 }}
                              />
                            )}
                            <span className={`relative ${selected ? 'text-accent' : ''}`}>{c.icon}</span>
                            <span className="relative flex-1">{c.label}</span>
                            {c.hint && (
                              <span className="relative font-mono text-xs text-muted" dir="ltr">
                                {c.hint}
                              </span>
                            )}
                            {selected && <CornerDownLeft size={14} className="relative text-muted" />}
                          </li>
                        )
                      })}
                    </ul>
                  </li>
                )
              })}
            </ul>

            <div className="hidden items-center gap-4 border-t border-line px-4 py-2.5 text-[11px] text-muted sm:flex">
              <span>
                <kbd className="font-mono">↑↓</kbd> {p.hint}
              </span>
              <span>
                <kbd className="font-mono">↵</kbd> {p.select}
              </span>
              <span>
                <kbd className="font-mono">esc</kbd> {p.close}
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
