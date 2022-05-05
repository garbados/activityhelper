const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MensClothingStore extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MensClothingStore] })
}