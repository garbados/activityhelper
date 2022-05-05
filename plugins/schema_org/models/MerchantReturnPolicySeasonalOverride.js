const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MerchantReturnPolicySeasonalOverride extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MerchantReturnPolicySeasonalOverride] })
}