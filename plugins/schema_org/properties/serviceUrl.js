const { context } = require('../base')

module.exports = function (API) {
  class ServiceUrl extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ServiceUrl] })
}