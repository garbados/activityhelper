const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class VideoGame extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [VideoGame] })
}