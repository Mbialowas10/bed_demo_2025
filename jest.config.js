module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    setupFilesAfterEnv: ["<rootDir>/test/jest.setup.ts"]
    // transform: {
    //     '^.+\\.tsx?$': 'ts-jest',
    //   },
    //   moduleFileExtensions: ['ts', 'js', 'json'],
};

// 'present: "ts-jest": use ts-jest present to handle TS files
//  testEnvironment: "node" - setting env to node

