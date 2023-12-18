const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const countDomain = {}

  domains.forEach((el) => {
    const subdomains = el.split('.').reverse()
    let currentSubdomain = ''

    subdomains.forEach((element) => {
      currentSubdomain = `${currentSubdomain}.${element}`
      let currentSubdomainValue = countDomain[currentSubdomain]

      if (currentSubdomainValue === undefined) {
        currentSubdomainValue = 0
      }

      currentSubdomainValue += 1

      countDomain[currentSubdomain] = currentSubdomainValue
    })
  })

  return countDomain
  // throw new NotImplementedError('Not implemented');
}

module.exports = {
  getDNSStats,
}
