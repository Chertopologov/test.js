const createAdder = require('./index.js');

describe('createAdder', () => {
  it('should return a function', () => {
    const add5 = createAdder(5);
    expect(typeof add5).toBe('function');
  });
});


const match = require('./index.js');

describe('match', () => {
  it('should return true if strings are equal ignoring case', () => {
    expect(match('hEllO', 'HELLo')).toBe(true);
    expect(match('apple', 'Apple')).toBe(true);
    expect(match('Test', 'TEST')).toBe(true);
      expect(match('fooBar', 'fOoBaR')).toBe(true);
  });
});


const processNumbers = require('./index.js');

describe('processNumbers', () => {
  it('should correctly process an array of numbers', () => {
    expect(processNumbers([1, 2, 3, 4, 13, 26, 15])).toBe(26);
    expect(processNumbers([10, 15, 20, 25])).toBe(84);
    expect(processNumbers([1, 3, 5, 7])).toBe(8);
    expect(processNumbers([2, 4, 6, 8])).toBe(36);
  });

   it('should return 0 if all numbers are divisible by 13', () => {
      expect(processNumbers([13, 26, 39])).toBe(0);
  });

  it('should handle empty arrays correctly', () => {
      expect(processNumbers([])).toBe(0);
  });

    it('should throw an error if input is not an array', () => {
      expect(() => processNumbers("test")).toThrow("Input must be an array.");
    });

    it('should throw an error if array contains non-number values', () => {
      expect(() => processNumbers([1, 2, "3"])).toThrow("Array must contain only numbers");
       expect(() => processNumbers([1, 2, null])).toThrow("Array must contain only numbers");
      expect(() => processNumbers([1, 2, undefined])).toThrow("Array must contain only numbers");
       expect(() => processNumbers([1, 2, true])).toThrow("Array must contain only numbers");

    });
});