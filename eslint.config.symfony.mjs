import baseConfig from './eslint.config.base.mjs';

// Symfony projects often use JS/TS for frontend, so just extend the base config.
// You can add Symfony-specific overrides here if needed in the future.

export default [
  ...baseConfig,
];
