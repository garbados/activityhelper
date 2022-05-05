const { context } = require('../base')

module.exports = function (API) {
  class HasOfferCatalog extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [HasOfferCatalog] })
}