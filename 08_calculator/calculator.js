const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  return arr.reduce((total, current) => total + current, 0);
};

const multiply = function(...arr) {
  let sum = 1;
  for (let i = 0; i < arr.length; i++) {
    sum *= arr[i];
  }
  return sum;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(num) {
  let result = num;
  if (num === 0 || num === 1) {
    return 1;
  }

  while (num > 1) {
    num--;
    result *= num;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
