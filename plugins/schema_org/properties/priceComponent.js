const { context } = require('../base')

module.exports = function (API) {
  class PriceComponent extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PriceComponent] })
}