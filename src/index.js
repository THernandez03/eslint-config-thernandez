export default {
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      legacyDecorators: true,
    },
  },
  env: {
    amd: true,
    es6: true,
    jest: true,
    node: true,
    mongo: true,
    jquery: true,
    browser: true,
    jasmine: true,
    phantomjs: true,
  },
  extends: [
    'eslint:all',
    'plugin:import/errors',
    'plugin:promise/recommended',
    'plugin:react/all',
    'plugin:compat/recommended',
    'plugin:jsx-a11y/strict',
    'plugin:unicorn/recommended',
    'prettier',
    'prettier/babel',
    'prettier/react',
    'prettier/unicorn',
  ],
  plugins: [
    'prettier',
    'import',
    'promise',
    'react',
    'react-hooks',
    'compat',
    'jsx-a11y',
    'unicorn',
    '@emotion',
  ],
  settings: {
    react: { version: 'detect' },
    polyfills: ['fetch', 'promises'],
  },
  globals: {
    globalThis: false,
  },
  rules: {
    'capitalized-comments': [
      0,
      'always',
      {
        ignoreInlineComments: true,
        ignoreConsecutiveComments: true,
      },
    ],
    'class-methods-use-this': 0,
    'comma-dangle': [2, 'always-multiline'],
    'consistent-return': 0,
    'consistent-this': [2, 'self'],
    'default-param-last': 0,
    'dot-location': [2, 'property'],
    'function-call-argument-newline': [2, 'consistent'],
    'func-style': 0,
    'global-require': 0,
    'id-match': 0,
    'init-declarations': 0,
    'lines-around-comment': 0,
    'no-new-object': 0,
    'max-depth': [2, 3],
    'max-len': [
      2,
      80,
      2,
      {
        ignoreComments: true,
        ignorePattern: '((ex|im)port( |\\().*)',
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreUrls: true,
      },
    ],
    'max-lines': 0,
    'max-lines-per-function': 0,
    'max-nested-callbacks': [2, 5],
    'max-params': [2, 3],
    'max-statements': 0,
    'multiline-ternary': 0,
    'multiline-comment-style': [2, 'separate-lines'],
    'no-bitwise': 0,
    'no-confusing-arrow': [0, { allowParens: true }],
    'no-console': 1,
    'no-continue': 0,
    'no-debugger': 1,
    'no-empty-function': 0,
    'no-inline-comments': 0,
    'no-magic-numbers': [
      0,
      {
        ignoreArrayIndexes: true,
        enforceConst: true,
        detectObjects: true,
      },
    ],
    'no-process-env': 0,
    'no-restricted-modules': [2, 'lodash'],
    'no-restricted-syntax': [2, 'WithStatement'],
    'no-shadow': [2, { allow: ['error'] }],
    'no-ternary': 0,
    'no-undef': [2, { typeof: true }],
    'no-underscore-dangle': 0,
    'no-unused-expressions': [
      2,
      {
        allowTaggedTemplates: true,
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    'no-warning-comments': 1,
    'one-var': [2, 'never'],
    'padding-line-between-statements': 0,
    'padded-blocks': [2, 'never'],
    'prefer-reflect': 0,
    'quote-props': [2, 'as-needed'],
    'sort-imports': 0,
    'sort-keys': 0,
    'sort-vars': 0,
    strict: [2, 'never'],
    'wrap-iife': [2, 'inside'],
    yoda: [
      2,
      'never',
      {
        exceptRange: true,
        onlyEquality: true,
      },
    ],
    'prettier/prettier': 2,
    'react/display-name': 0,
    'react/forbid-component-props': 0,
    'react/function-component-definition': 0,
    'react/prop-types': [2, { skipUndeclared: true }],
    'react/require-default-props': 0,
    'react/require-optimization': [2, { allowDecorators: ['pure'] }],
    'react/no-multi-comp': [2, { ignoreStateless: true }],
    'react/no-set-state': 0,
    'react/sort-prop-types': [
      2,
      {
        callbacksLast: true,
        requiredFirst: true,
        sortShapeProp: true,
        ignoreCase: true,
      },
    ],
    'react/state-in-constructor': 0,
    'react/jsx-equals-spacing': [2, 'never'],
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/jsx-first-prop-new-line': 0,
    'react/jsx-handler-names': 0,
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-max-depth': 0,
    'react/jsx-max-props-per-line': [2, { maximum: 5 }],
    'react/jsx-no-bind': 0,
    'react/jsx-no-literals': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-sort-default-props': 0,
    'react/jsx-sort-props': 0,
    'react/jsx-uses-react': 0,
    'react/sort-comp': 0,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 2,
    'import/extensions': 0,
    'import/first': 2,
    'import/prefer-default-export': 0,
    'import/max-dependencies': 0,
    'import/namespace': [2, { allowComputed: true }],
    'import/newline-after-import': 2,
    'import/no-absolute-path': 2,
    'import/no-amd': 2,
    'import/no-commonjs': 2,
    'import/no-deprecated': 2,
    'import/no-duplicates': 2,
    'import/no-dynamic-require': 2,
    'import/no-extraneous-dependencies': 2,
    'import/no-internal-modules': 0,
    'import/no-mutable-exports': 2,
    'import/no-named-as-default': 2,
    'import/no-named-as-default-member': 2,
    'import/no-named-default': 2,
    'import/no-namespace': 0,
    'import/no-nodejs-modules': 0,
    'import/resolver': 0,
    'import/no-restricted-paths': 2,
    'import/no-unassigned-import': 0,
    'import/no-unresolved': 0,
    'import/no-webpack-loader-syntax': 2,
    'import/order': 0,
    'import/unambiguous': 2,
    'promise/avoid-new': 0,
    'promise/prefer-await-to-then': 0,
    'promise/prefer-await-to-callbacks': 2,
    'promise/no-callback-in-promise': 2,
    'promise/no-native': 0,
    'promise/no-nesting': 2,
    'promise/no-promise-in-callback': 2,
    'jsx-a11y/lang': 2,
    'jsx-a11y/no-static-element-interactions': 0,
    'unicorn/catch-error-name': [2, { caughtErrorsIgnorePattern: '^error$' }],
    'unicorn/filename-case': [
      0,
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
      },
    ],
    'unicorn/prevent-abbreviations': 0,
    'unicorn/no-reduce': 0,
    '@emotion/no-vanilla': 2,
    '@emotion/styled-import': 2,
    '@emotion/syntax-preference': [2, 'string'],
  },
};
