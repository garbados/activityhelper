const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MovieTheater extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MovieTheater] })
}