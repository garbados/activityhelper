const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class OfficialLegalValue extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [OfficialLegalValue] })
}