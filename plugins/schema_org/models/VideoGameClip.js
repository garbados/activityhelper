const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class VideoGameClip extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [VideoGameClip] })
}