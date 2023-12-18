const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let filteredArr = arr.filter((h) => h !== -1)
  let sortedArr = filteredArr.sort((a, b) => a - b)
  let currIndex = 0
  let result = []

  arr.map((el) => {
    if (el === -1) {
      result.push(-1)
    } else {
      result.push(sortedArr[currIndex])
      currIndex += 1
    }
  })
  return result
  // throw new NotImplementedError('Not implemented');
}

module.exports = {
  sortByHeight,
}
