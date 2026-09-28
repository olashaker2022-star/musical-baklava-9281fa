# PLAN.md — حكاية | Hekaya product roadmap

Milestone 1 (done) built the branded product surface: the landing page and an explorable `/app`
shell (Home, Categories, category detail, and the 5-tab bottom navigation with placeholder tabs
for Search / Saved / Profile). Everything below is still ahead, broken into small, sequential,
independently shippable milestones. Each one names the Netlify primitive it should use — no
milestone should introduce an in-memory store, a local JSON "database", or a third-party DB.

## 2. Data model & content pipeline

- Design the Postgres schema (Netlify Database via `@netlify/database` + Drizzle, per the
  `netlify-database` skill) for: `categories`, `quran_surahs`, `quran_ayat`, `quran_ayah_groups`
  (the "ماذا يحدث هنا؟ / التفسير المبسط / ماذا نتعلم؟ / آيات مرتبطة" grouping), `hadiths`,
  `seerah_events`, `stories` (prophets/companions/sahabiyyat share a shape with a `type` column),
  `people` (companions & female companions profiles: من هو / قصته / أهم المواقف / ماذا نتعلم / مصادر),
  and a `sources` table every content row can reference (so "المصادر" is always traceable).
- Every content table gets a `review_status` (`sample` / `reviewed`) column so prototype rows
  stay visibly separate from vetted content as real content is added — this replaces the
  front-end-only `isSampleContent` flag from milestone 1.
- Write a seed script that loads real Quran text (e.g. Quran.com/Tanzil API) and leaves hadith,
  seerah, and story tables empty pending scholarly review, rather than inventing that content.

## 3. Quran reader

- Surah list + Juz navigation + search-within-Quran, backed by the schema from milestone 2.
- Reading view rendering Arabic Quran text (Amiri, `font-quran`) with each ayah group's
  "ماذا يحدث هنا؟ / التفسير المبسط / ماذا نتعلم؟ / آيات مرتبطة" panel visually separated from the
  Quran text itself.
- "احكيهالي" — select an ayah/passage and get a story-style explanation. The generation call
  (Netlify Function using AI Gateway, per `netlify-ai-gateway`) must be constrained to the
  approved tafsir/source rows already in the database, never free-invented text, and the response
  must visually tag which parts are Quran text vs. authentic narration vs. tafsir vs. simplified/
  AI-generated wording.

## 4. Seerah, Prophets, Companions, Sahabiyyat

- Chronological Seerah timeline (المولد → وفاة النبي ﷺ), each stop opening a standalone story
  screen, backed by `seerah_events`.
- Prophets' stories list + detail.
- Searchable Companions list and a separate "قصص الصحابيات" section, each profile following the
  fixed من هو؟ / قصته / أهم المواقف / ماذا نتعلم؟ / مصادر structure from `people` + `sources`.

## 5. Hadith

- "حديث اليوم" backed by real data, plus a hadith detail view: نص الحديث / شرح مبسط / السياق إذا
  ثابت / ماذا نتعلم؟ / المصدر / درجة الحديث. Never render a hadith without a `sources` row.

## 6. Global search

- One search surface across Quran, Hadith, stories, Seerah, Companions, Sahabiyyat, and topics,
  with categorized results. Start with Postgres full-text search (`tsvector`) over the milestone 2
  schema before considering a dedicated search service.

## 7. Accounts, bookmarks & progress

- Add auth (Netlify Identity or a custom auth flow — decide per the `netlify-identity` skill)
  since bookmarks/progress/notifications are per-user.
- "محفوظاتي": bookmark verses, stories, hadith, seerah entries, and people.
- "رحلتي": non-competitive per-category progress bars (Quran, Seerah, Prophets, Companions,
  Sahabiyyat), computed from reading history stored in Netlify Database.
- "خطتي اليومية": daily checklist (آية اليوم / قصة اليوم / حديث اليوم / ذكر الصباح / ذكر المساء)
  with visual progress, persisted per user per day.

## 8. اسأل حكاية (AI assistant)

- A retrieval-augmented assistant (Netlify Function + AI Gateway) that answers only from the
  milestone 2 content tables and their `sources`, clearly flags scholarly disagreement or
  uncertainty, and — for fiqh/ruling questions — explicitly states it is not a Mufti and points to
  trusted scholarly sources instead of issuing a personal fatwa.

## 9. Audio storytelling

- Audio player (play/pause, previous/next, progress bar, 0.75x–1.5x speed, download) for story
  narration. Store audio files as Netlify Blobs (per `netlify-blobs`) referenced from the `stories`
  table.

## 10. Notifications & settings

- Notification preferences (قصة اليوم / آية اليوم / حديث اليوم / أذكار الصباح / أذكار المساء) with
  custom times, stored per user.
- Profile/settings screen: progress, saved content, reading history, downloads, notifications,
  font size, dark mode, language, about, sources, privacy policy. Dark mode should extend the
  existing `@theme` tokens in `src/styles.css` with a dark palette rather than hardcoding colors
  per component.

## Sourcing & licensing note

No milestone should ship invented Quran verses, hadith, historical narration, or scholarly quotes.
Every religious claim needs a `sources` row before it ships to real users, and only public-domain,
properly licensed, or explicitly permitted material should be seeded — this is why milestone 2
keeps hadith/seerah/story tables empty until that review happens, even though the schema and UI
for them exist.
