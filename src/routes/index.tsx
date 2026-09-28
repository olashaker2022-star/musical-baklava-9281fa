import { createFileRoute, Link } from '@tanstack/react-router'
import {
  BookOpen,
  Sparkles,
  CalendarDays,
  ChevronLeft,
  Mic,
  Bookmark,
  ShieldCheck,
} from 'lucide-react'
import { categories } from '@/data/hekaya'
import { iconMap } from '@/components/icon-map'
import { PhoneMockup } from '@/components/landing/PhoneMockup'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

const onboardingHighlights = [
  {
    icon: BookOpen,
    title: 'اتعلم الإسلام بطريقة مختلفة',
    description: 'قصص الأنبياء والصحابة والصحابيات، السيرة، القرآن والأحاديث بأسلوب بسيط.',
  },
  {
    icon: Sparkles,
    title: 'مش بس اقرأ... افهم',
    description: 'اعرف معنى الآية والحديث والسياق والقصة وراءهما، بشرح واضح وهادئ.',
  },
  {
    icon: CalendarDays,
    title: 'خلي العلم عادة يومية',
    description: 'قصة قصيرة أو آية أو حديث كل يوم، تتابع رحلتك خطوة بخطوة.',
  },
]

const featurePreview = categories.slice(0, 6)

function LandingPage() {
  return (
    <div className="min-h-screen bg-hekaya-cream">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-2.5">
          <img
            src="/.netlify/images?url=/img/logo-emblem.png&w=72&fm=webp"
            alt="حكاية"
            className="h-9 w-9 rounded-full"
          />
          <span className="font-display text-lg font-extrabold text-hekaya-green-dark">
            حكاية
          </span>
        </div>
        <Link
          to="/app"
          className="rounded-full bg-hekaya-green px-5 py-2 text-sm font-semibold text-hekaya-white transition-opacity hover:opacity-90"
        >
          جرّب التطبيق
        </Link>
      </header>

      {/* Hero */}
      <section
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] px-6 py-14 sm:px-12"
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgba(248,243,232,0.4) 0%, rgba(248,243,232,0.92) 75%), url(/.netlify/images?url=/img/hero-illustration.png&w=1400&fm=webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
        }}
      >
        <div className="relative grid items-center gap-10 sm:grid-cols-2">
          <div className="text-center sm:text-right">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-hekaya-white/80 px-3 py-1 text-xs font-medium text-hekaya-green-dark shadow-sm">
              <Sparkles size={13} />
              نموذج أولي لتطبيق تعليمي إسلامي
            </span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight text-hekaya-green-dark sm:text-5xl">
              حكاية
            </h1>
            <p className="mt-3 font-display text-lg font-bold text-hekaya-text/80">
              افهم دينك... حكاية بحكاية
            </p>
            <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-hekaya-text/70 sm:mx-0">
              تطبيق عربي يساعدك تتعلم الإسلام بطريقة هادئة وبسيطة: القرآن وتفسيره، السيرة النبوية،
              قصص الأنبياء والصحابة والصحابيات، والأحاديث — قصة في اليوم تكفي.
            </p>
            <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-start">
              <Link
                to="/app"
                className="inline-flex items-center gap-2 rounded-full bg-hekaya-green px-6 py-3 text-sm font-bold text-hekaya-white shadow-md transition-opacity hover:opacity-90"
              >
                ابدأ الآن
                <ChevronLeft size={16} />
              </Link>
              <a
                href="#sections"
                className="inline-flex items-center gap-2 rounded-full border border-hekaya-green/30 bg-hekaya-white/70 px-6 py-3 text-sm font-semibold text-hekaya-green-dark hover:bg-hekaya-white"
              >
                استعرض الأقسام
              </a>
            </div>
          </div>
          <div className="hidden justify-self-center sm:block">
            <PhoneMockup />
          </div>
        </div>
      </section>

      {/* Onboarding highlights */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-display text-2xl font-bold text-hekaya-text">لماذا حكاية؟</h2>
          <p className="mt-2 text-sm text-hekaya-text/60">
            ثلاث أفكار بسيطة تلخّص تجربة التعلّم داخل التطبيق
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {onboardingHighlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-hekaya-beige bg-hekaya-white p-6 text-center shadow-sm"
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-hekaya-gold/15 text-hekaya-gold">
                <item.icon size={22} />
              </span>
              <h3 className="mt-4 font-display text-base font-bold text-hekaya-text">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-hekaya-text/65">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sections / categories preview */}
      <section id="sections" className="bg-hekaya-beige/30 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="font-display text-2xl font-bold text-hekaya-text">كل ما تحتاجه في مكان واحد</h2>
            <p className="mt-2 text-sm text-hekaya-text/60">
              من القرآن والسيرة إلى قصص الصحابة والصحابيات والأحاديث اليومية
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {featurePreview.map((category) => {
              const Icon = iconMap[category.icon]
              return (
                <div
                  key={category.slug}
                  className="rounded-2xl border border-hekaya-beige bg-hekaya-white p-5"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-hekaya-green/10 text-hekaya-green">
                    <Icon size={18} />
                  </span>
                  <p className="mt-3 font-display text-sm font-bold text-hekaya-text">
                    {category.title}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-hekaya-text/60">
                    {category.description}
                  </p>
                </div>
              )
            })}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/app/categories"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-hekaya-green hover:underline"
            >
              استعرض كل الأقسام
              <ChevronLeft size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Feature callouts: AI + audio + saved */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-5 sm:grid-cols-3">
          <Callout
            icon={Sparkles}
            title="اسأل حكاية"
            description="مساعد ذكي يجاوبك من مصادر موثوقة، ويوضح لك إذا كانت المسألة فيها اختلاف علمي بدل أن يفتي بنفسه."
          />
          <Callout
            icon={Mic}
            title="احكيهالي"
            description="اختر آية أو مقطعًا واسمع سياقها في حكاية مبسطة، مبنية على مصادر معتمدة لا على تخيّل."
          />
          <Callout
            icon={Bookmark}
            title="محفوظاتك ورحلتك"
            description="احفظ آياتك وقصصك المفضّلة، وتابع تقدّمك في كل قسم بشكل هادئ بدون منافسة."
          />
        </div>
      </section>

      {/* Content integrity */}
      <section className="mx-auto max-w-4xl px-6 pb-20">
        <div className="flex flex-col gap-4 rounded-3xl border border-hekaya-gold/30 bg-hekaya-gold/10 p-7 sm:flex-row sm:items-start">
          <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-hekaya-gold/20 text-hekaya-gold-light">
            <ShieldCheck size={22} className="text-hekaya-gold" />
          </span>
          <div>
            <h3 className="font-display text-base font-bold text-hekaya-text">
              الدقة أهم من السرعة
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-hekaya-text/75">
              حكاية لا يبتكر آيات أو أحاديث أو أحكامًا شرعية. كل محتوى ديني مرتبط بمصدره، ويُفصل
              بوضوح بين نص القرآن، نص الحديث، التفسير، السرد التاريخي، والشرح المبسّط. المحتوى
              الظاهر حاليًا في هذا العرض الأولي تجريبي لأغراض التصميم فقط، وسيُستبدل بمحتوى مراجَع
              من مصادر موثوقة قبل الإطلاق.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-hekaya-beige px-6 py-8 text-center">
        <p className="font-display text-sm font-bold text-hekaya-green-dark">حكاية | Hekaya</p>
        <p className="mt-1 text-xs text-hekaya-text/50">افهم دينك... حكاية بحكاية</p>
      </footer>
    </div>
  )
}

function Callout({
  icon: Icon,
  title,
  description,
}: {
  icon: typeof Sparkles
  title: string
  description: string
}) {
  return (
    <div className="rounded-2xl border border-hekaya-beige bg-hekaya-white p-6">
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-hekaya-green text-hekaya-white">
        <Icon size={19} />
      </span>
      <h3 className="mt-4 font-display text-base font-bold text-hekaya-text">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-hekaya-text/65">{description}</p>
    </div>
  )
}
