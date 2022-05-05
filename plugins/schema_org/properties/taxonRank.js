const { context } = require('../base')

module.exports = function (API) {
  class TaxonRank extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [TaxonRank] })
}