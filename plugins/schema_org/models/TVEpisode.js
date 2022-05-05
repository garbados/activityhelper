const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class TVEpisode extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [TVEpisode] })
}