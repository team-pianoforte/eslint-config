const namingConventions = require('@zakuro9715/eslint-config-typescript/naming-conventions')

module.exports = {
  extends: [
    '@zakuro9715',
    '@zakuro9715/eslint-config-typescript',
  ],
  overrides: [
    {
      files: ['**/*.vue'],
      extends: [
        '@vue/typescript',
        '@zakuro9715/vue',
        '@zakuro9715/eslint-config-typescript/ts',
      ],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: 'tsconfig.eslint.json',
      },
      rules: {
        '@typescript-eslint/naming-convention': ['error', ...namingConventions, {
          selector: 'property',
          format: ['camelCase', 'PascalCase'], // For components
        }],
        '@typescript-eslint/restrict-template-expressions': 'off',
        'vue/require-direct-export': 'off', // https://github.com/vuejs/eslint-plugin-vue/issues/907
      },
    },
  ],
}
