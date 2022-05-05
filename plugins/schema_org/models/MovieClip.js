const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MovieClip extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MovieClip] })
}