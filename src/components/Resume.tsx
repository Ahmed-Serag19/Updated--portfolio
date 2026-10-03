import { FileText, Maximize2, Printer } from 'lucide-react'
import { useLang } from '../i18n/LangContext'
import { openCv, printCv } from '../site'
import { CvPage } from './CvViewer'
import { Reveal, Section } from './ui'

// Inline, PDF-viewer style preview of the CV: readable in place, no download.
export default function Resume() {
  const { t } = useLang()
  const r = t.resume

  return (
    <Section id="cv" kicker={r.kicker} title={r.title}>
      <Reveal>
        <p className="-mt-6 mb-8 max-w-2xl text-muted">{r.sub}</p>
        <div className="overflow-hidden rounded-2xl border border-line bg-panel shadow-2xl shadow-black/40">
          <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-2.5 sm:px-5">
            <div className="flex min-w-0 items-center gap-2.5 text-sm" dir="ltr">
              <FileText size={16} className="shrink-0 text-accent" />
              <span className="truncate font-mono text-[13px] text-fg">Ahmed_Mohamed_CV.pdf</span>
              <span className="hidden font-mono text-xs text-muted sm:inline">· A4 · 2 pages</span>
            </div>
            <div className="flex shrink-0 items-center gap-1.5">
              <button
                onClick={openCv}
                className="inline-flex h-8 items-center gap-1.5 rounded-full border border-line px-3 text-xs text-muted transition-colors hover:border-white/20 hover:text-fg"
              >
                <Maximize2 size={13} />
                <span className="hidden sm:inline">{t.cvViewer.full}</span>
              </button>
              <button
                onClick={printCv}
                className="inline-flex h-8 items-center gap-1.5 rounded-full bg-accent px-3 text-xs font-medium text-ink transition-transform hover:-translate-y-0.5"
              >
                <Printer size={13} /> {t.cvViewer.save}
              </button>
            </div>
          </div>

          <div
            className="h-[70vh] max-h-[760px] min-h-[420px] overflow-y-auto overscroll-contain bg-panel-2 px-2 py-4 sm:px-8 sm:py-8"
            tabIndex={0}
            aria-label={t.cvViewer.title}
          >
            <CvPage />
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
