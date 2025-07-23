import {ComputedFields, makeSource, defineDocumentType} from 'contentlayer2/source-files';
import RawPlugin from 'esbuild-plugin-raw';

const computedFields: ComputedFields = {
  slugAsParams: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
  },
  url: {type: 'string', resolve: (doc) => `/${doc._raw.flattenedPath}`},
};

export const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: `docs/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {type: 'string', required: true},
    description: {type: 'string', required: false},
    date: {type: 'date', required: false},
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Doc],
  mdx: {
    esbuildOptions(options) {
      options.plugins ||= [];
      options.plugins.unshift(RawPlugin());

      return options;
    }
  }
});
