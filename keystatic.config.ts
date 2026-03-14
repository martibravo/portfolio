import { config, collection, fields } from '@keystatic/core';
import { block, wrapper } from '@keystatic/core/content-components';

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
      content: fields.mdx({
        label: 'Content',
        components: {
          Figure: block({
            label: 'Figure',
            schema: {
              src: fields.image({
                label: 'Image',
                directory: `public/images/${dirName}`,
                publicPath: `/images/${dirName}/`,
              }),
              alt: fields.text({ label: 'Alt text' }),
              caption: fields.text({ label: 'Caption' }),
            },
          }),
          TwoCol: wrapper({
            label: 'Two Columns',
            schema: {},
          }),
          ThreeCol: wrapper({
            label: 'Three Columns',
            schema: {},
          }),
          ImageGrid: block({
            label: 'Image Grid',
            schema: {
              cols: fields.select({
                label: 'Columns',
                options: [
                  { label: '2', value: '2' },
                  { label: '3', value: '3' },
                  { label: '4', value: '4' },
                ],
                defaultValue: '3',
              }),
              images: fields.array(
                fields.object({
                  src: fields.image({
                    label: 'Image',
                    directory: `public/images/${dirName}`,
                    publicPath: `/images/${dirName}/`,
                  }),
                  alt: fields.text({ label: 'Alt text' }),
                  caption: fields.text({ label: 'Caption' }),
                }),
                {
                  label: 'Images',
                  itemLabel: (props) => props.fields.alt.value || 'Image',
                }
              ),
            },
          }),
        },
      }),
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
