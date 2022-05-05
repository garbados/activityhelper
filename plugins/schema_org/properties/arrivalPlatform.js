const { context } = require('../base')

module.exports = function (API) {
  class ArrivalPlatform extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ArrivalPlatform] })
}