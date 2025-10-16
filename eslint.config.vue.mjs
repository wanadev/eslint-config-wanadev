import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';
import vueTsEslintConfig from '@vue/eslint-config-typescript';
import pluginVue from 'eslint-plugin-vue';
import pluginVueA11y from 'eslint-plugin-vuejs-accessibility';

import baseConfig from './eslint.config.base.mjs';

export default [
  ...baseConfig,
  ...pluginVueA11y.configs['flat/recommended'],
  ...vueTsEslintConfig(),
  ...pluginVue.configs['flat/recommended'],
  skipFormatting,
];
