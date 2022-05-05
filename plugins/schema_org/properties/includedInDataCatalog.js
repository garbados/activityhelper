const { context } = require('../base')

module.exports = function (API) {
  class IncludedInDataCatalog extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [IncludedInDataCatalog] })
}