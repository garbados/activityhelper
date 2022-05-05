const { context } = require('../base')

module.exports = function (API) {
  class AvailableAtOrFrom extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AvailableAtOrFrom] })
}