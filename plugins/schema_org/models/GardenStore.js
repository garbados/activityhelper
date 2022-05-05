const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class GardenStore extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [GardenStore] })
}