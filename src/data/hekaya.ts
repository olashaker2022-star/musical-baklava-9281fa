/**
 * بيانات تجريبية (Sample data) لعرض النموذج الأولي لتطبيق «حكاية».
 *
 * IMPORTANT: All religious text below (Quran wording, hadith wording, seerah
 * narration) is illustrative placeholder copy for UI prototyping only — it is
 * NOT vetted for religious accuracy and must be replaced with content that is
 * reviewed against reliable, cited sources (e.g. Quran.com API text, sunnah.com,
 * or a scholar-reviewed content pipeline) before this app is used by real
 * users. See PLAN.md and AGENTS.md for the content-sourcing plan.
 */

export const isSampleContent = true

export type IconName =
  | 'book-open'
  | 'scroll'
  | 'users'
  | 'user-round'
  | 'heart-handshake'
  | 'message-circle'
  | 'sparkles'
  | 'calendar-days'
  | 'moon-star'

export interface Category {
  slug: string
  title: string
  description: string
  icon: IconName
  itemCount: number
  sampleItems: string[]
  status: 'available' | 'soon'
}

export const categories: Category[] = [
  {
    slug: 'quran',
    title: 'القرآن الكريم',
    description: 'تلاوة وتفسير مبسّط، آية بآية وسورة بسورة.',
    icon: 'book-open',
    itemCount: 114,
    sampleItems: ['سورة الفاتحة', 'سورة يوسف', 'سورة الكهف'],
    status: 'available',
  },
  {
    slug: 'seerah',
    title: 'السيرة النبوية',
    description: 'رحلة النبي ﷺ الزمنية من المولد إلى الوفاة.',
    icon: 'moon-star',
    itemCount: 12,
    sampleItems: ['المولد', 'بداية الوحي', 'الهجرة'],
    status: 'available',
  },
  {
    slug: 'prophets',
    title: 'قصص الأنبياء',
    description: 'قصص الأنبياء عليهم السلام بأسلوب بسيط ومؤثر.',
    icon: 'scroll',
    itemCount: 25,
    sampleItems: ['سيدنا يوسف', 'سيدنا أيوب', 'سيدنا موسى'],
    status: 'soon',
  },
  {
    slug: 'companions',
    title: 'قصص الصحابة',
    description: 'مواقف وحكايات من حياة صحابة رسول الله ﷺ.',
    icon: 'users',
    itemCount: 20,
    sampleItems: ['أبو بكر الصديق', 'عمر بن الخطاب', 'بلال بن رباح'],
    status: 'available',
  },
  {
    slug: 'female-companions',
    title: 'قصص الصحابيات',
    description: 'سيرة نساء أكرمهنّ الإسلام وخلّد ذكرهنّ التاريخ.',
    icon: 'user-round',
    itemCount: 15,
    sampleItems: ['خديجة رضي الله عنها', 'عائشة رضي الله عنها', 'أسماء بنت أبي بكر'],
    status: 'available',
  },
  {
    slug: 'hadith',
    title: 'الأحاديث',
    description: 'أحاديث نبوية موثّقة مع شرح مبسّط وما نتعلمه.',
    icon: 'message-circle',
    itemCount: 40,
    sampleItems: ['حديث الأعمال بالنيات', 'حديث بر الوالدين', 'حديث حسن الخلق'],
    status: 'available',
  },
  {
    slug: 'thikr',
    title: 'الأذكار',
    description: 'أذكار الصباح والمساء وأذكار المناسبات اليومية.',
    icon: 'sparkles',
    itemCount: 10,
    sampleItems: ['أذكار الصباح', 'أذكار المساء', 'أذكار النوم'],
    status: 'soon',
  },
  {
    slug: 'figures',
    title: 'شخصيات إسلامية',
    description: 'علماء ومفكرون وشخصيات أثّرت في تاريخ الإسلام.',
    icon: 'heart-handshake',
    itemCount: 18,
    sampleItems: ['الإمام الشافعي', 'ابن سينا', 'رابعة العدوية'],
    status: 'soon',
  },
  {
    slug: 'events',
    title: 'مناسبات وأحداث',
    description: 'مناسبات إسلامية وأحداث تاريخية مهمة عبر السنة.',
    icon: 'calendar-days',
    itemCount: 8,
    sampleItems: ['رمضان', 'الهجرة النبوية', 'ليلة القدر'],
    status: 'soon',
  },
]

export interface DailyStory {
  title: string
  minutes: number
  excerpt: string
}

export interface DailyAyah {
  surah: string
  ayahRef: string
  text: string
}

export interface DailyHadith {
  text: string
  source: string
}

export const dailyContent: {
  story: DailyStory
  ayah: DailyAyah
  hadith: DailyHadith
} = {
  story: {
    title: 'كيف صبر أيوب عليه السلام؟',
    minutes: 5,
    excerpt: 'حكاية عن نبيّ ابتُلي في جسده وماله وأهله، فصبر واحتسب حتى فرّج الله عنه.',
  },
  ayah: {
    surah: 'سورة البقرة',
    ayahRef: 'الآية 286',
    text: 'لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ',
  },
  hadith: {
    text: 'إنما الأعمال بالنيات، وإنما لكل امرئ ما نوى',
    source: 'رواه البخاري ومسلم',
  },
}

export interface JourneyItem {
  categorySlug: string
  title: string
  subtitle: string
  progress: number
}

export const continueJourney: JourneyItem[] = [
  {
    categorySlug: 'seerah',
    title: 'السيرة النبوية',
    subtitle: 'وصلت إلى: الهجرة إلى المدينة',
    progress: 45,
  },
  {
    categorySlug: 'quran',
    title: 'سورة الكهف',
    subtitle: 'وصلت إلى: الآية 30',
    progress: 28,
  },
]

export interface NavItem {
  label: string
  to: string
  icon: 'home' | 'grid' | 'search' | 'bookmark' | 'user'
}

export const bottomNavItems: NavItem[] = [
  { label: 'الرئيسية', to: '/app', icon: 'home' },
  { label: 'الأقسام', to: '/app/categories', icon: 'grid' },
  { label: 'البحث', to: '/app/search', icon: 'search' },
  { label: 'المحفوظات', to: '/app/saved', icon: 'bookmark' },
  { label: 'حسابي', to: '/app/profile', icon: 'user' },
]
