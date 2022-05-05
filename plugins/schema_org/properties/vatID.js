const { context } = require('../base')

module.exports = function (API) {
  class VatID extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [VatID] })
}