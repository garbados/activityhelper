const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Movie extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Movie] })
}