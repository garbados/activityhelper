const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class FoodEvent extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [FoodEvent] })
}