module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  ignorePatterns: ['node_modules/'],
  rules: {
    'no-unused-vars': 'off',
    'no-multiple-empty-lines': [2, { max: 2 }]
  }
}
