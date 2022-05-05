const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MerchantReturnPolicy extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MerchantReturnPolicy] })
}