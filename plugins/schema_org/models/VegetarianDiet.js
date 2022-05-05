const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class VegetarianDiet extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [VegetarianDiet] })
}