const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class NonprofitType extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [NonprofitType] })
}