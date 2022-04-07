module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
    'plugin:vue/vue3-recommended',
  ],
  globals: {
    defineEmits: 'readonly',
    defineProps: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    camelcase: ['off'],
    indent: ['error', 2],

    'brace-style': ['error', 'stroustrup', { allowSingleLine: false }],
    'object-curly-newline': ['error', { multiline: true }],
    'prefer-destructuring': ['error', { object: true, array: false }],
    'vue/no-multiple-template-root': 0,
  },
};
