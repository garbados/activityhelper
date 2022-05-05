const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MerchantReturnEnumeration extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MerchantReturnEnumeration] })
}