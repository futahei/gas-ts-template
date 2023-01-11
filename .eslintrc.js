module.exports = {
  env: {
    browser: true,
    es2021: true,
    'googleappsscript/googleappsscript': true,
  },
  extends: 'standard-with-typescript',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['googleappsscript'],
  rules: {},
}
