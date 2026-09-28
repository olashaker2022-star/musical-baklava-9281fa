import { dailyContent } from '@/data/hekaya'
import { ScrollText, BookOpen, MessageCircle } from 'lucide-react'

export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[230px] rounded-[1.75rem] border border-hekaya-beige bg-hekaya-cream p-2 shadow-xl">
      <div className="flex items-center justify-between px-2 py-1.5">
        <div className="h-1.5 w-10 rounded-full bg-hekaya-beige" />
        <div className="h-1.5 w-1.5 rounded-full bg-hekaya-beige" />
      </div>
      <div className="rounded-[1.25rem] bg-hekaya-white p-3">
        <p className="font-display text-[13px] font-bold text-hekaya-text">السلام عليكم 🌙</p>
        <p className="mt-0.5 text-[10px] text-hekaya-text/50">نتمنى لك يوماً مليئاً بالخير</p>

        <MiniCard icon={ScrollText} label="قصة اليوم" title={dailyContent.story.title} />
        <MiniCard
          icon={BookOpen}
          label="آية اليوم"
          title={dailyContent.ayah.text}
          arabic
        />
        <MiniCard icon={MessageCircle} label="حديث اليوم" title={dailyContent.hadith.text} />
      </div>
    </div>
  )
}

function MiniCard({
  icon: Icon,
  label,
  title,
  arabic,
}: {
  icon: typeof ScrollText
  label: string
  title: string
  arabic?: boolean
}) {
  return (
    <div className="mt-2 rounded-xl border border-hekaya-beige/70 bg-hekaya-cream/60 p-2">
      <div className="flex items-center gap-1">
        <Icon size={10} className="text-hekaya-green" />
        <span className="text-[9px] font-bold text-hekaya-green">{label}</span>
      </div>
      <p
        className={`mt-1 line-clamp-2 text-[10px] leading-snug text-hekaya-text/70 ${
          arabic ? 'font-quran' : ''
        }`}
      >
        {title}
      </p>
    </div>
  )
}
