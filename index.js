const path = require('path')

module.exports = (options) => {
  console.log('Vuepress-meilisearch-plugin is starting...');
  console.log(options)
  // console.log(__dirname)
  // console.log(path)
  return {
    alias: {
      '@SearchBox': path.resolve(__dirname, 'MeiliSearchBox.vue')
    },
    define: {
      HOST_URL: options.hostUrl || null,
      API_KEY: options.apiKey || null,
      INDEX_UID: options.indexUid || null
      // crop
      // max suggestion
      // keyshots
    }
  }
}
