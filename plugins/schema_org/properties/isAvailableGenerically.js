const { context } = require('../base')

module.exports = function (API) {
  class IsAvailableGenerically extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [IsAvailableGenerically] })
}