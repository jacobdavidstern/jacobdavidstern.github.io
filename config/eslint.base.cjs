// ./config/eslint.base.cjs — Flat Config fragment, CJS-safe, ESM-safe
const path = require('node:path');
const js = require('@eslint/js');
const importPlugin = require('eslint-plugin-import');
const prettierPlugin = require('eslint-plugin-prettier');
const eslintConfigPrettier = require('eslint-config-prettier');
const markdownPlugin = require('eslint-plugin-markdown');
const globals = require('globals'); // modern env globals

// Absolute path to Prettier config in repo root
const prettierConfigPath = path.resolve(__dirname, '../prettier.config.cjs');
const prettierConfig = require(prettierConfigPath);

module.exports = [
  // 1. Ignore build artifacts and dependencies
  { ignores: ['dist/', 'node_modules/'] },

  // 2. Base ESLint recommended rules
  js.configs.recommended,

  // 3. Disable ESLint rules that conflict with Prettier
  eslintConfigPrettier,

  // 4. Main source files
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module', // overridden in CJS repo config if needed
      globals: {
        ...globals.browser,
        ...globals.node,
        console: 'readonly',
      },
    },
    plugins: {
      prettier: prettierPlugin,
      import: importPlugin,
      markdown: markdownPlugin, // registered but unused unless override is added
    },
    rules: {
      // Enforce Prettier formatting using your Prettier config
      // 'prettier/prettier': ['warn', prettierConfig],
      'prettier/prettier': 'error',

      // Example ESLint rules
      'comma-dangle': 'off',
      quotes: 'off',
      'import/order': [
        'warn',
        {
          groups: [['builtin', 'external', 'internal']],
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },

  // 5. (Optional) Markdown override can be added in repo config when ready
  // {
  //   files: ['**/*.md'],
  //   processor: 'markdown/markdown',
  //   rules: {
  //     'prettier/prettier': ['warn', prettierConfig],
  //     'no-undef': 'off',
  //     'no-unused-vars': 'off',
  //   },
  // },
];
