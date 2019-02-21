module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-unused-vars": 0,
    "no-console": 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-param-reassign": [2, { props: false }],
    'linebreak-style': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
