const { context } = require('../base')

module.exports = function (API) {
  class AvailableOnDevice extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AvailableOnDevice] })
}