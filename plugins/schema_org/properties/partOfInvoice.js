const { context } = require('../base')

module.exports = function (API) {
  class PartOfInvoice extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PartOfInvoice] })
}