import { useLang } from '../i18n/LangContext'

export default function Footer() {
  const { t } = useLang()
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-8 text-sm text-muted sm:px-6">
        <span>© {new Date().getFullYear()} Ahmed Mohamed</span>
        <span>{t.footer}</span>
      </div>
    </footer>
  )
}
