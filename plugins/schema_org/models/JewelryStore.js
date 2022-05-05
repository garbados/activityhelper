const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class JewelryStore extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [JewelryStore] })
}