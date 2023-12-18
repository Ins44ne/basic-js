const { NotImplementedError } = require('../extensions/index.js')

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  isReversed: false,

  getLength() {
    return this.chain.length
  },
  addLink(value) {
    // Преобразовать функции в строки
    if (typeof value === 'function') {
      value = value.toString()
    }
    this.chain.push('( ' + value + ' )')
    return this
  },
  removeLink(position) {
    if (
      typeof position !== 'number' ||
      position < 1 ||
      position > this.chain.length ||
      !Number.isInteger(position)
    ) {
      this.chain = []
      throw new Error("You can't remove incorrect link!")
    }
    this.chain.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    this.chain.reverse()
    this.isReversed = !this.isReversed
    return this
  },
  finishChain() {
    let result = this.chain.join('~~')
    this.chain = []
    this.isReversed = false
    return result
  },
}

module.exports = {
  chainMaker,
}
