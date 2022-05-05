const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class PodcastSeason extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [PodcastSeason] })
}