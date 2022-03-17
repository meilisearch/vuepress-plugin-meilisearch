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
        hostUrl: 'http://localhost:7700',
        apiKey:
          'masterKey',
        indexUid: 'docs',
        debug: true,
        enableDarkMode: true
        // "maxSuggestions": 10,
        // placeholder: 'Search as you type...'
      }
    ]
  ]
}
