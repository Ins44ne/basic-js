const { NotImplementedError } = require('../extensions/index.js')

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let abbrTeam = []

  if (!Array.isArray(members)) {
    return false
  }

  members.forEach((el) => {
    if (typeof el === 'string' && el.trim() !== '') {
      abbrTeam.push(el.trim()[0].toUpperCase())
    }
  })

  abbrTeam = abbrTeam.sort().join('')
  return abbrTeam
  // throw new NotImplementedError('Not implemented');
}

module.exports = {
  createDreamTeam,
}
