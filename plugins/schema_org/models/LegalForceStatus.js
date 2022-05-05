const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class LegalForceStatus extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [LegalForceStatus] })
}