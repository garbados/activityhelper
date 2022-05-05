const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MusicStore extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MusicStore] })
}