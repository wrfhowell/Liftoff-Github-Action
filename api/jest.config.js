module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['./dist/test'],
    testMatch: ['**/test/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
    collectCoverage: true,
};