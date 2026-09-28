import { Link } from '@tanstack/react-router'
import { ChevronLeft, type LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'

export function DailyCard({
  eyebrow,
  icon: Icon,
  title,
  meta,
  children,
  ctaLabel,
  to,
}: {
  eyebrow: string
  icon: LucideIcon
  title: string
  meta?: string
  children: ReactNode
  ctaLabel: string
  to: string
}) {
  return (
    <section className="rounded-2xl border border-hekaya-beige bg-hekaya-white p-4 shadow-sm">
      <div className="mb-2 flex items-center gap-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-hekaya-green/10 text-hekaya-green">
          <Icon size={16} />
        </span>
        <span className="font-display text-sm font-bold text-hekaya-green">{eyebrow}</span>
        {meta ? (
          <span className="mr-auto rounded-full bg-hekaya-beige/60 px-2.5 py-0.5 text-[11px] text-hekaya-text/70">
            {meta}
          </span>
        ) : null}
      </div>
      <h3 className="mb-2 font-display text-base font-bold text-hekaya-text">{title}</h3>
      <div className="mb-4">{children}</div>
      <Link
        to={to}
        className="inline-flex items-center gap-1.5 rounded-xl bg-hekaya-green px-4 py-2 text-sm font-semibold text-hekaya-white transition-opacity hover:opacity-90"
      >
        {ctaLabel}
        <ChevronLeft size={15} />
      </Link>
    </section>
  )
}
