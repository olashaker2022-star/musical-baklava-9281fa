import { Link, useLocation } from '@tanstack/react-router'
import { Home, LayoutGrid, Search, Bookmark, User, type LucideIcon } from 'lucide-react'
import { bottomNavItems, type NavItem } from '@/data/hekaya'

const iconFor: Record<NavItem['icon'], LucideIcon> = {
  home: Home,
  grid: LayoutGrid,
  search: Search,
  bookmark: Bookmark,
  user: User,
}

export function BottomNav() {
  const location = useLocation()

  return (
    <nav
      className="absolute inset-x-0 bottom-0 z-20 flex items-stretch justify-between border-t border-hekaya-beige bg-hekaya-white/95 px-1 pb-[max(env(safe-area-inset-bottom),0.5rem)] pt-1.5 backdrop-blur"
      aria-label="التنقل الرئيسي"
    >
      {bottomNavItems.map((item) => {
        const Icon = iconFor[item.icon]
        const isActive =
          item.to === '/app'
            ? location.pathname === '/app'
            : location.pathname.startsWith(item.to)

        return (
          <Link
            key={item.to}
            to={item.to}
            className="flex flex-1 flex-col items-center gap-1 rounded-xl px-1 py-1.5 text-center transition-colors"
          >
            <span
              className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors ${
                isActive ? 'bg-hekaya-green text-hekaya-white' : 'text-hekaya-green/50'
              }`}
            >
              <Icon size={19} strokeWidth={isActive ? 2.25 : 1.8} />
            </span>
            <span
              className={`text-[11px] leading-none ${
                isActive ? 'font-semibold text-hekaya-green-dark' : 'text-hekaya-green/50'
              }`}
            >
              {item.label}
            </span>
          </Link>
        )
      })}
    </nav>
  )
}
