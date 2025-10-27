import { includeIgnoreFile } from '@eslint/compat';
import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import perfectionist from 'eslint-plugin-perfectionist';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
// eslint-disable-next-line import/no-unresolved
import tseslint from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, '.gitignore');

export default [
  includeIgnoreFile(gitignorePath),
  eslint.configs.recommended,
  importPlugin.flatConfigs.recommended,
  perfectionist.configs['recommended-natural'],

  // TS
  {
    languageOptions: {
      parserOptions: { parser: tseslint.parser },
    },
  },

  // Prettier
  eslintConfigPrettier,

  // General
  {
    files: ['**/*.vue', '**/*.ts', '**/*.tsx'],
    rules: {
      '@typescript-eslint/array-type': 'error',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          format: ['PascalCase'],
          prefix: ['I'],
          selector: 'interface',
        },
        {
          format: ['PascalCase'],
          prefix: ['T'],
          selector: 'typeAlias',
        },
        {
          format: ['PascalCase'],
          prefix: ['E'],
          selector: 'enum',
        },
        {
          format: ['PascalCase'],
          modifiers: ['abstract'],
          prefix: ['A'],
          selector: 'class',
        },
        // Ensure privates must start with _
        {
          format: ['camelCase'],
          leadingUnderscore: 'require',
          modifiers: ['private'],
          selector: 'memberLike',
        },
      ],
      '@typescript-eslint/no-explicit-any': ['error'],
      '@typescript-eslint/no-shadow': 'error',
      'comma-dangle': [
        'error',
        {
          arrays: 'always-multiline',
          exports: 'always-multiline',
          functions: 'ignore',
          imports: 'always-multiline',
          objects: 'always-multiline',
        },
      ],
      'consistent-return': 'error',
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      'function-call-argument-newline': 'off',
      'global-require': 'off',
      'import/exports-last': 'error',
      'import/extensions': [
        'error',
        'never',
        {
          js: 'ignorePackages',
          json: 'always',
          vue: 'always',
        },
      ],
      'import/group-exports': 'error',
      'import/no-cycle': 'off',
      'import/no-default-export': 'error',
      'import/no-extraneous-dependencies': 'off',
      'import/order': [
        'error',
        {
          groups: ['index', 'sibling', 'parent', 'internal', 'external', 'builtin', 'object', 'type'],
        },
      ],
      'linebreak-style': ['error', 'unix'],
      'lines-between-class-members': [
        'error',
        'always',
        {
          exceptAfterSingleLine: true,
        },
      ],
      'max-params': ['error', 3],
      'newline-before-return': 'off',
      'no-alert': 'error',
      // This part should be to remove when airbnb will be back
      'no-await-in-loop': 'error',
      'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
      'no-debugger': 'error',
      'no-multi-spaces': [
        'error',
        {
          ignoreEOLComments: true,
        },
      ],
      'no-nested-ternary': 'error',
      'no-param-reassign': [
        'error',
        {
          props: false,
        },
      ],
      'no-plusplus': 'off',
      'no-promise-executor-return': 'off',
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@vue/*', 'vue'],
              importNames: ['defineProps', 'defineEmits'],
              message: "'defineProps' and 'defineEmits' can be used within <script setup> without importing.",
            },
            {
              group: ['.*'],
              message: 'Use absolute imports instead.',
            },
          ],
        },
      ],
      'no-restricted-syntax': [
        'error',
        {
          message:
            'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
          selector: 'ForInStatement',
        },
        {
          message:
            'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
          selector: 'ForOfStatement',
        },
        {
          message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
          selector: 'LabeledStatement',
        },
        {
          message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
          selector: 'WithStatement',
        },
      ],
      // end of airbnb part
      'no-shadow': 'off',
      'no-underscore-dangle': 'off',
      'no-use-before-define': 'off',
      'object-curly-newline': [
        'error',
        {
          ObjectPattern: {
            consistent: true,
            multiline: true,
          },
        },
      ],
      'perfectionist/sort-classes': 'off',
      'perfectionist/sort-imports': 'off',
      'perfectionist/sort-modules': 'off',
      'perfectionist/sort-named-imports': 'off',
      'perfectionist/sort-objects': [
        'error',
        {
          // we would like to sort only object attributes but not object functions, for now we cant do that
          objectDeclarations: false,
        },
      ],
      'perfectionist/sort-union-types': [
        'error',
        {
          groups: [
            'conditional',
            'function',
            'import',
            'intersection',
            'keyword',
            'literal',
            'named',
            'object',
            'operator',
            'tuple',
            'union',
            'nullish',
            'unknown',
          ],
        },
      ],
      'prefer-destructuring': [
        'error',
        {
          array: false,
          object: true,
        },
      ],
      'prefer-regex-literals': 'off',
      'require-await': 'error',
      'space-before-blocks': 'error',
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
    settings: {
      'import/resolver': {
        node: true,
        typescript: {
          project: ['tsconfig.vitest.json', 'tsconfig.app.json'],
        },
      },
    },
  },
];
