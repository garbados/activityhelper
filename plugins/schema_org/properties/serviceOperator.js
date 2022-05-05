const { context } = require('../base')

module.exports = function (API) {
  class ServiceOperator extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ServiceOperator] })
}