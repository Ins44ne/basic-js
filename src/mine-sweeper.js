const { NotImplementedError } = require('../extensions/index.js')

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length
  const cols = matrix[0].length

  const resultMatrix = Array.from({ length: rows }, () => Array(cols).fill(0))

  const isValidCell = (i, l) => i >= 0 && i < rows && l >= 0 && l < cols

  for (let i = 0; i < rows; i++) {
    for (let l = 0; l < cols; l++) {
      for (let di = -1; di <= 1; di++) {
        for (let dl = -1; dl <= 1; dl++) {
          if (di === 0 && dl === 0) continue

          const ni = i + di
          const nl = l + dl

          if (isValidCell(ni, nl)) {
            resultMatrix[i][l] += matrix[ni][nl] ? 1 : 0
          }
        }
      }
    }
  }

  return resultMatrix

  // throw new NotImplementedError('Not implemented');
}

module.exports = {
  minesweeper,
}
