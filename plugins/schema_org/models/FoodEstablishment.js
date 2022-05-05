const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class FoodEstablishment extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [FoodEstablishment] })
}