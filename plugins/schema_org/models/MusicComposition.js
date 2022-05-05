const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MusicComposition extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MusicComposition] })
}