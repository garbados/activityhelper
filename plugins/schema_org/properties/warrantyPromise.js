const { context } = require('../base')

module.exports = function (API) {
  class WarrantyPromise extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [WarrantyPromise] })
}