const namingConventions = require('@pianoforte/eslint-config-typescript/naming-conventions')

module.exports = {
  extends: [
    '@pianoforte',
    '@vue/typescript',
    '@pianoforte/vue',
    '@pianoforte/typescript',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: 'tsconfig.eslint.json',
  },
  overrides: [
    {
      files: ['**/*.vue'],
      rules: {
        '@typescript-eslint/naming-convention': ['error', ...namingConventions, {
          selector: 'property',
          format: ['camelCase', 'PascalCase'], // For components
        }],
      },
    },
  ],
}
