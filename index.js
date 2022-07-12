const path = require('path')

const { constructClientAgents } = require('./client_agents')

module.exports = (options) => {
  return {
    alias: {
      '@SearchBox': path.resolve(__dirname, 'MeiliSearchBox.vue')
    },
    define: {
      HOST_URL: options.hostUrl || null,
      API_KEY: options.apiKey || null,
      INDEX_UID: options.indexUid || null,
      PLACEHOLDER: options.placeholder || null,
      MAX_SUGGESTIONS: options.maxSuggestions || null,
      HOT_KEYS: options.hotKeys || ['s', '/'],
      CROP_LENGTH: options.cropLength || 30,
      LAYOUT: options.layout || 'columns',
      DEBUG: options.debug || false,
      ENABLE_DARK_MODE: options.enableDarkMode || false,
      CLIENT_AGENTS: constructClientAgents(options.clientAgents) || []
    }
  }
}
