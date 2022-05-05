const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class LocationFeatureSpecification extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [LocationFeatureSpecification] })
}