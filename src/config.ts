export const SITE = {
  name: 'Universitat Studio',
  description: 'Graphic design, photography, art & web development studio. Based in Barcelona.',
  socials: {
    twitter:   'https://twitter.com/martibrav0',
    instagram: 'https://instagram.com/martibrav0',
    github:    'https://github.com/martibravo',
    unsplash:  'https://unsplash.com/@martibravo',
  },
};

export const CATEGORIES = [
  { id: 'graphic-design', label: 'Graphic Design' },
  { id: 'photography',    label: 'Photography'    },
  { id: 'art',            label: 'Art'            },
  { id: 'content',        label: 'Content'        },
] as const;

export type CategoryId = typeof CATEGORIES[number]['id'];
