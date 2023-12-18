const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let finalStr = ''
  let currChar = ''
  let lastChar = ''
  let counter = 1

  for (let i = 0; i < str.length; i += 1) {
    currChar = str[i]
    if (currChar === lastChar) {
      counter += 1
    } else {
      if (counter === 1) {
        finalStr += lastChar
      } else {
        finalStr += counter + lastChar
        counter = 1
      }
      lastChar = currChar
    }
  }

  if (counter === 1) {
    finalStr += lastChar
  } else {
    finalStr += counter + lastChar
  }

  return finalStr
  // throw new NotImplementedError('Not implemented')
}

module.exports = {
  encodeLine,
}
