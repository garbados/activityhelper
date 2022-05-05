const { context } = require('../base')

module.exports = function (API) {
  class CatalogNumber extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [CatalogNumber] })
}