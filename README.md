# Shared ESLint & Prettier Config for Wanadev

This package provides a unified set of ESLint and Prettier rules for all Wanadev's projects. Use this to ensure consistent code style and linting across your repositories.

## Installation

1. Install this package and its peer dependencies in your project:

```bash
npm install --save-dev @wanadev/lint eslint prettier
# Also install all required peer dependencies (see below)
```

2. (Optional) Remove any existing `.eslintrc*` and `.prettierrc*` files from your project to avoid conflicts.

## Usage

### ESLint (Flat Config)
1. Create an `eslint.config.mjs` in your project root with the following content:

```js
import config from '@wanadev/lint/eslint.config.mjs';
export default config;
```

2. Run ESLint as usual:
```bash
npx eslint .
```

### Prettier
1. Create a `.prettierrc` in your project root with:

```json
"@wanadev/lint/.prettierrc"
```

Or, import/extend as needed.

2. Run Prettier as usual:
```bash
npx prettier --check .
```

## Peer Dependencies
You must install all peer dependencies required by this config (see `package.json`).

## Updating
When this config is updated, update your dependency in each project:
```bash
npm update @wanadev/lint
```