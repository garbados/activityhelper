const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MusicReleaseFormatType extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MusicReleaseFormatType] })
}