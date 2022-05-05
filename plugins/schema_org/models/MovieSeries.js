const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MovieSeries extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MovieSeries] })
}