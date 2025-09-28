// prettier.base.cjs
/** @type {import("prettier").Config} */
const base = {
  semi: true,
  singleQuote: true,
  trailingComma: 'es5',
  printWidth: 80,
  htmlWhitespaceSensitivity: 'ignore',
  overrides: [
    {
      files: '**/*.html',
      options: {
        singleAttributePerLine: false,
        bracketSameLine: true,
        parser: 'html',
      },
    },
  ],
};

module.exports = base;
