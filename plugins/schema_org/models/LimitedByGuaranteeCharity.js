const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class LimitedByGuaranteeCharity extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [LimitedByGuaranteeCharity] })
}