const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Table extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Table] })
}