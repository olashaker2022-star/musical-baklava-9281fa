# حكاية | Hekaya

An Arabic-first, fully RTL mobile-web app for learning Islam through simple, warm storytelling:
the Quran and its context, the Seerah of the Prophet ﷺ, stories of the Prophets, the Companions
and the female Companions (Sahabiyyat), and daily Hadith — with a calm, modern visual identity
(deep green, warm cream/beige, gold accents).

## What's live in this milestone

This is a large, multi-screen product, so it's being built in stages. This first stage delivers
the branded, clickable product surface:

- **Landing page** (`/`) introducing the app, its purpose, and its core sections.
- **Home** (`/app`) — daily greeting, "قصة اليوم", "آية اليوم", "حديث اليوم", and "استكمل رحلتك".
- **Categories** (`/app/categories`) — all 9 content sections (Quran, Seerah, Prophets,
  Companions, Female Companions, Hadith, Thikr, Islamic figures, Events) with a detail/teaser
  screen for each.
- A working 5-item bottom navigation bar (الرئيسية / الأقسام / البحث / المحفوظات / حسابي), with
  the remaining three tabs shown as clearly labeled "قريباً" placeholders so the navigation is
  fully explorable end to end.

All religious text shown right now (sample ayah, hadith, story excerpts) is **placeholder content
for design purposes only**, marked with a "محتوى تجريبي" badge — see the Content rules section of
`AGENTS.md` and the roadmap in `PLAN.md` for how real, sourced content gets added.

## Tech stack

- **TanStack Start** (React 19 + TanStack Router, file-based routing) on **Vite 7**
- **Tailwind CSS v4** with a custom Islamic color/typography theme (Cairo, Tajawal, Amiri fonts)
- **lucide-react** icons
- Brand imagery generated via a Gemini image model through **Netlify AI Gateway**, served through
  **Netlify Image CDN**
- Deployed on **Netlify**

## Running locally

```bash
npm install
npm run dev
```

This starts the Vite dev server on port 3000. To run with full Netlify platform emulation
(functions, image CDN, etc.) use the Netlify CLI instead:

```bash
netlify dev
```

## What's next

See `PLAN.md` for the full roadmap: the real Quran reader with tafsir, the Seerah timeline,
searchable Companion/Sahabiyyat profiles, daily Hadith with sourcing, global search, bookmarks and
progress tracking, the "اسأل حكاية" AI assistant, the "احكيهالي" story feature, the audio player,
notifications, and accounts — each scoped as its own milestone with the Netlify primitives
(database, auth, functions) it needs.
