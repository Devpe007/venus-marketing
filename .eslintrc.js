module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'import/no-named-as-default-member': 'off',
    'import/no-named-as-default': 'off',
    'no-extra-semi': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'off',
    'react/jsx-no-bind': 'off',
    'react/prop-types': 'off',
    'global-require': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    'no-undef': 'off',
    'react/jsx-filename-extension': 'off',
  },
};
