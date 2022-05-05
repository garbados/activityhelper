const { context } = require('../base')

module.exports = function (API) {
  class IssuedThrough extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [IssuedThrough] })
}