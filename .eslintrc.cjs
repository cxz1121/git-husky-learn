const js = require('@eslint/js')
module.exports = {
  globals: {
    defineOptions: 'readonly',
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser'
  },
  // extends: ['prettier'],
  // plugins: ['@typescript-eslint'],
  extends: ['plugin:prettier/recommended', 'plugin:@typescript-eslint/recommended'],
  env: {
    browser: true,
    es2021: true
  },
  rules: {
    ...js.configs.recommended.rules,
    'no-unused-vars': 'error'
  },
  overrides: [
    {
      files: ['**/*.{ts,mts,js,mjs,vue}']
    }
  ]
}
