module.exports = {
    transform: {
      '^.+\\.js$': {
        loader: 'babel-jest',
        options: {
          // Ustaw tę opcję na `true`, aby uruchomić Babel asynchronicznie
          async: true,
        },
      "^.+\\.jsx$": "babel-jest",
      "^.+\\.ts$": "ts-jest",
      "^.+\\.tsx$": "ts-jest"
    },
    moduleNameMapper: {
      '^@testing-library/jest-dom/extend-expect$': '<rootDir>/node_modules/@testing-library/jest-dom/extend-expect.js',
    },
  };