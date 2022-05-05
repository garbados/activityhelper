const { context } = require('../base')

module.exports = function (API) {
  class ServiceType extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ServiceType] })
}