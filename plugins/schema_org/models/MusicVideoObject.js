const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MusicVideoObject extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MusicVideoObject] })
}