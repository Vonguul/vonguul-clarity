import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    heroImage: z.string().optional(),
    category: z.string(),
    keywords: z.array(z.string()).default([]),
    // Genuinely free resources — no commission, no tag. Always show these
    // before any monetized product so the reader isn't funneled straight
    // to a purchase.
    freeResources: z
      .array(
        z.object({
          name: z.string(),
          url: z.string(),
          note: z.string().optional(),
        })
      )
      .default([]),
    // Real Amazon products, tagged via AffiliateLink.
    products: z
      .array(
        z.object({
          name: z.string(),
          asin: z.string(),
          note: z.string().optional(),
          image: z.string().optional(),
        })
      )
      .default([]),
  }),
});

export const collections = { articles };
