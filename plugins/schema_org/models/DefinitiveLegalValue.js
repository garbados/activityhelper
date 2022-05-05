const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class DefinitiveLegalValue extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [DefinitiveLegalValue] })
}