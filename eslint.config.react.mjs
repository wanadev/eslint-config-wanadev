import baseConfig from './eslint.config.base.mjs';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

export default [
  ...baseConfig,
  reactPlugin.configs.recommended,
  reactHooksPlugin.configs.recommended,
];
