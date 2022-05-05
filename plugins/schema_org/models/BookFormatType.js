const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class BookFormatType extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [BookFormatType] })
}