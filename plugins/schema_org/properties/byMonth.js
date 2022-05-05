const { context } = require('../base')

module.exports = function (API) {
  class ByMonth extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ByMonth] })
}