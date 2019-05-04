module.exports = {
  extends: 'react-app',
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      legacyDecorators: true,
      ecmaVersion: 2017
    }
  },
  env: {
    es6: true,
    node: true,
    browser: true
  },
  plugins: ['prettier', 'react'],
  rules: {
    'no-template-curly-in-string': 0,
    'no-unused-vars': 2,
    'no-redeclare': 2,
    'no-undef': 2,
    semi: 0,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/jsx-no-undef': 2,
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        printWidth: 100
      }
    ],
    'jsx-a11y/href-no-hash': 0
  }
}
