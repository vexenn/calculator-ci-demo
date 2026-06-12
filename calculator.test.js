const { test: jestTest, expect: jestExpect } = require('@jest/globals');

// Example dummy test to verify Jest works
jestTest('adds 1 + 2 to equal 3', () => {
  jestExpect(1 + 2).toBe(3);
});