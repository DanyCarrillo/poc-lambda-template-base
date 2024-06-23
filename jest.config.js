module.exports =  {
  moduleFileExtensions: [
    "js",
    "json",
    "ts"
  ],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
  rootDir: "src",
  modulePaths: ['<rootDir>'],
  testRegex: ".*\\.spec\\.ts$",
  transform: {
    "^.+\\.(t|j)s$": "@swc/jest"
  },
  collectCoverageFrom: [
    "**/*.(t|j)s",
    '!main.ts',
  ],
  coverageDirectory: "../coverage",
  testEnvironment: "node",
  setupFiles: ["../jest-setup.ts"]
}