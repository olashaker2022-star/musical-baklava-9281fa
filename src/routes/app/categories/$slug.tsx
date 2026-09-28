import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { categories } from '@/data/hekaya'
import { iconMap } from '@/components/icon-map'
import { AppTopBar } from '@/components/app/AppTopBar'
import { SampleBadge } from '@/components/SampleBadge'

export const Route = createFileRoute('/app/categories/$slug')({
  loader: ({ params }) => {
    const category = categories.find((c) => c.slug === params.slug)
    if (!category) throw notFound()
    return category
  },
  component: CategoryDetailScreen,
})

function CategoryDetailScreen() {
  const category = Route.useLoaderData()
  const Icon = iconMap[category.icon]

  return (
    <div>
      <AppTopBar title={category.title} back="/app/categories" />
      <div className="flex flex-col gap-5 px-5 py-5">
        <div className="flex items-center gap-3">
          <span className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-hekaya-green text-hekaya-white">
            <Icon size={26} />
          </span>
          <div>
            <p className="font-display text-lg font-bold text-hekaya-text">{category.title}</p>
            <p className="text-sm text-hekaya-text/60">{category.itemCount} عنصر في هذا القسم</p>
          </div>
        </div>

        <p className="text-[15px] leading-relaxed text-hekaya-text/80">{category.description}</p>

        <div>
          <div className="mb-2 flex items-center justify-between">
            <h2 className="font-display text-sm font-bold text-hekaya-text">أمثلة من هذا القسم</h2>
            <SampleBadge />
          </div>
          <div className="flex flex-col gap-2">
            {category.sampleItems.map((item) => (
              <div
                key={item}
                className="flex items-center justify-between rounded-xl border border-hekaya-beige bg-hekaya-white px-4 py-3"
              >
                <span className="text-sm text-hekaya-text/85">{item}</span>
                {category.status === 'available' ? (
                  <span className="text-xs text-hekaya-green">متاح للقراءة</span>
                ) : (
                  <span className="text-xs text-hekaya-text/40">قريباً</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-hekaya-gold/40 bg-hekaya-gold/10 p-4">
          <p className="text-sm leading-relaxed text-hekaya-text/80">
            هذا عرض أولي لهيكل القسم. المحتوى الكامل والموثّق سيُضاف مع مصادره في مرحلة لاحقة — راجع{' '}
            <span className="font-semibold text-hekaya-green-dark">«المصادر»</span> في صفحة التطبيق
            الكامل لمعرفة أصل كل معلومة دينية.
          </p>
        </div>

        <Link
          to="/app/categories"
          className="text-center text-sm font-semibold text-hekaya-green underline-offset-2 hover:underline"
        >
          الرجوع إلى كل الأقسام
        </Link>
      </div>
    </div>
  )
}
