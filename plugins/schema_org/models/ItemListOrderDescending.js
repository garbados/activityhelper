const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ItemListOrderDescending extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ItemListOrderDescending] })
}