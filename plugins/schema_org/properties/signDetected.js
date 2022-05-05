const { context } = require('../base')

module.exports = function (API) {
  class SignDetected extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [SignDetected] })
}