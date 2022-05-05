const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class FurnitureStore extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [FurnitureStore] })
}