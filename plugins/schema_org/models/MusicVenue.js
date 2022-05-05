const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MusicVenue extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MusicVenue] })
}