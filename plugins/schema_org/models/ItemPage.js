const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ItemPage extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ItemPage] })
}