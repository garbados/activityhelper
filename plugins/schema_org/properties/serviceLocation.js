const { context } = require('../base')

module.exports = function (API) {
  class ServiceLocation extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ServiceLocation] })
}