const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class FoodService extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [FoodService] })
}