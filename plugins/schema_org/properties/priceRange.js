const { context } = require('../base')

module.exports = function (API) {
  class PriceRange extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PriceRange] })
}