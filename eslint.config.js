import antfu from '@antfu/eslint-config';

export default antfu(
  {
    // Enable stylistic formatting rules
    // stylistic: true,

    // Or customize the stylistic rules
    stylistic: {
      indent: 2, // 4, or 'tab'
      quotes: 'single', // or 'double'
      semi: true,
    },

    // TypeScript and Vue are auto-detected, you can also explicitly enable them:
    typescript: true,
    vue: true,

    // Disable jsonc and yaml support
    jsonc: true,

    // `.eslintignore` is no longer supported in Flat config, use `ignores` instead
    ignores: [
      './fixtures',
      './node_modules',
      // ...globs
    ],
  },
  {
    files: ['./**.ts', '**/*.ts'],
    rules: {
      'no-console': 'off',
      'node/prefer-global/process': 'off',
      'unused-imports/no-unused-vars': 'off',
    },
  },
  // {
  //   files: [],
  //   rules: {},
  // },
);
