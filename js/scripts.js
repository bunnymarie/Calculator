var add = function(number1, number2) {
  return number1 + number2;
};

var number1 = parseInt(prompt ("Enter a number:"));
var number2 = parseInt(prompt ("Enter another number:"));
var result = add(number1, number2);
alert(result);

var subtract(number1, number2) {
  return number1 - number2;
};

var number1 = parseInt(prompt ("Enter a number:"));
var number2 = parseInt(prompt ("Enter another number:"));
var result = subtract(number1, number2);
alert(result);

var multiply = function(number1, number2) {
  return number1 * number2;
};

var number1 = parseInt(prompt ("Enter a number:"));
var number2 = parseInt(prompt ("Enter another number:"));
var result = multiply(number1, number2);
alert(result);

var divide = function(number1, number2) {
  return number1 / number2;
};

var number1 = parseInt(prompt ("Enter a number:"));
var number2 = parseInt(prompt ("Enter another number:"));
var result = divide(number1, number2);
alert(result);

var remainder = function(number1, number2) {
  return number1 % number2;
};

var number1 = parseInt(prompt ("Enter a number:"));
var number2 = parseInt(prompt ("Enter another number:"));
var result = remainder(number1, number2);
alert(result);

var bmi = function(weight, height) {
  return weight / (height*height) * 703;
};

var weight = parseInt(prompt ("Enter weight in lbs:"));
var height = parseInt(prompt ("Enter height in inches:"));
var result = bmi(weight, height);
alert(result);
