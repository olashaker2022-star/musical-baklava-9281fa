import { Link } from '@tanstack/react-router'
import { ChevronRight } from 'lucide-react'
import type { ReactNode } from 'react'

export function AppTopBar({
  title,
  subtitle,
  back,
  action,
}: {
  title: string
  subtitle?: string
  back?: string
  action?: ReactNode
}) {
  return (
    <div className="sticky top-0 z-10 flex items-center gap-3 border-b border-hekaya-beige/70 bg-hekaya-cream/95 px-5 py-4 backdrop-blur">
      {back ? (
        <Link
          to={back}
          className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-hekaya-white text-hekaya-green shadow-sm"
          aria-label="رجوع"
        >
          <ChevronRight size={18} />
        </Link>
      ) : null}
      <div className="min-w-0 flex-1">
        <h1 className="truncate font-display text-lg font-bold text-hekaya-text">{title}</h1>
        {subtitle ? <p className="truncate text-xs text-hekaya-text/60">{subtitle}</p> : null}
      </div>
      {action}
    </div>
  )
}
