const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class FastFoodRestaurant extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [FastFoodRestaurant] })
}