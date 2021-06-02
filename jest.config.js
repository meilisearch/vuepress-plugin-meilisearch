module.exports = {
  rootDir: '.',
  testMatch: ['<rootDir>/tests/**/*.js?(x)'],
  preset: '@vue/cli-plugin-unit-jest',
  moduleNameMapper: {
    'docs-searchbar.js': '<rootDir>/node_modules/docs-searchbar.js/dist/cdn/docs-searchbar.js'
  },
  globals: {
    HOST_URL: 'https://e10b17e6.getmeili.com',
    API_KEY: 'b4ff9313299e65ce4e259d3aa59730d2829c9a6805aa15b83cdbd63b20563155',
    INDEX_UID: 'docs',
    PLACEHOLDER: null,
    MAX_SUGGESTIONS: null,
    HOT_KEYS: ['s', '/'],
    CROP_LENGTH: 30
  }
}
