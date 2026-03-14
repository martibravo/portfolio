import { config, collection, fields } from '@keystatic/core';

const workCollection = (label: string, dirName: string) =>
  collection({
    label,
    slugField: 'title',
    path: `src/content/${dirName}/*`,
    format: { contentField: 'content' },
    schema: {
      title: fields.slug({ name: { label: 'Title' } }),
      date: fields.date({ label: 'Date' }),
      description: fields.text({ label: 'Description', multiline: true }),
      tags: fields.array(fields.text({ label: 'Tag' }), { label: 'Tags' }),
      cover: fields.image({
        label: 'Cover image',
        directory: `public/images/${dirName}`,
        publicPath: `/images/${dirName}/`,
      }),
      featured: fields.checkbox({ label: 'Featured', defaultValue: false }),
      content: fields.mdx({ label: 'Content' }),
    },
  });

export default config({
  storage: {
    kind: 'github',
    repo: 'martibravo/portfolio',
  },
  ui: {
    brand: { name: 'universitat.studio' },
  },
  collections: {
    'graphic-design': workCollection('Graphic Design', 'graphic-design'),
    photography: workCollection('Photography', 'photography'),
    art: workCollection('Art', 'art'),
    content: workCollection('Content', 'content'),
  },
});
