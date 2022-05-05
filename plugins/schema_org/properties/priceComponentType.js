const { context } = require('../base')

module.exports = function (API) {
  class PriceComponentType extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PriceComponentType] })
}