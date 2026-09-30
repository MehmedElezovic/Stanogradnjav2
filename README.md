# Stanogradnja website

Static site for Stanogradnja d.o.o. Sarajevo, built with Astro and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
```

## Deploy (Vercel or Netlify)

1. Push this folder to a GitHub repo.
2. Import the repo in Vercel or Netlify. The framework (Astro) is detected automatically.
   Build command: `npm run build`, output folder: `dist`.
3. Point the domain (stanogradnja.ba) to the new host in the DNS settings.

## Where to edit content

| What | File |
|---|---|
| Contact info, banks and account numbers, ID/PDV, working hours, form endpoint | `src/data/site.ts` |
| All 80 flats (size, floor, type, status) | `src/data/stanovi.json` |
| Finished projects | `src/data/projekti.json` |
| Team | `team` in `src/data/site.ts` |

**When a flat sells:** change its `"status"` from `"dostupan"` to `"prodato"` in `stanovi.json`.
The counters, progress bar, flat cards, table and contact form options all update on the next build.

## Images

Drop images into `public/` using the names below. Anything missing shows a placeholder,
so you can add images one at a time with no code changes.

| Image | Path |
|---|---|
| Homepage hero | `public/slike/bella-vita/hero.jpg` |
| Project page render | `public/slike/bella-vita/render.jpg` |
| Gallery | `public/slike/bella-vita/galerija-1.jpg` … `galerija-4.jpg`, `enterijer.jpg` |
| Floor plans | `public/tlocrti/A-30.jpg`, `B-39.jpg`, … (`.jpg`, `.png` or `.webp`) |
| Finished projects | `public/slike/projekti/<slug>.jpg` (slug from `projekti.json`, e.g. `vogosca.jpg`) |
| About page | `public/slike/o-nama-hero.jpg`, `public/slike/o-nama.jpg` (homepage) |
| Team | `public/slike/tim/1.jpg` … `4.jpg` |

Recommended: JPG, max ~2400px wide, under 500 KB each.

## Contact form

By default the form opens the visitor's e-mail app with the message filled in.
To receive submissions directly, create a free form at Formspree or Web3Forms and put the
endpoint URL in `formEndpoint` in `src/data/site.ts`.

## Still needed from the client

- Bank account numbers, ID and PDV numbers, working hours
- Years, flat counts and missing locations for finished projects
- Team names and roles
- Distances on the location block (`[x min]` in `src/pages/aktuelni-projekat.astro`)
