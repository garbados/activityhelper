const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MerchantReturnNotPermitted extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MerchantReturnNotPermitted] })
}