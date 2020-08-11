/* eslint-env node */

module.exports = {
  bail: 1,
  coverageDirectory: "coverage",
  collectCoverageFrom: ["**/src/**"],
  coverageReporters: ["text", "html"],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  notify: true,
  notifyMode: "always",
  resetMocks: true,
}
