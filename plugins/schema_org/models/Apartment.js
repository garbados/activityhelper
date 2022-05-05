const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Apartment extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Apartment] })
}