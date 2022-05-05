const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class PodcastEpisode extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [PodcastEpisode] })
}