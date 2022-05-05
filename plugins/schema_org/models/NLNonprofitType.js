const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class NLNonprofitType extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [NLNonprofitType] })
}