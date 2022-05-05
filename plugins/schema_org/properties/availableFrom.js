const { context } = require('../base')

module.exports = function (API) {
  class AvailableFrom extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AvailableFrom] })
}