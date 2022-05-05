const { context } = require('../base')

module.exports = function (API) {
  class OriginatesFrom extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [OriginatesFrom] })
}