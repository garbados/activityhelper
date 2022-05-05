const { context } = require('../base')

module.exports = function (API) {
  class IsBasedOn extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [IsBasedOn] })
}