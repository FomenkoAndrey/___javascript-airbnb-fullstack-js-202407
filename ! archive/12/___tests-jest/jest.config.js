module.exports = {
  testEnvironment: 'jsdom',
  testMatch: ['**/*.test.js'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  }
};
