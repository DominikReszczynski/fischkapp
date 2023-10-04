module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      '\\.(css|svg)$': 'identity-obj-proxy',
    },
    globals: {
      fetch: global.fetch,
    }
    
  };
