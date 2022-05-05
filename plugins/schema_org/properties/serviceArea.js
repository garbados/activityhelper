const { context } = require('../base')

module.exports = function (API) {
  class ServiceArea extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ServiceArea] })
}