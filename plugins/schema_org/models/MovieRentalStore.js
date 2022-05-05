const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MovieRentalStore extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MovieRentalStore] })
}