import type { ReactNode } from 'react'
import { BottomNav } from './BottomNav'

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-hekaya-beige/40 sm:flex sm:items-center sm:justify-center sm:py-8">
      <div className="relative flex h-screen w-full flex-col overflow-hidden bg-hekaya-cream sm:h-[860px] sm:max-w-[430px] sm:rounded-[2.5rem] sm:border sm:border-hekaya-beige sm:shadow-2xl">
        <div className="pattern-bg no-scrollbar flex-1 overflow-y-auto pb-24">{children}</div>
        <BottomNav />
      </div>
    </div>
  )
}
