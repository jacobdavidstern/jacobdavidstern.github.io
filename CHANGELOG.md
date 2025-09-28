# Changelog

All notable changes to this project will be documented in this file.

Based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [20250827]

### Added

- Multi‑file Prettier configuration:
  - Base config: `prettier.base.cjs` — shared formatting rules
  - Main config: `prettier.config.js` — imports base config
  - Validation scripts in `package.json`:
    - `prettier:testfile` — verify Prettier config resolution
    - `prettier:force` — force‑apply formatting to a test file
    - `prettier:checkfile` — check formatting on a single file
    - `prettier:checkall` — check formatting across the repo
    - `prettier:validate` — run all Prettier tests
    - `eslint:checkfile — lint a single file

- Multi‑file ESLint configuration:
  - Base config: `eslint.base.cjs` — core linting rules
  - Overrides: `eslint.config-overrides.cjs` — targeted scenarios
  - Main config: `eslint.config.js` — imports base and overrides

## [20250904]

### Added

- ESLint configuration:
  - Base config: eslint.base.cjs — core linting rules
  - Main config: eslint.config.js — imports base config
  - Validation script: check:eslint — lint all .js/.cjs files

- HTML validation tools:
  - htmlhint configuration expanded with stricter rules
  - html-validate configured for structural HTML checks
  - Validation script: lint:html — run html-validate across repo

- Prettier validation scaffolds:
  - prettier:testfile, prettier:force, prettier:checkfile, prettier:checkall
  - Composite script: prettier:validate — runs all Prettier checks
  - check:prettier — repo-wide formatting check

- TESTING.md — For future validation scaffolds

### Changed

- Reformatted all files in toycode/:
  - Converted double quotes to single quotes
  - Converted to trailing spaces
  - Fixed all ESLint errors post‑config, except lessons/ folder

- Cleaned /sandbox folder for fresh experimenting

### Skipped

- lessons/ folder intentionally left untouched:
  - Contains ~20 markdown files (~1,000 lines each)
  - Last 5 files are non‑standard markdown drafts
  - Preserved for fidelity and future review
