const { context } = require('../base')

module.exports = function (API) {
  class RelatedDrug extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [RelatedDrug] })
}