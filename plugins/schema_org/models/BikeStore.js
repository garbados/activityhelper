const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class BikeStore extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [BikeStore] })
}