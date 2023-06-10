const remarkConfig = {
  settings: {
    bullet: '-',
    listItemIndent: 'space',
    fences: true
  },
  plugins: [
    'remark-lint',
    'remark-preset-lint-consistent',
    'remark-preset-lint-recommended',
    ['remark-lint-list-item-indent', 'space'],
    'remark-frontmatter',
    [
      'remark-lint-frontmatter-schema',
      {
        schemas: {
          './schemas/post.yaml': ['./_posts/*.md']
        }
      }
    ]
  ]
}

export default remarkConfig
