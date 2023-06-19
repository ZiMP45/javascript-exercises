const convertToCelsius = function(fTemp) {
  let celsius = (fTemp - 32) * (5/9);
  return celsius;
};

const convertToFahrenheit = function(cTemp) {
  let fahrenheit = (cTemp * (5/9) + 32);
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
