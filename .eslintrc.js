module.exports = {
  extends: [
    '@blockmatic/eslint-config-base',
    '@blockmatic/eslint-config-react',
  ],
  plugins: ['jest'],
  env: {
    'jest/globals': true,
  },
}
