const { context } = require('../base')

module.exports = function (API) {
  class TaxID extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [TaxID] })
}