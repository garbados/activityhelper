const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class OriginalShippingFees extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [OriginalShippingFees] })
}