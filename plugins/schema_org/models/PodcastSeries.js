const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class PodcastSeries extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [PodcastSeries] })
}