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
    'no-console': 0,
    'camelcase': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        'selector': 'default',
        'format': ['camelCase']
      },
  
      {
        'selector': 'variable',
        'format': ['camelCase', 'UPPER_CASE']
      },
      {
        'selector': 'parameter',
        'format': ['camelCase'],
        'leadingUnderscore': 'allow'
      },
  
      {
        'selector': 'memberLike',
        'modifiers': ['private'],
        'format': ['camelCase']
      },
  
      {
        'selector': 'typeLike',
        'format': ['PascalCase']
      }
    ]  
  }
};
