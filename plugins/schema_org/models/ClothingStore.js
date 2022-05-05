const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ClothingStore extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ClothingStore] })
}