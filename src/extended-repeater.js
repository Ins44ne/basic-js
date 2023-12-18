const { NotImplementedError } = require('../extensions/index.js')

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repeatTimes = options.repeatTimes || 1
  let separator = options.separator || '+'
  let addition = options.addition
  let additionRepeatTimes = options.additionRepeatTimes
  if (addition === undefined) {
    additionRepeatTimes = 0
  }
  if (additionRepeatTimes === undefined) {
    additionRepeatTimes = 1
  }
  let additionSeparator = options.additionSeparator
  if (additionSeparator === undefined) {
    additionSeparator = '|'
  }

  let result = ''

  for (let i = 0; i < repeatTimes; i += 1) {
    result += str
    for (let l = 0; l < additionRepeatTimes; l += 1) {
      result += addition
      if (l < additionRepeatTimes - 1) {
        result += additionSeparator
      }
    }
    if (i < repeatTimes - 1) {
      result += separator
    }
  }
  return result
  //throw new NotImplementedError('Not implemented');
}

module.exports = {
  repeater,
}
