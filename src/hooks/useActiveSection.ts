import { useEffect, useState } from 'react'

export const SECTIONS = ['work', 'services', 'experience', 'skills', 'reviews', 'contact'] as const
export type SectionId = (typeof SECTIONS)[number]

// Returns the section currently under the top third of the viewport ('' while in the hero).
export function useActiveSection() {
  const [active, setActive] = useState<SectionId | ''>('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12)
      const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 4
      if (atBottom) return setActive('contact')
      const line = window.scrollY + window.innerHeight * 0.35
      let current: SectionId | '' = ''
      for (const id of SECTIONS) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= line) current = id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return { active, scrolled }
}
