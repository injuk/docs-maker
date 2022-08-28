'use strict';

module.exports = {
    // mzc-cpm-lambda/test 경로에서 시작
    roots: [
        'test',
    ],
    resetMocks: true,
    testEnvironment: 'node',
    testMatch: [
        "**/__tests__/**/*.+(ts|tsx|js)",
        "**/?(*.)+(spec|test).+(ts|tsx|js)"
    ],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
};