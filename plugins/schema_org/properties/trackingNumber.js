const { context } = require('../base')

module.exports = function (API) {
  class TrackingNumber extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [TrackingNumber] })
}