const { context } = require('../base')

module.exports = function (API) {
  class TrackingUrl extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [TrackingUrl] })
}