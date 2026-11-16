# Nanak Fabricators Limited — website

Marketing site for Nanak Fabricators Ltd., the truck body fabricators and
accident repair workshop at Khim Business Park, Athi River, Kenya. Truck
bodies, tankers, trailers and conversions, plus panel beating, spray painting
and insurance-ready accident repairs.

Built with [Astro](https://astro.build). Static output, no UI framework: the
interactions (menu, filters, gallery, sliders, accordions) are small vanilla
TypeScript modules.

## Getting started

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
npm run preview  # serve the build
```

## Pages

| Route | What it is |
| --- | --- |
| `/` | hero, about, services, selected work, testimonials, commitments, accident repair, team, FAQ |
| `/about-us` | story, vision and mission, milestones, beliefs, capability, team |
| `/services` | the ten workshop services, accident-repair before/after, quote CTA |
| `/work` | every body type with filter tabs and search |
| `/work/[slug]` | one page per file in `src/content/work/` |
| `/blog` | workshop notes and buying advice |
| `/blog/[slug]` | one page per file in `src/content/blog/` |
| `/contact` | workshop card, direct contacts, hours, FAQ |
| `/terms-conditions` | terms |
| `/404` | not found |

The contact form and footer appear on every page except the 404.

## Editing content

- `src/content/site.json` holds most copy: navigation, footer, home sections,
  services, work labels, team, testimonials, FAQs, offices, about page, terms
  and form labels. Each top-level `id` is one block; components read it with
  `site('id')` from `src/lib/site.ts`.
- `src/content/work/*.md`: one file per body type / repair. Frontmatter holds
  the chassis, capacity, applications, highlights, specs and gallery; the
  Markdown body is the description. The filename is the URL.
- `src/content/blog/*.md`: one file per article (`order`, `title`, `date`,
  `category`, `image`). The filename is the URL.
- Schemas for both collections live in `src/content.config.ts`, so a typo in a
  field fails the build instead of breaking a page.
- Images live in `public/assets/site/`; the hero loop is
  `public/assets/hero-yard.mp4` with its poster beside it.
- Colours, type scale and easings are custom properties in
  `src/styles/tokens.css`; shared styles are in `src/styles/global.css`. Each
  component keeps its own styles.

## Project structure

```
src/
  components/        Nav, Footer, Logo, Btn, Icon, BeforeAfterSlider
    sections/        one component per page section
    ui/              cards, FAQ rows, question tiles
  content/           site.json, work/, blog/
  icons/             SVG icons
  layouts/Base.astro head, nav, footer, scripts, JSON-LD
  pages/             routes
  scripts/           one module per behaviour, wired in entry.ts
  styles/            tokens.css, global.css
```

## Environment variables

All optional and off by default (see `.env.example`).

| Variable | Effect |
| --- | --- |
| `PUBLIC_FORM_ENDPOINT` | URL the contact form posts to (Formspree, Basin, ...). Unset, the form only shows its own states and sends nothing. |
| `PUBLIC_VERCEL_ANALYTICS` | `true` loads Vercel Web Analytics and Speed Insights |

## Before launch

- Set the real domain in `astro.config.mjs` (`site`). It is currently a
  placeholder and drives canonical URLs, the sitemap and Open Graph tags.
- Point `PUBLIC_FORM_ENDPOINT` at a form service, or wire the form to the
  workshop inbox.
- Confirm the opening hours and phone numbers in `src/content/site.json`
  (they currently follow the brochure).
- Add real social profiles, or leave the `socials` array empty; the footer and
  menu hide that column when it is empty.

## Deploy

`npm run build` produces plain static files in `dist/`, so any static host
works. On Vercel or Netlify, import the repo and keep the defaults (build
`npm run build`, output `dist`).

## License and credits

MIT, see `LICENSE`. The design is adapted from the Marby theme by
[Startfrom](https://startfrom.co). Fonts: Montserrat (The Montserrat Project
Authors), Urbanist (The Urbanist Project Authors) and Onest (The Onest Project
Authors), all under the SIL Open Font License 1.1.
