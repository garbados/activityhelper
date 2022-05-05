const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ApartmentComplex extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ApartmentComplex] })
}