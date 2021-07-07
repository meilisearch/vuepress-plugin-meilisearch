module.exports = {
  title: 'Welcome to the Playground!',
  theme: 'default-prefers-color-scheme',
  themeConfig: {
    prefersTheme: 'dark',
    nav: [
      { text: 'Learn', link: '/learn/' },
      { text: 'Create', link: '/create/how_to/' },
      { text: 'Reference', link: '/reference/' }
    ]
  },
  plugins: [
    [
      require('../../index.js'),
      {
        // Testing with MeiliSearch documentation content (https://docs.meilisearch.com/)
        hostUrl: 'https://docs-search-bar.meilisearch.com',
        apiKey:
          'd79226ae89f29d4dadba8d0c30c240e435f584fb83a7ae573b13eb62edec35cd',
        indexUid: 'docs',
        debug: true,
        enableDarkMode: true
        // "maxSuggestions": 10,
        // placeholder: 'Search as you type...'
      }
    ]
  ]
}
