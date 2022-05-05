const { context } = require('../base')

module.exports = function (API) {
  class IncludedDataCatalog extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [IncludedDataCatalog] })
}