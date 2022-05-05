const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class LegalValueLevel extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [LegalValueLevel] })
}