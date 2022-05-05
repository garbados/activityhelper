const { context } = require('../base')

module.exports = function (API) {
  class ServiceAudience extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ServiceAudience] })
}