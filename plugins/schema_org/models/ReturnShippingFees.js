const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ReturnShippingFees extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ReturnShippingFees] })
}