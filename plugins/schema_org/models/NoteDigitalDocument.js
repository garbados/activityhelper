const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class NoteDigitalDocument extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [NoteDigitalDocument] })
}