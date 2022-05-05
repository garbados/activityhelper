const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class VideoGameSeries extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [VideoGameSeries] })
}