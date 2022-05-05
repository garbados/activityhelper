const { context } = require('../base')

module.exports = function (API) {
  class PublicTransportClosuresInfo extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PublicTransportClosuresInfo] })
}