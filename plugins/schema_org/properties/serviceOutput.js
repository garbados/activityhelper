const { context } = require('../base')

module.exports = function (API) {
  class ServiceOutput extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ServiceOutput] })
}