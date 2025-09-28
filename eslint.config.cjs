// eslint.config.cjs — CJS repo, flat config
const path = require('node:path');
const prettierConfig = require('./prettier.config.cjs');
const markdownPlugin = require('eslint-plugin-markdown');
const prettierPlugin = require('eslint-plugin-prettier');

// Require shared base config — MUST export an array
const baseConfig = require(path.resolve(__dirname, 'config/eslint.base.cjs'));

// Require repo‑specific overrides — MUST export an array
const localOverrides = require(
  path.resolve(__dirname, 'eslint.config-overrides.cjs')
);

module.exports = [
  // 1. Treat config files as Node CJS
  {
    files: [
      'eslint.config.cjs',
      'eslint.config-overrides.cjs',
      'config/**/*.cjs',
      'prettier.config.cjs',
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      globals: {
        require: 'readonly',
        module: 'readonly',
        __dirname: 'readonly',
        process: 'readonly',
      },
    },
  },

  // 2. Shared base config
  ...baseConfig,

  // 3. Markdown override — un/comment entire block to en/disable eslint markdown plugin
  // {
  //   files: ['**/*.md'],
  //   plugins: {
  //     markdown: markdownPlugin,
  //     prettier: prettierPlugin,
  //   },
  //   processor: 'markdown/markdown',
  //   rules: {
  //     'prettier/prettier': ['warn', prettierConfig],
  //     'no-undef': 'off',
  //     'no-unused-vars': 'off',
  //   },
  // },

  // 4. Repo‑specific overrides
  ...localOverrides,
];
