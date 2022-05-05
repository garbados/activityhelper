const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class RadioEpisode extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [RadioEpisode] })
}