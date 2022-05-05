const { context } = require('../base')

module.exports = function (API) {
  class AvailableThrough extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AvailableThrough] })
}