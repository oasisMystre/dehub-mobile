module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'eslint-disable-react/no-unstable-nested-components': true,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        singleAttributePerLine: true,
      },
    ],
    curly: ['error', 'multi-line'],
  },
};
