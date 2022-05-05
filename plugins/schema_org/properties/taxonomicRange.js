const { context } = require('../base')

module.exports = function (API) {
  class TaxonomicRange extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [TaxonomicRange] })
}