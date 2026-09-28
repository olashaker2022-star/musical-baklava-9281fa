import { GoogleGenAI } from '@google/genai'
import { writeFile } from 'node:fs/promises'
import path from 'node:path'

const ai = new GoogleGenAI({
  apiKey: process.env.NETLIFY_AI_GATEWAY_KEY,
  httpOptions: {
    baseUrl: process.env.NETLIFY_AI_GATEWAY_BASE_URL?.replace(/\/$/, ''),
  },
})

const OUT_DIR = path.join(process.cwd(), 'public', 'img')

const jobs = [
  {
    file: 'logo-emblem.png',
    prompt:
      'A minimal, elegant app logo emblem for an Islamic educational app called "Hekaya". A single clean crescent moon gently cradling a small open book / geometric leaf motif, in flat vector style, one solid deep green (#285C4D) shape with thin gold (#B99A5B) outline accents, centered on a plain soft cream (#F8F3E8) square background. No text, no letters, no arabic script, no photorealism, no gradients, no shadows, no 3D, no clutter — a modern, premium, calm minimalist icon suitable for a small app icon.',
  },
  {
    file: 'pattern-geometric.png',
    prompt:
      'A subtle, seamless-look Islamic geometric pattern texture, thin line eight-point star and interlocking polygon motif, very light and minimal, drawn in soft warm beige (#E8D8BE) lines on a soft cream (#F8F3E8) background, low contrast, elegant and modern, no photorealism, no text, flat vector line art, evenly tiled across the whole square frame, calm and premium feeling suitable as a faint decorative background texture.',
  },
  {
    file: 'hero-illustration.png',
    prompt:
      'A calm, modern, minimal flat-vector illustration for an Islamic app hero banner: a peaceful mosque silhouette with a single slender minaret and a dome, beneath a large crescent moon and a few small stars, soft rolling hills, one or two simple leaf branch accents in the corner. Color palette only: deep green #285C4D silhouette shapes, warm beige #E8D8BE and gold #B99A5B accents, soft cream #F8F3E8 background sky. Flat, clean, premium, peaceful mood, no text, no people, no photorealism, generous empty sky space at the top for overlay text.',
  },
]

for (const job of jobs) {
  console.log(`Generating ${job.file}...`)
  const response = await ai.models.generateContent({
    model: 'gemini-3.1-flash-image',
    contents: job.prompt,
  })
  const parts = response.candidates?.[0]?.content?.parts ?? []
  const imagePart = parts.find((p) => p.inlineData)
  if (!imagePart?.inlineData) {
    console.error(`No image returned for ${job.file}`, JSON.stringify(response, null, 2).slice(0, 500))
    continue
  }
  const buffer = Buffer.from(imagePart.inlineData.data, 'base64')
  await writeFile(path.join(OUT_DIR, job.file), buffer)
  console.log(`Saved ${job.file} (${buffer.length} bytes)`)
}
