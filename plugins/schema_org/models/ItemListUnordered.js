const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ItemListUnordered extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ItemListUnordered] })
}