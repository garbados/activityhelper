const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class RestrictedDiet extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [RestrictedDiet] })
}