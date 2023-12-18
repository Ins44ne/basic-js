const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numString = n.toString()

  let maxNumber = 0

  for (i = 0; i < numString.length; i += 1) {
    let updNumString = numString.slice(0, i) + numString.slice(i + 1)
    let updNum = parseFloat(updNumString)

    if (updNum > maxNumber) {
      maxNumber = updNum
    }
  }

  return maxNumber
  // throw new NotImplementedError('Not implemented');
}

module.exports = {
  deleteDigit,
}
