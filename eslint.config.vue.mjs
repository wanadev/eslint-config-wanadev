import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';
import vueTsEslintConfig from '@vue/eslint-config-typescript';
import pluginVue from 'eslint-plugin-vue';
import pluginVueA11y from 'eslint-plugin-vuejs-accessibility';

export default [
  ...pluginVueA11y.configs['flat/recommended'],
  ...vueTsEslintConfig(),
  ...pluginVue.configs['flat/recommended'],
  skipFormatting,

  // Vue-specific rules
  {
    files: ['**/*.vue'],
    rules: {
      'vue/block-lang': [
        'error',
        {
          script: {
            lang: 'ts',
          },
        },
      ],
      'vue/block-order': [
        'error',
        {
          order: ['script', 'template', 'style'],
        },
      ],
      'vue/component-api-style': ['error', ['script-setup']],
      'vue/define-emits-declaration': ['error', 'type-literal'],
      'vue/define-macros-order': 'error',
      'vue/define-props-destructuring': 'error',
      'vue/enforce-style-attribute': ['error', { allow: ['scoped'] }],
      'vue/first-attribute-linebreak': [
        'error',
        {
          multiline: 'below',
          singleline: 'beside',
        },
      ],
      'vue/max-template-depth': 'warn',
      'vue/no-import-compiler-macros': 'error',
      'vue/no-unused-refs': 'error',
      'vue/no-v-html': 'error',
      'vue/prefer-true-attribute-shorthand': 'error',
      'vue/prefer-use-template-ref': 'error',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/v-bind-style': [
        'error',
        'shorthand',
        {
          sameNameShorthand: 'always',
        },
      ],
      'vuejs-accessibility/label-has-for': [
        'warn',
        {
          required: { every: ['id'] },
        },
      ],
    },
  },
];
