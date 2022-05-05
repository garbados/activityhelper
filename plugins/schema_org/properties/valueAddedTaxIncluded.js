const { context } = require('../base')

module.exports = function (API) {
  class ValueAddedTaxIncluded extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ValueAddedTaxIncluded] })
}