const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ComicStory extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ComicStory] })
}