const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class TextDigitalDocument extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [TextDigitalDocument] })
}