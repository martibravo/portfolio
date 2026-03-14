import { defineCollection, z } from 'astro:content';

const workSchema = z.object({
  title:       z.string(),
  date:        z.coerce.date(),
  description: z.string().optional(),
  tags:        z.array(z.string()).default([]),
  cover:       z.string().optional(),
  featured:    z.boolean().default(false),
});

export const collections = {
  'graphic-design': defineCollection({ type: 'content', schema: workSchema }),
  'photography':    defineCollection({ type: 'content', schema: workSchema }),
  'art':            defineCollection({ type: 'content', schema: workSchema }),
  'content':        defineCollection({ type: 'content', schema: workSchema }),
};
