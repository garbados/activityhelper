const { context } = require('../base')

module.exports = function (API) {
  class ValidThrough extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ValidThrough] })
}