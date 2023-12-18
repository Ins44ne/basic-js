const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  const cat = '^^'
  const flatArray = matrix.flat()
  let num = 0

  flatArray.forEach((el) => {
    if (el === cat) {
      num += 1
    }
  })
  return num
  // throw new NotImplementedError('Not implemented')
}

module.exports = {
  countCats,
}
