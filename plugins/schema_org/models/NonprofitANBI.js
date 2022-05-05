const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class NonprofitANBI extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [NonprofitANBI] })
}