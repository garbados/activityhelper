const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ItemListOrderAscending extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ItemListOrderAscending] })
}