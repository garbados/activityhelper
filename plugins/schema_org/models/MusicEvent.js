const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MusicEvent extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MusicEvent] })
}