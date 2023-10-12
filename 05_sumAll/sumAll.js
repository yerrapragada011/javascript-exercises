const sumAll = function (...arr) {
  let count = 0
  arr.sort((a, b) => a - b)
  for (let i = arr[0]; i <= arr[1]; i++) {
    count += i
  }
  if (typeof arr[0] === 'string' || typeof arr[1] === 'string') {
    return 'ERROR'
  } else if (arr[0] < 0 || arr[1] < 0) {
    return 'ERROR'
  } else if (Array.isArray(arr[0]) || Array.isArray(arr[1])) {
    return 'ERROR'
  } else return count
}

// Do not edit below this line
module.exports = sumAll
