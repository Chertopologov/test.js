function createAdder(a) {
    return function addA(b) {
      return a + b;
    };
  }
  module.exports = createAdder;

  function match(str1, str2) {
    if (typeof str1 !== 'string' || typeof str2 !== 'string') {
      return false;
    }
    return str1.toLowerCase() === str2.toLowerCase();
  }

  module.exports = match;


  function processNumbers(numbers) {
    if (!Array.isArray(numbers)) {
      throw new Error("Input must be an array.");
    }
  
    const modifiedNumbers = numbers.map(num => {
      if (typeof num !== 'number') {
        throw new Error("Array must contain only numbers");
      }
      return num % 2 === 0 ? num + 4 : num - 2;
    });
  
    const filteredNumbers = modifiedNumbers.filter(num => num % 13 !== 0);
  
    return filteredNumbers.reduce((sum, num) => sum + num, 0);
  }

  module.exports = processNumbers;