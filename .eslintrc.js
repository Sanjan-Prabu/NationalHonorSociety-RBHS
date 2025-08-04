module.exports = {
  // Use the root of the project for configuration
  root: true,

  // Specify the environment
  env: {
    browser: true,
    es2021: true,
    node: true,
    'react-native/react-native': true,
  },

  // Extend recommended configurations
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier', // Make sure this is the last one to override other configs
  ],

  // Specify the parser options
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  // Specify plugins
  plugins: [
    'react',
    'react-native',
    'prettier', // Make sure this is also at the end
  ],

  // Define custom rules
  rules: {
    'prettier/prettier': 'error',
    // You can add other rules here. For example:
    // 'react/prop-types': 'off', // Turn off if not using prop-types
  },

  // Add settings for plugins
  settings: {
    react: {
      version: 'detect',
    },
  },
};