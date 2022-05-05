const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MusicRecording extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MusicRecording] })
}