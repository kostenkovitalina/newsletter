
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/$1',
        '\\.(css|less|scss|sass)$': '<rootDir>/__mocks__/styleMock.js',
        // '^next/image$': '<rootDir>/__mocks__/nextImageMock.ts',
    },
    transform: {
        '^.+\\.(ts|tsx)$': 'babel-jest',
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
    transformIgnorePatterns: [
        '[/\\\\]node_modules[/\\\\](?!.*\\.mjs$)',
    ],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
