import { createFileRoute, Link } from '@tanstack/react-router'
import { categories } from '@/data/hekaya'
import { iconMap } from '@/components/icon-map'
import { AppTopBar } from '@/components/app/AppTopBar'

export const Route = createFileRoute('/app/categories/')({
  component: CategoriesScreen,
})

function CategoriesScreen() {
  return (
    <div>
      <AppTopBar title="الأقسام" subtitle="اختر القسم الذي تريد أن تتعلمه" />
      <div className="grid grid-cols-2 gap-3 px-5 py-5">
        {categories.map((category) => {
          const Icon = iconMap[category.icon]
          return (
            <Link
              key={category.slug}
              to="/app/categories/$slug"
              params={{ slug: category.slug }}
              className="flex flex-col gap-2 rounded-2xl border border-hekaya-beige bg-hekaya-white p-3.5 shadow-sm transition-transform active:scale-[0.98]"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-hekaya-green/10 text-hekaya-green">
                  <Icon size={19} />
                </span>
                {category.status === 'soon' ? (
                  <span className="rounded-full bg-hekaya-beige/70 px-2 py-0.5 text-[10px] font-medium text-hekaya-green-dark">
                    قريباً
                  </span>
                ) : null}
              </div>
              <p className="font-display text-sm font-bold text-hekaya-text">{category.title}</p>
              <p className="line-clamp-2 text-xs leading-relaxed text-hekaya-text/60">
                {category.description}
              </p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
