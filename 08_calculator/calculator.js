const add = function (a, b) {
  return a + b
}

const subtract = function (a, b) {
  return a - b
}

const sum = function (arr) {
  return arr.reduce((a, b) => a + b, 0)
}

const multiply = function (arr) {
  return arr.reduce((a, b) => a * b)
}

const power = function (a, b) {
  return Math.pow(a, b)
}

const factorial = function (num) {
  let result = num
  if (num === 0 || num === 1) {
    return 1
  }
  while (num > 1) {
    num--
    result *= num
  }
  return result
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
}
