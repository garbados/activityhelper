const { context } = require('../base')

module.exports = function (API) {
  class ProductID extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ProductID] })
}