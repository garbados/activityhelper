const { context } = require('../base')

module.exports = function (API) {
  class ApplicableLocation extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ApplicableLocation] })
}