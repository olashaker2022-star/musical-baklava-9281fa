# AGENTS.md

This document orients AI agents (and humans) working on **حكاية | Hekaya**, an Arabic-first,
RTL Islamic educational app.

## What this project is right now

This is a large, multi-milestone product. The current codebase is **milestone 1**: the branded,
navigable product surface — a marketing landing page plus a working in-browser app shell with a
real bottom-navigation flow (Home, Categories, and a category detail view), all using clearly
marked sample content. It is not yet backed by a database, auth, or AI features.

**Read `PLAN.md` before starting new work.** It breaks the rest of the request (Quran reader,
Seerah timeline, Companions/Sahabiyyat profiles, Hadith, global search, the "اسأل حكاية" AI
assistant, "احكيهالي" story feature, audio player, bookmarks, daily plan, notifications, auth) into
sequential milestones with the persistence/storage approach for each.

## Tech stack

| Layer | Technology |
|---|---|
| Framework | TanStack Start (React 19, file-based routing via TanStack Router) |
| Build | Vite 7 |
| Styling | Tailwind CSS v4 (CSS-first `@theme` tokens, no `tailwind.config.js`) |
| Icons | lucide-react |
| Fonts | Cairo (display/UI), Tajawal (body/UI), Amiri (Quran text) — loaded via Google Fonts `<link>` in `__root.tsx` |
| Images | Generated with Gemini image model via Netlify AI Gateway, served through Netlify Image CDN |
| Deployment | Netlify |

## Directory structure

```
public/img/                        Generated brand imagery (logo emblem, geometric pattern, hero illustration)
scripts/gen-images.mjs             One-off script used to generate public/img assets via Netlify AI Gateway (Gemini image model). Re-run with `npm run gen-images` only if assets need regenerating.
src/
  data/hekaya.ts                   ALL sample/prototype content lives here (categories, daily ayah/hadith/story, journey progress, bottom-nav config). Clearly commented as non-authoritative placeholder content — see "Content rules" below.
  components/
    icon-map.tsx                   Maps the IconName union from data/hekaya.ts to lucide-react icons
    SampleBadge.tsx                Small "محتوى تجريبي" pill shown wherever placeholder religious content is displayed
    app/                           Components used inside the /app screens (AppShell = phone-frame chrome + BottomNav, AppTopBar, DailyCard, BottomNav, ComingSoonScreen)
    landing/                       Components used only on the marketing landing page (PhoneMockup)
  routes/
    __root.tsx                     Document shell: lang="ar" dir="rtl", fonts, meta
    index.tsx                      Marketing landing page ("/") — introduces the app and links into /app
    app/route.tsx                  Layout for all in-app screens: renders AppShell (phone-frame on desktop, full-bleed on mobile) + BottomNav
    app/index.tsx                  Home screen ("/app")
    app/categories/index.tsx       Categories grid ("/app/categories")
    app/categories/$slug.tsx       Category detail / teaser screen ("/app/categories/:slug")
    app/search.tsx                 "قريباً" stub for the search tab (bottom nav must have 5 working destinations)
    app/saved.tsx                  "قريباً" stub for the saved/bookmarks tab
    app/profile.tsx                "قريباً" stub for the profile/settings tab
```

## Conventions

- **RTL by default.** `<html dir="rtl" lang="ar">` is set once in `__root.tsx`. Do not add manual
  `dir="ltr"` overrides unless embedding non-Arabic UI. Directional icons follow Arabic reading
  conventions already used in the codebase: `ChevronRight` = "back" (toward the start of the
  content), `ChevronLeft` = "forward/continue".
- **Colors and type come from `src/styles.css`'s `@theme` block** (`hekaya-green`, `hekaya-cream`,
  `hekaya-beige`, `hekaya-gold`, `hekaya-text`, `hekaya-white`, plus `-dark`/`-light` variants) —
  use the generated `bg-hekaya-*` / `text-hekaya-*` / `border-hekaya-*` utilities rather than raw
  hex values. `font-display` (Cairo) is for headings/labels, the default body font is Tajawal, and
  `font-quran` (Amiri) must be used for any actual Quran text so it stays visually distinct from
  UI text and explanations.
- **Path alias `@/*`** points at `src/*` (see `tsconfig.json`); use it instead of relative `../../`.
- **Images**: reference generated assets through `/.netlify/images?url=/img/<file>&w=<width>&fm=webp`,
  never the raw file in `public/img/`, so pages don't ship full-resolution source images.

## Content rules (do not relax these)

This is a religious educational app, so content correctness matters more than usual:

- Everything in `src/data/hekaya.ts` is **prototype content** for UI/UX purposes, explicitly
  flagged with `isSampleContent = true` and a `SampleBadge` in the UI wherever it renders. It has
  not been reviewed for religious accuracy.
- Before any real user sees this app, sample Quran/hadith/seerah/story text must be replaced with
  content sourced from reliable references (e.g. Quran.com API, sunnah.com, scholar-reviewed
  seerah/story sources) with a citation kept alongside each piece of content.
- Any future feature that lets an AI generate or paraphrase religious content must keep Quran text,
  hadith text, tafsir, historical narration, and simplified/AI-generated explanation visually and
  structurally separate — never blend them into one undifferentiated block. See the "اسأل حكاية"
  and "احكيهالي" milestones in `PLAN.md` for how this constraint carries into the AI features.

## Commands

```bash
npm run dev          # start the dev server (also usable via `netlify dev`)
npm run build        # production build (handled by the deploy pipeline — don't run manually in an agent session)
npm run gen-images   # regenerate public/img/* via Netlify AI Gateway (only if assets need to change)
```
