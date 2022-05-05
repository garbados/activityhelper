const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class UnofficialLegalValue extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [UnofficialLegalValue] })
}