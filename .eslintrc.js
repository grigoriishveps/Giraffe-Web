module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2015,
    ecmaFeatures: {
      jsx: true // JSX-compatible
    }
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true
  },
  ignorePatterns: ['.eslintrc.js', '.babelrc.js', 'webpack.config.js'],
  rules: {
    'prettier/prettier': ['error', { semi: false }],
    '@typescript-eslint/padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: ['let', 'const'],
        next: '*'
      },
      {
        blankLine: 'always',
        prev: '*',
        next: ['let', 'const']
      },
      {
        blankLine: 'any',
        prev: ['singleline-let', 'singleline-const'],
        next: ['singleline-let', 'singleline-const']
      },
      {
        blankLine: 'always',
        prev: '*',
        next: [
          'if',
          'block',
          'return',
          'multiline-block-like',
          'multiline-expression'
        ]
      },
      {
        blankLine: 'always',
        prev: ['block-like', 'multiline-block-like', 'multiline-expression'],
        next: '*'
      }
    ],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off'
  }
}
