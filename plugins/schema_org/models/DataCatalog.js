const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class DataCatalog extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [DataCatalog] })
}