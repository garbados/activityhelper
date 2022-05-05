const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class NonprofitSBBI extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [NonprofitSBBI] })
}