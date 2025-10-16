import baseConfig from './eslint.config.base.mjs';
import nodePlugin from 'eslint-plugin-node';

export default [
  ...baseConfig,
  nodePlugin.configs.recommended,
];
