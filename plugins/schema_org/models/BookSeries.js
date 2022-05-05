const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class BookSeries extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [BookSeries] })
}