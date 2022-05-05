const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class CarUsageType extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [CarUsageType] })
}