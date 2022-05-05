const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ItemListOrderType extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ItemListOrderType] })
}