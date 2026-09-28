import type { LucideIcon } from 'lucide-react'
import { AppTopBar } from './AppTopBar'

export function ComingSoonScreen({
  title,
  icon: Icon,
  message,
}: {
  title: string
  icon: LucideIcon
  message: string
}) {
  return (
    <div>
      <AppTopBar title={title} />
      <div className="flex flex-col items-center gap-4 px-8 py-16 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-hekaya-green/10 text-hekaya-green">
          <Icon size={28} />
        </span>
        <p className="font-display text-base font-bold text-hekaya-text">قريباً في حكاية</p>
        <p className="text-sm leading-relaxed text-hekaya-text/60">{message}</p>
      </div>
    </div>
  )
}
