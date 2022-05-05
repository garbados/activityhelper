const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class VeganDiet extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [VeganDiet] })
}