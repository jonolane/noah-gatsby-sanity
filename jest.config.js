module.exports = {
    // toggling jsdom environment vs none. currently implementation of jest.conifig.js is aligned with the gatsby docs
    // testEnvironment: 'jest-environment-jsdom',
    transform: {
      '^.+\\.jsx?$': `<rootDir>/jest-preprocess.js`,
    },
    moduleNameMapper: {
      '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
      '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`,
    },
    testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
    transformIgnorePatterns: [`node_modules/(?!(gatsby|gatsby-script|gatsby-link)/)`],
    globals: {
      __PATH_PREFIX__: ``,
    },
    testEnvironmentOptions: {
      // sixteen pacakge troubleshooting by using testURL instead
      url: `http://localhost`,
      // testURL: `http://localhost`,  
    },
    setupFiles: [`<rootDir>/loadershim.js`],
    // trying to fix the error: "ReferenceError: TextEncoder is not defined during unit test for spotify api authenitcation"
    // setupFilesAfterEnv: ['<rootDir>/src/utils/setupTests.js'],
  };