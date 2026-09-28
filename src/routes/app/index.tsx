import { createFileRoute, Link } from '@tanstack/react-router'
import { BookOpen, MessageCircle, ScrollText, ChevronLeft } from 'lucide-react'
import { dailyContent, continueJourney } from '@/data/hekaya'
import { DailyCard } from '@/components/app/DailyCard'
import { SampleBadge } from '@/components/SampleBadge'

export const Route = createFileRoute('/app/')({
  component: HomeScreen,
})

function HomeScreen() {
  return (
    <div className="flex flex-col gap-5 px-5 pb-4 pt-6">
      <header className="flex items-center justify-between">
        <div>
          <p className="font-display text-xl font-bold text-hekaya-text">السلام عليكم يا صديقي 🌙</p>
          <p className="mt-0.5 text-sm text-hekaya-text/60">نتمنى لك يوماً مليئاً بالخير والعلم</p>
        </div>
        <img
          src="/.netlify/images?url=/img/logo-emblem.png&w=88&fm=webp"
          alt="حكاية"
          className="h-11 w-11 flex-none rounded-full border border-hekaya-beige bg-hekaya-white object-cover p-1"
        />
      </header>

      <div className="-mt-1">
        <SampleBadge />
      </div>

      <DailyCard
        eyebrow="قصة اليوم"
        icon={ScrollText}
        title={dailyContent.story.title}
        meta={`${dailyContent.story.minutes} دقائق`}
        ctaLabel="اقرأ القصة"
        to="/app/categories/prophets"
      >
        <p className="text-sm leading-relaxed text-hekaya-text/80">{dailyContent.story.excerpt}</p>
      </DailyCard>

      <DailyCard
        eyebrow="آية اليوم"
        icon={BookOpen}
        title={`${dailyContent.ayah.surah} · ${dailyContent.ayah.ayahRef}`}
        ctaLabel="التفسير المبسط"
        to="/app/categories/quran"
      >
        <p className="font-quran text-lg leading-loose text-hekaya-green-dark" dir="rtl">
          {dailyContent.ayah.text}
        </p>
      </DailyCard>

      <DailyCard
        eyebrow="حديث اليوم"
        icon={MessageCircle}
        title={dailyContent.hadith.source}
        ctaLabel="اقرأ الشرح"
        to="/app/categories/hadith"
      >
        <p className="text-[15px] leading-relaxed text-hekaya-text/85">«{dailyContent.hadith.text}»</p>
      </DailyCard>

      <section>
        <h2 className="mb-3 font-display text-base font-bold text-hekaya-text">استكمل رحلتك</h2>
        <div className="flex flex-col gap-3">
          {continueJourney.map((item) => (
            <Link
              key={item.categorySlug + item.title}
              to="/app/categories/$slug"
              params={{ slug: item.categorySlug }}
              className="flex items-center gap-3 rounded-2xl border border-hekaya-beige bg-hekaya-white p-3.5 shadow-sm"
            >
              <div className="flex-1">
                <p className="font-display text-sm font-bold text-hekaya-text">{item.title}</p>
                <p className="mt-0.5 text-xs text-hekaya-text/60">{item.subtitle}</p>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-hekaya-beige">
                  <div
                    className="h-full rounded-full bg-hekaya-gold"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              </div>
              <ChevronLeft size={18} className="flex-none text-hekaya-text/40" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
