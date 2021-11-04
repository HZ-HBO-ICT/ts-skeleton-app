module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'import'
  ],
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended'
  ],
  parserOptions: {
      project: './tsconfig.json',
  },
  rules: {
    'no-console': 0
  }
};
