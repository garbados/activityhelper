const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MerchantReturnFiniteReturnWindow extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MerchantReturnFiniteReturnWindow] })
}