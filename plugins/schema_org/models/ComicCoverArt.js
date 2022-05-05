const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ComicCoverArt extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ComicCoverArt] })
}