const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class CoverArt extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [CoverArt] })
}