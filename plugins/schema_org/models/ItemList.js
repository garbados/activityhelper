const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ItemList extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ItemList] })
}