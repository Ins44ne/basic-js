const { NotImplementedError } = require('../extensions/index.js')

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let maxLvl = 1

    arr.forEach((el) => {
      if (Array.isArray(el)) {
        let lvl = this.calculateDepth(el) + 1
        maxLvl = Math.max(maxLvl, lvl)
      }
    })

    return maxLvl
    // throw new NotImplementedError('Not implemented');
  }
}

module.exports = {
  DepthCalculator,
}
