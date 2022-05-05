const { context } = require('../base')

module.exports = function (API) {
  class AcquiredFrom extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AcquiredFrom] })
}