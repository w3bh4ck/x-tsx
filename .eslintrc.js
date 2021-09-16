module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parser: 'babel-eslint',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    semi: ['error', 'always'],
    'no-undef': 'error',
    'no-func-assign': 'error',
    'no-unused-vars': 'warn',
    'jsx-a11y/href-no-hash': 'off',
    'react/react-in-jsx-scope': 'off',
    'linebreak-style': ['error', 'unix'],
    'no-console': 'warn',
    strict: 0,
    ' no-case-declarations': 0,
    'react/prop-types': 0,
    'react-hooks/rules-of-hooks': 0,
    ' react-hooks/exhaustive-deps': 0,
    'no-mixed-spaces-and-tabs': 0,
    'import/no-anonymous-default-export': 0,
  },
};
