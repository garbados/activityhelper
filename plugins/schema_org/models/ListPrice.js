const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ListPrice extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ListPrice] })
}