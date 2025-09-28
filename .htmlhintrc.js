// .htmlhintrc.js

module.exports = {
  rules: {
    // Document structure
    'doctype-html5': false,
    'html-lang-require': true,
    'title-require': true,

    // Accessibility
    'alt-require': true,

    // Best practices
    'img-require-alt': true,
    'href-req': true,
    'attr-no-duplication': true,
    'tagname-lowercase': true,
    'tag-self-close': false, // HTML5 void elements don't need self-close
    'spec-char-escape': true,
    'tag-no-obsolete': true,

    // Style relaxations
    'attr-lowercase': false,
    'attr-value-double-quotes': false,
    'tag-name-match': true,

    // Codecademy
    'attr-value-not-empty': false, // Allows empty string values
  },
};
