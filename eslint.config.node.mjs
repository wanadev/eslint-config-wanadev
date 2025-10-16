import nodePlugin from 'eslint-plugin-node';

import baseConfig from './eslint.config.base.mjs';

export default [
  ...baseConfig,
  nodePlugin.configs.recommended,
];
