module.exports = {
  root: true,

  parserOptions: {
    ecmaVersion: 2018,
  },

  env: {
    es6: true
  },

  plugins: ['@paycertify'],

  extends: [
    'eslint:recommended',
    require.resolve('./-private/eslint/es6.js'),
    require.resolve('./-private/eslint/node.js'),
    require.resolve('./-private/eslint/variables.js'),
    require.resolve('./-private/eslint/best-practices.js'),
    require.resolve('./-private/eslint/possible-errors.js'),
    require.resolve('./-private/eslint/stylistic-issues.js')
  ],

  overrides: [
    // JSON files
    {
      plugins: ['json'],

      extends: ['plugin:json/recommended'],

      files: [
        '**/*.json'
      ],

      rules: Object.assign({}, require('eslint-plugin-json').configs.recommended.rules, {})
    }
  ]
};