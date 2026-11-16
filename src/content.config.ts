import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

// One Markdown file per completed body. The body is the description; specs,
// highlights and the photo gallery are frontmatter.
const work = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/work', generateId: ({ entry }) => entry.replace(/\.md$/, '') }),
  schema: z.object({
    name: z.string(),
    number: z.string(),
    category: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    secondaryImage: z.string(),
    secondaryImageAlt: z.string(),
    chassis: z.string(),
    bodyType: z.string(),
    capacity: z.string(),
    applications: z.string(),
    completed: z.string(),
    finish: z.string().default('2-pack polyurethane'),
    highlights: z.array(z.string()).max(6),
    specs: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
    gallery: z.array(z.object({ src: z.string(), alt: z.string(), caption: z.string().optional() })).default([]),
    beforeImage: z.string().optional(),
    afterImage: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

// One Markdown file per article. The filename is the URL slug.
const blog = defineCollection({
  // Filenames become URLs verbatim, so a slug like `rent-vs.-flip` keeps its dot.
  loader: glob({ pattern: '*.md', base: './src/content/blog', generateId: ({ entry }) => entry.replace(/\.md$/, '') }),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    image: z.string(),
    imageAlt: z.string(),
  }),
});

// Everything repeated across pages: navigation, footer, FAQs, team,
// testimonials, services, features, offices, milestones, beliefs.
const site = defineCollection({
  loader: file('./src/content/site.json'),
  schema: z.any(),
});

export const collections = { work, blog, site };
