import { Bot, BookOpen, ScrollText, ShieldCheck, Users, Webhook } from 'lucide-react'

// Illustration of the AI agent configuration UI (the real product is internal).
const nav = [
  { icon: Bot, label: 'Identity', active: true },
  { icon: ShieldCheck, label: 'Guardrails' },
  { icon: BookOpen, label: 'Knowledge' },
  { icon: Webhook, label: 'Webhooks' },
  { icon: Users, label: 'Handoff' },
  { icon: ScrollText, label: 'Audit log' },
]

function Toggle({ on }: { on?: boolean }) {
  return (
    <span className={`relative inline-block h-4 w-7 rounded-full ${on ? 'bg-accent' : 'bg-white/15'}`}>
      <span className={`absolute top-0.5 h-3 w-3 rounded-full bg-white transition-all ${on ? 'left-3.5' : 'left-0.5'}`} />
    </span>
  )
}

export default function LucidyaMock() {
  return (
    <div className="flex h-full w-full text-[10px] sm:text-[11px]" dir="ltr" aria-hidden="true">
      <aside className="hidden w-[24%] shrink-0 flex-col gap-1 border-r border-line bg-panel p-3 sm:flex">
        <div className="mb-3 flex items-center gap-2 px-1">
          <span className="h-5 w-5 rounded-md bg-accent/80" />
          <span className="h-2 w-14 rounded bg-white/20" />
        </div>
        {nav.map(({ icon: Icon, label, active }) => (
          <div
            key={label}
            className={`flex items-center gap-2 rounded-md px-2 py-1.5 ${active ? 'bg-accent-soft text-accent' : 'text-muted'}`}
          >
            <Icon size={12} />
            {label}
          </div>
        ))}
      </aside>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold text-fg">Agent identity</div>
            <div className="text-muted">Name, tone and languages your agent uses</div>
          </div>
          <span className="rounded-md bg-accent px-2.5 py-1 font-medium text-ink">Publish</span>
        </div>

        <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-5">
          <div className="flex sm:col-span-3 flex-col gap-2.5 rounded-lg border border-line bg-panel p-3">
            <div className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-accent-soft text-accent">
                <Bot size={15} />
              </span>
              <div className="flex-1">
                <div className="text-muted">Agent name</div>
                <div className="mt-0.5 rounded border border-line bg-ink px-2 py-1 text-fg">Sara, Support Agent</div>
              </div>
            </div>
            <div>
              <div className="mb-1 text-muted">Tone</div>
              <div className="flex flex-wrap gap-1">
                {['Friendly', 'Concise', 'Formal'].map((t, i) => (
                  <span key={t} className={`rounded-full border px-2 py-0.5 ${i < 2 ? 'border-accent/50 text-accent' : 'border-line text-muted'}`}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="mb-1 text-muted">Languages</div>
              <div className="flex gap-1">
                <span className="rounded border border-line px-2 py-0.5 text-fg">English</span>
                <span className="rounded border border-line px-2 py-0.5 text-fg">العربية</span>
              </div>
            </div>
            <div className="mt-auto space-y-1.5 border-t border-line pt-2">
              {[
                ['Hand off to a human on request', true],
                ['Block off-topic questions', true],
                ['Collect feedback after chat', false],
              ].map(([l, on]) => (
                <div key={l as string} className="flex items-center justify-between text-muted">
                  {l as string}
                  <Toggle on={on as boolean} />
                </div>
              ))}
            </div>
          </div>

          <div className="hidden sm:col-span-2 sm:flex flex-col gap-2 rounded-lg border border-line bg-panel p-3">
            <div className="text-muted">Preview</div>
            <div className="max-w-[90%] self-end rounded-lg rounded-br-sm bg-white/10 px-2 py-1.5 text-fg">Where is my order?</div>
            <div className="max-w-[90%] rounded-lg rounded-bl-sm bg-accent-soft px-2 py-1.5 text-fg">
              Happy to help! Can you share your order number?
            </div>
            <div className="max-w-[90%] self-end rounded-lg rounded-br-sm bg-white/10 px-2 py-1.5 text-fg" dir="rtl">
              ممكن أكلم موظف؟
            </div>
            <div className="max-w-[90%] rounded-lg rounded-bl-sm bg-accent-soft px-2 py-1.5 text-fg" dir="rtl">
              أكيد، بحوّلك لأحد الزملاء الآن.
            </div>
            <div className="mt-auto rounded border border-line bg-ink px-2 py-1 text-muted">Type a message…</div>
          </div>
        </div>
      </div>
    </div>
  )
}
