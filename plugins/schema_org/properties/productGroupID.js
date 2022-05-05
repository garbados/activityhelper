const { context } = require('../base')

module.exports = function (API) {
  class ProductGroupID extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ProductGroupID] })
}