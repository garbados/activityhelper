const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Book extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Book] })
}