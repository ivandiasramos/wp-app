module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  "collectCoverageFrom": [
    "<rootDir>/src/app/methods/**/*.ts",
    "!<rootDir>/src/app/methods/**/index.ts",
    "!**/node_modules/**",
    "!**/vendor/**"
  ]
}
