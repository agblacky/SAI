module.exports = {
  env: {
    node: true,
    commonjs: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'linebreak-style': 0,
    'object-curly-newline': 0,
    'no-console': 0,
  },
};
