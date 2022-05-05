const { context } = require('../base')

module.exports = function (API) {
  class ServicePostalAddress extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ServicePostalAddress] })
}