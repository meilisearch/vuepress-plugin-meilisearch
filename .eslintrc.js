module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true
  },
  extends: [
    'plugin:vue/essential',
    'standard',
    'plugin:vue/recommended'
  ],
  globals: {
    HOST_URL: 'readonly',
    API_KEY: 'readonly',
    INDEX_UID: 'readonly',
    MAX_SUGGESTIONS: 'readonly',
    CROP_LENGTH: 'readonly',
    HOT_KEYS: 'readonly',
    PLACEHOLDER: 'readonly',
    LAYOUT: 'readonly'
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018
  },
  plugins: [
    'vue'
  ],
  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }]
  }
}
