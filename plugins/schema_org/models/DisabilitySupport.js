const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class DisabilitySupport extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [DisabilitySupport] })
}