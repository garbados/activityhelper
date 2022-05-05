const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MusicRelease extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MusicRelease] })
}