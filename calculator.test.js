const { describe, test, expect } = require('@jest/globals');
const { add, subtract, multiply, divide, square, cube } = require('./calculator');

describe('Calculator Basic Operations', () => {
  
  // Test Adding deliberate failure
  test('adds 10 + 5 to equal 15', () => {
    expect(add(10, 5)).toBe(99);
  });
  test('adds negative numbers -5 + -3 to equal -8', () => {
    expect(add(-5, -3)).toBe(-8);
  });

  // Test Subtract
  test('subtracts 10 - 5 to equal 5', () => {
    expect(subtract(10, 5)).toBe(5);
  });
  test('subtracts with negative results 5 - 10 to equal -5', () => {
    expect(subtract(5, 10)).toBe(-5);
  });

  // Test Multiply
  test('multiplies 10 * 5 to equal 50', () => {
    expect(multiply(10, 5)).toBe(50);
  });
  test('multiplies a negative number 5 * -2 to equal -10', () => {
    expect(multiply(5, -2)).toBe(-10);
  });

  // Test Divide
  test('divides 10 / 5 to equal 2', () => {
    expect(divide(10, 5)).toBe(2);
  });
  test('handles division by zero', () => {
    expect(divide(10, 0)).toBe(NaN);
  });
});

describe('Calculator Bonus Operations', () => {
  // Test Square
  test('squares 4 to equal 16', () => {
    expect(square(4)).toBe(16);
  });

  // Test Cube
  test('cubes 3 to equal 27', () => {
    expect(cube(3)).toBe(27);
  });
});