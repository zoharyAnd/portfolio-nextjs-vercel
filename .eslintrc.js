module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
  },
  plugins: [
    'react',
  ],
  rules: {
    "linebreak-style": 0,
    'import/export': 0,
    "react/prop-types": 0,
    'jsx-a11y/label-has-associated-control': 0,
    'max-len': 0,
    'react/destructuring-assignment': 0,
    'import/no-cycle': 0,
    'react/no-array-index-key': 0,
    'react/jsx-props-no-spreading': 0,
    'react/no-danger': 0,
  },
};
