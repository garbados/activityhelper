const { context } = require('../base')

module.exports = function (API) {
  class PriceSpecification extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PriceSpecification] })
}